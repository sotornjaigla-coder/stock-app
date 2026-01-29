"use client";

import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { loadLedger, loadProducts, seedIfEmpty } from "@/lib/store";

function formatType(type: string) {
  if (type === "PURCHASE_IN") return "รับเข้า";
  if (type === "SALE_OUT") return "ขายออก";
  if (type === "ADJUST") return "ปรับสต็อก";
  return type;
}

export default function LedgerPage() {
  const [q, setQ] = useState("");
  const [type, setType] = useState<string>("ALL");

  const [products, setProducts] = useState(() => loadProducts());
  const [ledger, setLedger] = useState(() => loadLedger());

  useEffect(() => {
    seedIfEmpty();
    setProducts(loadProducts());
    setLedger(loadLedger());

    const onFocus = () => {
      setProducts(loadProducts());
      setLedger(loadLedger());
    };
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, []);

  const rows = useMemo(() => {
    const keyword = q.trim().toLowerCase();
    return ledger.filter((r) => {
      if (type !== "ALL" && r.type !== type) return false;
      const p = products.find((x) => x.id === r.productId);
      const name = (p?.name ?? "").toLowerCase();
      const sku = (p?.sku ?? "").toLowerCase();
      return !keyword || name.includes(keyword) || sku.includes(keyword);
    });
  }, [ledger, products, q, type]);

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold">Stock Ledger</h1>
          <p className="text-sm text-slate-500">
            ดูการเคลื่อนไหวสต็อกทั้งหมด (Audit Trail)
          </p>
        </div>
        <Badge variant="secondary">Filter + Search</Badge>
      </div>

      <Card className="rounded-2xl">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
            <div>
              <div className="text-sm font-medium">ค้นหา</div>
              <Input
                className="mt-2"
                placeholder="ค้นหาจากชื่อหรือ SKU"
                value={q}
                onChange={(e) => setQ(e.target.value)}
              />
            </div>

            <div>
              <div className="text-sm font-medium">ประเภท</div>
              <select
                className="mt-2 h-10 w-full rounded-xl border bg-white px-3 text-sm"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="ALL">ทั้งหมด</option>
                <option value="PURCHASE_IN">รับเข้า</option>
                <option value="SALE_OUT">ขายออก</option>
                <option value="ADJUST">ปรับสต็อก</option>
              </select>
            </div>

            <div className="flex items-end gap-2">
              <Button variant="secondary" onClick={() => { setQ(""); setType("ALL"); }}>
                ล้างตัวกรอง
              </Button>
              <Button
                onClick={() => {
                  // refresh
                  setProducts(loadProducts());
                  setLedger(loadLedger());
                }}
              >
                รีเฟรช
              </Button>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {rows.slice(0, 100).map((r) => {
              const p = products.find((x) => x.id === r.productId);
              return (
                <div
                  key={r.id}
                  className="flex items-center justify-between rounded-2xl border bg-white p-3"
                >
                  <div>
                    <div className="font-semibold">
                      {formatType(r.type)} — {p?.name ?? "-"}
                    </div>
                    <div className="text-xs text-slate-500">
                      SKU: {p?.sku ?? "-"} | ก่อน: {r.beforeStock} → หลัง:{" "}
                      {r.afterStock} | อ้างอิง: {r.refType ?? "-"} {r.refId ? `(${r.refId.slice(0,8)})` : ""}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm font-bold">Qty: {r.qty}</div>
                    <div className="text-xs text-slate-500">
                      {new Date(r.at).toLocaleString()}
                    </div>
                  </div>
                </div>
              );
            })}

            {rows.length === 0 && (
              <div className="rounded-2xl border bg-white p-6 text-center text-sm text-slate-500">
                ไม่พบข้อมูล
              </div>
            )}

            {rows.length > 100 && (
              <div className="text-xs text-slate-500">
                แสดง 100 รายการล่าสุด (เพื่อความเร็ว)
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
