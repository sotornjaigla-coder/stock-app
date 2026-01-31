"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { loadProducts, transferStock, Product } from "@/lib/store";

export default function TransferPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState("");
  const [qty, setQty] = useState(1);
  const [fromLocation, setFromLocation] = useState("คลังหลัก");
  const [toLocation, setToLocation] = useState("หน้าร้าน");

  useEffect(() => {
    setProducts(loadProducts());
  }, []);

  const selected = products.find(p => p.id === productId);

  const handleTransfer = () => {
    if (!selected) return;
    if (qty > selected.stock) return alert("สต็อกไม่พอ");

    transferStock(productId, qty, fromLocation, toLocation);
    alert("โอนย้ายสำเร็จ");
    setProducts(loadProducts());
    setProductId("");
    setQty(1);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold">โอนย้ายสินค้า</h1>
          <p className="text-sm text-slate-500">ย้ายสินค้าระหว่างคลัง</p>
        </div>
        <Badge variant="secondary">Stock Transfer</Badge>
      </div>

      <Card className="rounded-2xl">
        <CardContent className="space-y-4 p-4">
          <select
            className="w-full h-10 border rounded-xl px-3"
            value={productId}
            onChange={e => setProductId(e.target.value)}
          >
            <option value="">เลือกสินค้า</option>
            {products.map(p => (
              <option key={p.id} value={p.id}>
                {p.name} (เหลือ {p.stock})
              </option>
            ))}
          </select>

          <Input type="number" value={qty} onChange={e => setQty(Number(e.target.value))} />

          <Input value={fromLocation} onChange={e => setFromLocation(e.target.value)} placeholder="จากคลัง" />
          <Input value={toLocation} onChange={e => setToLocation(e.target.value)} placeholder="ไปคลัง" />

          <Button className="w-full" onClick={handleTransfer} disabled={!productId}>
            โอนย้ายสินค้า
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
