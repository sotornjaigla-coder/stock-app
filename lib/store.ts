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
  location?: string;
};

export type Supplier = { id: string; name: string };

export type TxType =
  | "IN"
  | "OUT"
  | "ADJUST"
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

export type LedgerRow = {
  id: string;
  productId: string;
  type: "PURCHASE_IN" | "SALE_OUT" | "ADJUST";
  qty: number;
  beforeStock: number;
  afterStock: number;
  refType?: string;
  refId?: string;
  at: number;
};

export type Lot = {
  id: string;
  productId: string;
  lotNo: string;
  expiry: number;
  qty: number;
  cost: number;
};

/* ================= STORAGE ================= */

const KEY_PRODUCTS = "stock_products_full";
const KEY_TX = "stock_txs_full";
const KEY_LEDGER = "stock_ledger_full";
const KEY_LOTS = "stock_lots_full";
const KEY_SUPPLIERS = "stock_suppliers_full";

const isClient = () => typeof window !== "undefined";

/* ================= PRODUCTS ================= */

export function loadProducts(): Product[] {
  if (!isClient()) return [];
  return JSON.parse(localStorage.getItem(KEY_PRODUCTS) || "[]");
}
export function saveProducts(p: Product[]) {
  if (!isClient()) return;
  localStorage.setItem(KEY_PRODUCTS, JSON.stringify(p));
}
export function updateProduct(updated: Product) {
  saveProducts(loadProducts().map(p => p.id === updated.id ? updated : p));
}

/* ================= SUPPLIERS ================= */

export function loadSuppliers(): Supplier[] {
  if (!isClient()) return [];
  return JSON.parse(localStorage.getItem(KEY_SUPPLIERS) || "[]");
}
export function addSupplier(s: Omit<Supplier,"id">) {
  const next = { id: crypto.randomUUID(), ...s };
  localStorage.setItem(KEY_SUPPLIERS, JSON.stringify([next, ...loadSuppliers()]));
}

/* ================= TX ================= */

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

/* ================= LEDGER ================= */

export function loadLedger(): LedgerRow[] {
  if (!isClient()) return [];
  return JSON.parse(localStorage.getItem(KEY_LEDGER) || "[]");
}
function addLedger(row: LedgerRow) {
  localStorage.setItem(KEY_LEDGER, JSON.stringify([row, ...loadLedger()]));
}

/* ================= LOT ================= */

export function loadLots(): Lot[] {
  if (!isClient()) return [];
  return JSON.parse(localStorage.getItem(KEY_LOTS) || "[]");
}
function saveLots(lots: Lot[]) {
  localStorage.setItem(KEY_LOTS, JSON.stringify(lots));
}

/* ================= STOCK OPS ================= */

export function stockIn(productId: string, qty: number, cost: number, note?: string) {
  const p = loadProducts().find(x=>x.id===productId);
  if (!p) return;
  const before = p.stock;
  const after = before + qty;
  updateProduct({ ...p, stock: after, cost });

  addTx({ id: crypto.randomUUID(), productId, type:"IN", qty, at:Date.now(), note, costSnapshot:cost, priceSnapshot:p.price });
  addLedger({ id: crypto.randomUUID(), productId, type:"PURCHASE_IN", qty, beforeStock:before, afterStock:after, at:Date.now() });
}

export function stockInLot(productId: string, qty:number, cost:number, lotNo:string, expiry:number, note?:string) {
  const lots = loadLots();
  lots.unshift({ id:crypto.randomUUID(), productId, lotNo, expiry, qty, cost });
  saveLots(lots);
  stockIn(productId, qty, cost, `ล็อต ${lotNo} ${note||""}`);
}

export function sellProduct(productId:string, qty:number) {
  const p = loadProducts().find(x=>x.id===productId);
  if (!p) return;
  const before = p.stock;
  const after = Math.max(0, before - qty);
  updateProduct({ ...p, stock: after });

  addTx({ id:crypto.randomUUID(), productId, type:"OUT", qty, at:Date.now(), costSnapshot:p.cost, priceSnapshot:p.price });
  addLedger({ id:crypto.randomUUID(), productId, type:"SALE_OUT", qty, beforeStock:before, afterStock:after, at:Date.now() });
}

export function adjustStock(productId:string, realQty:number, note?:string) {
  const p = loadProducts().find(x=>x.id===productId);
  if (!p) return;
  const before = p.stock;
  const diff = realQty - before;
  updateProduct({ ...p, stock: realQty });

  addTx({ id:crypto.randomUUID(), productId, type:"ADJUST", qty:diff, at:Date.now(), note });
  addLedger({ id:crypto.randomUUID(), productId, type:"ADJUST", qty:diff, beforeStock:before, afterStock:realQty, at:Date.now() });
}

export function stockCount(productId:string, realQty:number, note?:string){
  adjustStock(productId, realQty, note);
}

/* ================= REPORT ================= */

export function getStockCard(productId:string) {
  const txs = loadTxs().filter(t=>t.productId===productId).sort((a,b)=>a.at-b.at);
  let balance=0;
  return txs.map(t=>{
    balance += t.qty;
    return {...t, balance};
  });
}

export function getFinanceReport() {
  const txs=loadTxs(), products=loadProducts();
  const revenue=txs.filter(t=>t.type==="OUT").reduce((s,t)=>s+(products.find(p=>p.id===t.productId)?.price||0)*t.qty,0);
  const cost=txs.filter(t=>t.type==="OUT").reduce((s,t)=>s+(products.find(p=>p.id===t.productId)?.cost||0)*t.qty,0);
  return { revenue, cost, profit: revenue-cost };
}

export function getStockValuation(){
  const products=loadProducts();
  const rows=products.map(p=>({id:p.id,name:p.name,sku:p.sku,stock:p.stock,cost:p.cost,value:p.stock*p.cost}));
  const totalValue=rows.reduce((s,r)=>s+r.value,0);
  return {rows,totalValue};
}

export function formatTxLabel(type:TxType){
  return {IN:"รับเข้า",OUT:"ขาย",ADJUST:"ปรับสต็อก",COUNT:"ตรวจนับ",TRANSFER:"โอนย้าย"}[type];
}

export function seedIfEmpty(){
  if(!localStorage.getItem(KEY_PRODUCTS)) localStorage.setItem(KEY_PRODUCTS,"[]");
  if(!localStorage.getItem(KEY_TX)) localStorage.setItem(KEY_TX,"[]");
  if(!localStorage.getItem(KEY_LEDGER)) localStorage.setItem(KEY_LEDGER,"[]");
  if(!localStorage.getItem(KEY_LOTS)) localStorage.setItem(KEY_LOTS,"[]");
}
/* ================= ADD PRODUCT ================= */
export function addProduct(p: Omit<Product, "id" | "stock">) {
  const next: Product = {
    id: crypto.randomUUID(),
    stock: 0,
    location: "คลังหลัก",
    ...p,
  };
  saveProducts([next, ...loadProducts()]);
}

/* ================= DELETE PRODUCT ================= */
export function deleteProduct(id: string) {
  saveProducts(loadProducts().filter(p => p.id !== id));
  saveTxs(loadTxs().filter(t => t.productId !== id));
}

/* ================= TRANSFER STOCK ================= */
export function transferStock(
  productId: string,
  qty: number,
  fromLocation: string,
  toLocation: string
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
    note: `โอนจาก ${fromLocation} → ${toLocation}`,
  });
}

/* ================= DASHBOARD SUMMARY ================= */
export function getDashboardSummary() {
  const products = loadProducts();
  const txs = loadTxs();

  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const end = start + 86400000;

  const todayTxs = txs.filter(t => t.at >= start && t.at < end);

  const inToday = todayTxs
    .filter(t => t.type === "IN")
    .reduce((s, t) => s + (t.costSnapshot || 0) * t.qty, 0);

  const outToday = todayTxs
    .filter(t => t.type === "OUT")
    .reduce((s, t) => s + (t.priceSnapshot || 0) * t.qty, 0);

  return {
    totalProducts: products.length,
    lowStockCount: products.filter(p => p.stock <= p.minStock).length,
    inToday,
    outToday,
    products,
    latestTxs: txs.slice(0, 5),
  };
}
/* ================= CYCLE COUNT ================= */

export type CountRow = {
  productId: string;
  name: string;
  systemStock: number;
  countedStock: number;
  diff: number;
};

export type CountSession = {
  id: string;
  docNo: string;
  status: "DRAFT" | "POSTED";
  createdAt: number;
  rows: CountRow[];
};

const KEY_COUNT = "stock_count_sessions_v1";
export function loadCountSessions(): CountSession[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(KEY_COUNT) || "[]");
}

function saveCountSessions(data: CountSession[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY_COUNT, JSON.stringify(data));
}
export function createCountSession(note?: string): CountSession {
  const products = loadProducts();

  const rows: CountRow[] = products.map(p => ({
    productId: p.id,
    name: p.name,
    systemStock: p.stock,
    countedStock: p.stock,
    diff: 0,
  }));

  const session: CountSession = {
    id: crypto.randomUUID(),
    docNo: "CC-" + Date.now().toString().slice(-6),
    status: "DRAFT",
    createdAt: Date.now(),
    rows,
  };

  saveCountSessions([session, ...loadCountSessions()]);
  return session;
}
export function updateCountRow(sessionId: string, productId: string, counted: number) {
  const sessions = loadCountSessions();

  const s = sessions.find(x => x.id === sessionId);
  if (!s || s.status !== "DRAFT") return;

  const r = s.rows.find(x => x.productId === productId);
  if (!r) return;

  r.countedStock = counted;
  r.diff = counted - r.systemStock;

  saveCountSessions(sessions);
}
export function postCountSession(sessionId: string) {
  const sessions = loadCountSessions();
  const s = sessions.find(x => x.id === sessionId);
  if (!s || s.status !== "DRAFT") return;

  s.rows.forEach(r => {
    if (r.diff !== 0) {
      adjustStock(r.productId, r.systemStock + r.diff, "Cycle Count Adjustment");
    }
  });

  s.status = "POSTED";
  saveCountSessions(sessions);
}
