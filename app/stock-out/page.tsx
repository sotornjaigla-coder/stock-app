"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import {
  Product,
  sellProduct,
  loadProducts,
  loadTxs,
  formatTxLabel,
} from "@/lib/store";

export default function StockOutPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState<number>(1);
  const [txs, setTxs] = useState(loadTxs());

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => {
    setProducts(loadProducts());
    setTxs(loadTxs());
  };

  const selected = products.find(p => p.id === productId);

  const handleStockOut = () => {
    if (!selected) return;

    if (qty > selected.stock) {
      alert("สต็อกไม่พอ");
      return;
    }

    sellProduct(productId, qty);   // ⭐ ระบบใหม่
    refresh();
    setProductId("");
    setQty(1);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold">เบิกออก</h1>
          <p className="text-sm text-slate-500">ตัดสต็อกสินค้าออกจากคลัง</p>
        </div>
        <Badge variant="secondary">Real data</Badge>
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
                  {p.sku} - {p.name} (เหลือ {p.stock} {p.unit})
                </option>
              ))}
            </select>
          </div>

          {selected && (
            <div className="flex gap-4 items-center bg-slate-50 p-3 rounded-xl border">
              <div className="relative h-16 w-16 rounded-lg overflow-hidden border">
                {selected.image ? (
                  <Image
                    src={selected.image}
                    alt={selected.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
                    No image
                  </div>
                )}
              </div>

              <div className="text-sm">
                <div className="font-semibold">{selected.name}</div>
                <div className="text-slate-500">
                  คงเหลือ {selected.stock} {selected.unit}
                </div>
              </div>
            </div>
          )}

          <div>
            <div className="text-sm font-medium mb-1">จำนวนเบิกออก</div>
            <Input
              type="number"
              value={qty}
              min={1}
              onChange={(e) => setQty(Number(e.target.value))}
            />
          </div>

          <Button
            className="rounded-xl w-full"
            variant="destructive"
            disabled={!selected || qty <= 0}
            onClick={handleStockOut}
          >
            เบิกออกจากสต็อก
          </Button>
        </CardContent>
      </Card>

      <Card className="rounded-2xl">
        <CardContent className="p-4">
          <div className="font-semibold mb-3">ประวัติล่าสุด</div>
          <ul className="space-y-2 text-sm">
            {txs
              .filter((t) => t.type === "OUT")
              .slice(0, 10)
              .map((t) => {
                const p = products.find((x) => x.id === t.productId);
                return (
                  <li
                    key={t.id}
                    className="flex items-center justify-between rounded-xl bg-white p-3 border"
                  >
                    <span>
                      {formatTxLabel(t.type)} — {p?.name ?? "-"} {t.qty} {p?.unit}
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
