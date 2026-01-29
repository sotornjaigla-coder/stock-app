"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  Product,
  loadProducts,
  stockCount,
  loadTxs,
  formatTxLabel,
} from "@/lib/store";

export default function StockCountPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState("");
  const [realQty, setRealQty] = useState<number>(0);
  const [note, setNote] = useState("");
  const [txs, setTxs] = useState(loadTxs());

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    setProducts(loadProducts());
    setTxs(loadTxs());
  };

  const selected = products.find(p => p.id === productId);

  const handleCount = () => {
    if (!selected) return;

    stockCount(productId, realQty, note || "ตรวจนับจากหน้า Stock Count");
    refresh();
    setProductId("");
    setRealQty(0);
    setNote("");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold">ตรวจนับสต็อก</h1>
          <p className="text-sm text-slate-500">ปรับจำนวนสินค้าให้ตรงกับของจริง</p>
        </div>
        <Badge variant="secondary">Stock Count</Badge>
      </div>

      <Card className="rounded-2xl">
        <CardContent className="space-y-4 p-4">
          <div>
            <div className="text-sm font-medium mb-1">เลือกสินค้า</div>
            <select
              className="h-10 w-full rounded-xl border bg-white px-3 text-sm"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            >
              <option value="">-- เลือกสินค้า --</option>
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} (ในระบบ {p.stock})
                </option>
              ))}
            </select>
          </div>

          {selected && (
            <div className="bg-slate-50 border rounded-xl p-3 text-sm">
              ในระบบมี <b>{selected.stock}</b> {selected.unit}
            </div>
          )}

          <div>
            <div className="text-sm font-medium mb-1">จำนวนจริงที่นับได้</div>
            <Input
              type="number"
              value={realQty}
              onChange={(e) => setRealQty(Number(e.target.value))}
            />
          </div>

          <Input
            placeholder="หมายเหตุ (เช่น ของหาย / นับรอบสิ้นเดือน)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />

          <Button
            className="w-full rounded-xl"
            disabled={!productId}
            onClick={handleCount}
          >
            บันทึกผลการตรวจนับ
          </Button>
        </CardContent>
      </Card>

      <Card className="rounded-2xl">
        <CardContent className="p-4">
          <div className="font-semibold mb-3">ประวัติการตรวจนับ</div>
          {txs
            .filter(t => t.type === "COUNT")
            .slice(0, 10)
            .map(t => {
              const p = products.find(x => x.id === t.productId);
              return (
                <div key={t.id} className="flex justify-between text-sm border p-2 rounded-lg mb-2">
                  <div>
                    {formatTxLabel(t.type)} — {p?.name ?? "-"}{" "}
                    {t.qty > 0 ? `(+${t.qty})` : `(${t.qty})`}
                  </div>
                  <div className="text-slate-500">
                    {new Date(t.at).toLocaleString()}
                  </div>
                </div>
              );
            })}
        </CardContent>
      </Card>
    </div>
  );
}
