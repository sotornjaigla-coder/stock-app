/* ================= TYPES ================= */

export type Product = {
  id: string;
  sku: string;
  name: string;
  unit: string;
  stock: number;
  minStock: number;
  price: number;
  cost: number;
  supplierId?: string;
  image?: string;
  location?: string; // คลังสินค้า
};

export type TxType =
  | "IN"
  | "OUT"
  | "ADJUST"
  | "RETURN_GOOD"
  | "RETURN_BAD"
  | "COUNT"
  | "TRANSFER";

export type StockTx = {
  id: string;
  productId: string;
  type: TxType;
  qty: number;
  at: number;
  note?: string;
  costSnapshot?: number;
  priceSnapshot?: number;
};

/* ================= STORAGE ================= */

const KEY_PRODUCTS = "stock_products_v8";
const KEY_TX = "stock_txs_v8";

const isClient = () => typeof window !== "undefined";

/* ================= PRODUCTS ================= */

export function loadProducts(): Product[] {
  if (!isClient()) return [];
  const raw = localStorage.getItem(KEY_PRODUCTS);
  if (!raw) return [];
  return JSON.parse(raw).map((p: any) => ({
    stock: 0,
    minStock: 0,
    price: 0,
    cost: 0,
    location: "คลังหลัก",
    ...p,
  }));
}

export function saveProducts(products: Product[]) {
  if (!isClient()) return;
  localStorage.setItem(KEY_PRODUCTS, JSON.stringify(products));
}

export function addProduct(p: Omit<Product, "id" | "stock">) {
  const next: Product = {
    id: crypto.randomUUID(),
    stock: 0,
    location: "คลังหลัก",
    ...p,
  };
  saveProducts([next, ...loadProducts()]);
}

export function updateProduct(updated: Product) {
  saveProducts(loadProducts().map(p => p.id === updated.id ? updated : p));
}
export function deleteProduct(id: string) {
  const products = loadProducts().filter(p => p.id !== id);
  saveProducts(products);

  // ลบประวัติ tx ของสินค้านี้ด้วย
  const txs = loadTxs().filter(t => t.productId !== id);
  saveTxs(txs);
}

/* ================= TRANSACTIONS ================= */

export function loadTxs(): StockTx[] {
  if (!isClient()) return [];
  return JSON.parse(localStorage.getItem(KEY_TX) || "[]");
}

export function saveTxs(txs: StockTx[]) {
  if (!isClient()) return;
  localStorage.setItem(KEY_TX, JSON.stringify(txs));
}

function addTx(tx: StockTx) {
  saveTxs([tx, ...loadTxs()]);
}

/* ================= STOCK OPERATIONS ================= */

export function stockIn(productId: string, qty: number, costPerUnit: number, note?: string) {
  const p = loadProducts().find(x => x.id === productId);
  if (!p) return;

  updateProduct({ ...p, stock: p.stock + qty, cost: costPerUnit });

  addTx({
    id: crypto.randomUUID(),
    productId,
    type: "IN",
    qty,
    at: Date.now(),
    note,
    costSnapshot: costPerUnit,
    priceSnapshot: p.price,
  });
}

export function sellProduct(productId: string, qty: number) {
  const p = loadProducts().find(x => x.id === productId);
  if (!p) return;

  updateProduct({ ...p, stock: Math.max(0, p.stock - qty) });

  addTx({
    id: crypto.randomUUID(),
    productId,
    type: "OUT",
    qty,
    at: Date.now(),
    costSnapshot: p.cost,
    priceSnapshot: p.price,
  });
}

export function adjustStock(productId: string, realQty: number, note?: string) {
  const p = loadProducts().find(x => x.id === productId);
  if (!p) return;

  const diff = realQty - p.stock;
  updateProduct({ ...p, stock: realQty });

  addTx({
    id: crypto.randomUUID(),
    productId,
    type: "ADJUST",
    qty: diff,
    at: Date.now(),
    note,
    costSnapshot: p.cost,
    priceSnapshot: p.price,
  });
}

/* ================= COUNT ================= */

export function stockCount(productId: string, realQty: number, note?: string) {
  const p = loadProducts().find(x => x.id === productId);
  if (!p) return;

  const diff = realQty - p.stock;
  updateProduct({ ...p, stock: realQty });

  addTx({
    id: crypto.randomUUID(),
    productId,
    type: "COUNT",
    qty: diff,
    at: Date.now(),
    note,
    costSnapshot: p.cost,
    priceSnapshot: p.price,
  });
}

/* ================= TRANSFER ================= */

export function transferStock(
  productId: string,
  qty: number,
  fromLocation: string,
  toLocation: string,
  note?: string
) {
  const products = loadProducts();
  const source = products.find(p => p.id === productId);
  if (!source || source.stock < qty) return;

  // ลดต้นทาง
  updateProduct({ ...source, stock: source.stock - qty });

  // หา SKU + location ปลายทาง
  const target = products.find(
    p => p.sku === source.sku && p.location === toLocation
  );

  if (target) {
    updateProduct({ ...target, stock: target.stock + qty });
  } else {
    const newProduct: Product = {
      ...source,
      id: crypto.randomUUID(),
      stock: qty,
      location: toLocation,
    };
    saveProducts([newProduct, ...loadProducts()]);
  }

  addTx({
    id: crypto.randomUUID(),
    productId,
    type: "TRANSFER",
    qty,
    at: Date.now(),
    note: `โอนจาก ${fromLocation} → ${toLocation} ${note ?? ""}`,
    costSnapshot: source.cost,
    priceSnapshot: source.price,
  });
}

/* ================= DASHBOARD ================= */

export function getDashboardSummary() {
  const products = loadProducts();
  const txs = loadTxs();

  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const end = start + 86400000;

  const todayTxs = txs.filter(t => t.at >= start && t.at < end);

  return {
    totalProducts: products.length,
    lowStockCount: products.filter(p => p.stock <= p.minStock).length,
    inToday: todayTxs.filter(t => t.type === "IN")
      .reduce((s,t)=>s+(t.costSnapshot||0)*t.qty,0),
    outToday: todayTxs.filter(t => t.type === "OUT")
      .reduce((s,t)=>s+(t.priceSnapshot||0)*t.qty,0),
    lowStockProducts: products.filter(p=>p.stock<=p.minStock).slice(0,5),
    latestTxs: txs.slice(0,5),
    products,
  };
}

/* ================= LABEL ================= */

export function formatTxLabel(type: TxType) {
  const map: Record<TxType,string> = {
    IN:"รับเข้า",
    OUT:"ขาย",
    ADJUST:"ปรับสต็อก",
    RETURN_GOOD:"คืนของดี",
    RETURN_BAD:"คืนของเสีย",
    COUNT:"ตรวจนับสต็อก",
    TRANSFER:"โอนย้ายสินค้า"
  };
  return map[type];
}
export function getStockCard(productId: string) {
  const txs = loadTxs()
    .filter(t => t.productId === productId)
    .sort((a, b) => a.at - b.at);

  let balance = 0;

  return txs.map(t => {
    if (t.type === "IN" || t.type === "RETURN_GOOD") balance += t.qty;
    if (t.type === "OUT" || t.type === "RETURN_BAD") balance -= t.qty;
    if (t.type === "ADJUST" || t.type === "COUNT") balance += t.qty;

    return { ...t, balance };
  });
}
export function getSlowMovingProducts(days = 30) {
  const limit = Date.now() - days * 86400000;
  const txs = loadTxs();

  return loadProducts().filter(p => {
    const lastTx = txs
      .filter(t => t.productId === p.id)
      .sort((a,b)=>b.at-a.at)[0];

    return !lastTx || lastTx.at < limit;
  });
}
export function getReorderList() {
  return loadProducts()
    .filter(p => p.stock <= p.minStock)
    .map(p => ({
      ...p,
      suggestQty: p.minStock * 2 - p.stock
    }));
}
export function getAdjustHistory() {
  return loadTxs().filter(t => t.type === "ADJUST" || t.type === "COUNT");
}
export type Lot = {
  id: string;
  productId: string;
  lotNo: string;
  expiry: number;     // timestamp
  qty: number;
  cost: number;
};

const KEY_LOTS = "stock_lots_v1";
export function loadLots(): Lot[] {
  if (!isClient()) return [];
  return JSON.parse(localStorage.getItem(KEY_LOTS) || "[]");
}

export function saveLots(lots: Lot[]) {
  if (!isClient()) return;
  localStorage.setItem(KEY_LOTS, JSON.stringify(lots));
}
export function stockInLot(
  productId: string,
  qty: number,
  costPerUnit: number,
  lotNo: string,
  expiry: number,
  note?: string
) {
  const lots = loadLots();

  lots.unshift({
    id: crypto.randomUUID(),
    productId,
    lotNo,
    expiry,
    qty,
    cost: costPerUnit,
  });

  saveLots(lots);

  const p = loadProducts().find(x => x.id === productId);
  if (!p) return;

  updateProduct({ ...p, stock: p.stock + qty, cost: costPerUnit });

  addTx({
    id: crypto.randomUUID(),
    productId,
    type: "IN",
    qty,
    at: Date.now(),
    note: `ล็อต ${lotNo}`,
    costSnapshot: costPerUnit,
    priceSnapshot: p.price,
  });
}
export function sellWithLot(productId: string, qty: number) {
  let lots = loadLots()
    .filter(l => l.productId === productId && l.qty > 0)
    .sort((a, b) => a.expiry - b.expiry); // หมดอายุก่อนออกก่อน

  let remaining = qty;

  for (let lot of lots) {
    if (remaining <= 0) break;

    const take = Math.min(lot.qty, remaining);
    lot.qty -= take;
    remaining -= take;

    const p = loadProducts().find(x => x.id === productId);
    if (!p) return;

    addTx({
      id: crypto.randomUUID(),
      productId,
      type: "OUT",
      qty: take,
      at: Date.now(),
      note: `ล็อต ${lot.lotNo}`,
      costSnapshot: lot.cost,
      priceSnapshot: p.price,
    });
  }

  saveLots(loadLots());

  const p = loadProducts().find(x => x.id === productId);
  if (p) updateProduct({ ...p, stock: Math.max(0, p.stock - qty) });
}
export type ProductLot = {
  id: string;
  productId: string;
  lotNo: string;
  expiry: number;   // timestamp วันหมดอายุ
  qty: number;
};
const KEY_LOTS = "stock_lots_v1";
