export type Product = {
  id: string;
  sku: string;
  name: string;
  unit: string;
  stock: number;
  minStock: number;
  price: number;
  cost?: number;
  image?: string;
};

export type TxType = "IN" | "OUT" | "ADJUST" | "RETURN" | "RETURN_DAMAGED";

export type StockTx = {
  id: string;
  type: TxType;
  productId: string;
  qty: number;
  note?: string;
  at: number;
};

const KEY_PRODUCTS = "stock_app_products_v6";
const KEY_TX = "stock_app_txs_v6";

/* ---------------- SAFE STORAGE ---------------- */

function getStorage() {
  if (typeof window === "undefined") return null;
  return localStorage;
}

/* ---------------- PRODUCTS ---------------- */

export function loadProducts(): Product[] {
  const storage = getStorage();
  if (!storage) return [];
  const raw = storage.getItem(KEY_PRODUCTS);
  if (!raw) return [];
  return JSON.parse(raw);
}

export function saveProducts(products: Product[]) {
  const storage = getStorage();
  if (!storage) return;
  storage.setItem(KEY_PRODUCTS, JSON.stringify(products));
}

export function addProduct(p: Omit<Product, "id" | "stock">) {
  const next: Product = { id: crypto.randomUUID(), stock: 0, ...p };
  saveProducts([next, ...loadProducts()]);
}

export function updateProduct(updated: Product) {
  saveProducts(loadProducts().map(p => p.id === updated.id ? updated : p));
}

export function deleteProduct(id: string) {
  saveProducts(loadProducts().filter(p => p.id !== id));
  saveTxs(loadTxs().filter(t => t.productId !== id));
}

/* ---------------- TRANSACTIONS ---------------- */

export function loadTxs(): StockTx[] {
  const storage = getStorage();
  if (!storage) return [];
  const raw = storage.getItem(KEY_TX);
  return raw ? JSON.parse(raw) : [];
}

export function saveTxs(txs: StockTx[]) {
  const storage = getStorage();
  if (!storage) return;
  storage.setItem(KEY_TX, JSON.stringify(txs));
}

export function adjustStockWithTx(
  productId: string,
  type: TxType,
  qty: number,
  note?: string
) {
  const products = loadProducts().map(p => {
    if (p.id !== productId) return p;

    let newStock = p.stock;

    if (type === "IN" || type === "RETURN") newStock += qty;
    if (type === "OUT" || type === "RETURN_DAMAGED") newStock -= qty;
    if (type === "ADJUST") newStock = qty;

    return { ...p, stock: Math.max(0, newStock) };
  });

  saveProducts(products);

  const tx: StockTx = {
    id: crypto.randomUUID(),
    type,
    productId,
    qty,
    note,
    at: Date.now(),
  };

  saveTxs([tx, ...loadTxs()]);
}

/* ---------------- DASHBOARD ---------------- */

export function getDashboardSummary() {
  const products = loadProducts();
  const txs = loadTxs();

  const totalProducts = products.length;
  const lowStockCount = products.filter(p => p.stock <= p.minStock).length;

  const todayStart = new Date();
  todayStart.setHours(0, 0, 0, 0);
  const start = todayStart.getTime();
  const end = start + 86400000;

  const todayTxs = txs.filter(t => t.at >= start && t.at < end);

  const inToday = todayTxs
    .filter(t => t.type === "IN")
    .reduce((s, t) => s + t.qty, 0);

  const outToday = todayTxs
    .filter(t => t.type === "OUT")
    .reduce((s, t) => s + t.qty, 0);

  return {
    totalProducts,
    lowStockCount,
    inToday,
    outToday,
    lowStockProducts: products.filter(p => p.stock <= p.minStock),
    latestTxs: txs.slice(0, 5),
    products,
  };
}

export function formatTxLabel(type: TxType) {
  switch (type) {
    case "IN": return "รับเข้า";
    case "OUT": return "ขายออก";
    case "ADJUST": return "ปรับสต็อก";
    case "RETURN": return "ลูกค้าคืน (กลับสต็อก)";
    case "RETURN_DAMAGED": return "ของเสีย/ไม่คืนสต็อก";
    default: return type;
  }
}
