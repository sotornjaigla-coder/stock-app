"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import {
  Product,
  stockInLot,   // ⭐ ใช้ตัวใหม่
  loadProducts,
  loadTxs,
  formatTxLabel,
} from "@/lib/store";

export default function StockInPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState<number>(1);
  const [cost, setCost] = useState<number>(0);
  const [lotNo, setLotNo] = useState("");
  const [expiry, setExpiry] = useState("");

  const [txs, setTxs] = useState(loadTxs());

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    setProducts(loadProducts());
    setTxs(loadTxs());
  };

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold">รับเข้า</h1>
          <p className="text-sm text-slate-500">บันทึกรับสินค้าแบบล็อต</p>
        </div>
        <Badge variant="secondary">Real data</Badge>
      </div>

      {/* FORM */}
      <Card className="rounded-2xl">
        <CardContent className="space-y-3 p-4">
          <div className="text-sm font-medium">เลือกสินค้า</div>
          <select
            className="h-10 w-full rounded-xl border bg-white px-3 text-sm"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          >
            <option value="">-- เลือกสินค้า --</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>
                {p.sku} - {p.name} (คงเหลือ {p.stock})
              </option>
            ))}
          </select>

          <div className="text-sm font-medium">จำนวนรับเข้า</div>
          <Input type="number" value={qty} onChange={(e) => setQty(Number(e.target.value))} />

          <div className="text-sm font-medium">ราคาทุนต่อหน่วย</div>
          <Input type="number" value={cost} onChange={(e) => setCost(Number(e.target.value))} />

          <div className="text-sm font-medium">เลขล็อต</div>
          <Input placeholder="เช่น LOT-001" value={lotNo} onChange={(e) => setLotNo(e.target.value)} />

          <div className="text-sm font-medium">วันหมดอายุ</div>
          <Input type="date" value={expiry} onChange={(e) => setExpiry(e.target.value)} />

          <Button
            className="rounded-xl"
            disabled={!productId || qty <= 0 || cost <= 0 || !lotNo || !expiry}
            onClick={() => {
              stockInLot(
                productId,
                qty,
                cost,
                lotNo,
                new Date(expiry).getTime(),
                "รับสินค้าเข้า"
              );

              refresh();
              setProductId("");
              setQty(1);
              setCost(0);
              setLotNo("");
              setExpiry("");
            }}
          >
            + รับเข้าแบบล็อต
          </Button>
        </CardContent>
      </Card>

      {/* HISTORY */}
      <Card className="rounded-2xl">
        <CardContent className="p-4">
          <div className="font-semibold">ประวัติล่าสุด</div>
          <ul className="mt-3 space-y-2 text-sm">
            {txs
              .filter((t) => t.type === "IN")
              .slice(0, 10)
              .map((t) => {
                const p = products.find((x) => x.id === t.productId);
                return (
                  <li key={t.id} className="flex items-center justify-between rounded-xl bg-white p-3">
                    <span>
                      {formatTxLabel(t.type)} {p?.name ?? "-"} +{t.qty}
                    </span>
                    <span className="text-slate-500">
                      {new Date(t.at).toLocaleString()}
                    </span>
                  </li>
                );
              })}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
