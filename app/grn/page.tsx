"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { createGRN, loadGRNs, loadProducts, Product, seedIfEmpty } from "@/lib/store";

export default function GRNPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [grns, setGrns] = useState(loadGRNs());

  const [supplierName, setSupplierName] = useState("");
  const [note, setNote] = useState("");

  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState(1);
  const [cost, setCost] = useState(0);

  const [items, setItems] = useState<{ productId: string; qty: number; cost: number }[]>([]);

  useEffect(() => {
    seedIfEmpty();
    setProducts(loadProducts());
    setGrns(loadGRNs());
  }, []);

  const refresh = () => {
    setProducts(loadProducts());
    setGrns(loadGRNs());
  };

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold">GRN รับเข้า (เอกสาร)</h1>
          <p className="text-sm text-slate-500">สร้างเอกสารรับเข้าแบบบริษัทจริง</p>
        </div>
        <Badge variant="secondary">Backoffice</Badge>
      </div>

      <Card className="rounded-2xl">
        <CardContent className="p-4 space-y-3">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div>
              <div className="text-sm font-medium">Supplier</div>
              <Input value={supplierName} onChange={(e) => setSupplierName(e.target.value)} className="mt-2" />
            </div>
            <div>
              <div className="text-sm font-medium">หมายเหตุ</div>
              <Input value={note} onChange={(e) => setNote(e.target.value)} className="mt-2" />
            </div>
          </div>

          <div className="rounded-2xl border bg-white p-4 space-y-3">
            <div className="font-semibold">เพิ่มรายการรับเข้า</div>

            <select
              className="h-10 w-full rounded-xl border bg-white px-3 text-sm"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            >
              <option value="">-- เลือกสินค้า --</option>
              {products.filter(p=>p.isActive).map((p) => (
                <option key={p.id} value={p.id}>
                  {p.sku} - {p.name} (คงเหลือ {p.stock})
                </option>
              ))}
            </select>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
              <div>
                <div className="text-sm font-medium">จำนวน</div>
                <Input type="number" value={qty} onChange={(e) => setQty(Number(e.target.value))} className="mt-2" />
              </div>
              <div>
                <div className="text-sm font-medium">ต้นทุน/หน่วย</div>
                <Input type="number" value={cost} onChange={(e) => setCost(Number(e.target.value))} className="mt-2" />
              </div>
              <div className="flex items-end">
                <Button
                  className="rounded-xl w-full"
                  disabled={!productId || qty <= 0}
                  onClick={() => {
                    setItems((prev) => [...prev, { productId, qty, cost }]);
                    setProductId("");
                    setQty(1);
                    setCost(0);
                  }}
                >
                  + เพิ่มรายการ
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              {items.map((it, idx) => {
                const p = products.find((x) => x.id === it.productId);
                return (
                  <div key={idx} className="flex items-center justify-between rounded-xl border p-3">
                    <div>
                      <div className="font-semibold">{p?.name ?? "-"}</div>
                      <div className="text-xs text-slate-500">
                        qty {it.qty} x cost {it.cost} = {it.qty * it.cost}
                      </div>
                    </div>
                    <Button
                      variant="destructive"
                      onClick={() => setItems((prev) => prev.filter((_, i) => i !== idx))}
                    >
                      ลบ
                    </Button>
                  </div>
                );
              })}
              {items.length === 0 && (
                <div className="text-sm text-slate-500">ยังไม่มีรายการ</div>
              )}
            </div>

            <Button
              className="rounded-xl w-full"
              disabled={items.length === 0}
              onClick={() => {
                const grn = createGRN({
                  supplierName,
                  note,
                  items,
                });
                alert(`สร้าง GRN สำเร็จ ✅ ${grn.docNo}`);
                setSupplierName("");
                setNote("");
                setItems([]);
                refresh();
              }}
            >
              สร้างเอกสาร GRN และรับเข้าสต๊อก
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl">
        <CardContent className="p-4">
          <div className="font-semibold">เอกสาร GRN ล่าสุด</div>
          <div className="mt-3 space-y-2">
            {grns.slice(0, 10).map((g) => (
              <div key={g.id} className="rounded-2xl border bg-white p-3">
                <div className="font-semibold">{g.docNo}</div>
                <div className="text-xs text-slate-500">
                  Supplier: {g.supplierName || "-"} | {new Date(g.createdAt).toLocaleString()} | totalCost {g.totalCost}
                </div>
              </div>
            ))}
            {grns.length === 0 && (
              <div className="text-sm text-slate-500">ยังไม่มีเอกสาร GRN</div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
