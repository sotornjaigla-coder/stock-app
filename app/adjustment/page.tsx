"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

import {
  Product,
  loadProducts,
  adjustStock,
} from "@/lib/store";

export default function AdjustmentPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [realQty, setRealQty] = useState<number>(0);
  const [note, setNote] = useState("");

  useEffect(() => {
    setProducts(loadProducts());
  }, []);

  const selected = products.find(p => p.id === selectedId);

  const handleAdjust = () => {
    if (!selected) return;
    adjustStock(selected.id, realQty, note);
    alert("ปรับสต็อกเรียบร้อย");
    setProducts(loadProducts());
    setNote("");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">ปรับสต็อกสินค้า</h1>

      <Card>
        <CardContent className="p-4 space-y-4">

          <select
            className="w-full border rounded-xl h-10 px-2"
            value={selectedId}
            onChange={e => setSelectedId(e.target.value)}
          >
            <option value="">เลือกสินค้า</option>
            {products.map(p => (
              <option key={p.id} value={p.id}>
                {p.name} (เหลือ {p.stock})
              </option>
            ))}
          </select>

          {selected && (
            <>
              <div className="text-sm">
                สต็อกปัจจุบัน: <b>{selected.stock}</b>
              </div>

              <Input
                type="number"
                placeholder="จำนวนจริงที่นับได้"
                value={realQty}
                onChange={e => setRealQty(Number(e.target.value))}
              />

              <Input
                placeholder="หมายเหตุ เช่น นับสต็อกประจำเดือน"
                value={note}
                onChange={e => setNote(e.target.value)}
              />

              <div>
                {realQty > selected.stock && (
                  <Badge className="bg-green-600">
                    จะเพิ่ม {realQty - selected.stock}
                  </Badge>
                )}
                {realQty < selected.stock && (
                  <Badge variant="destructive">
                    จะลด {selected.stock - realQty}
                  </Badge>
                )}
              </div>

              <Button className="w-full" onClick={handleAdjust}>
                ยืนยันปรับสต็อก
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
