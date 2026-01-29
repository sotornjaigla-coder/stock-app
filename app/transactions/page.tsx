"use client";

import { useEffect, useState } from "react";
import { loadTxs, loadProducts, formatTxLabel } from "@/lib/store";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function TransactionsPage() {
  const [txs, setTxs] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    setTxs(loadTxs());
    setProducts(loadProducts());
  }, []);

  const getProductName = (id: string) =>
    products.find(p => p.id === id)?.name || "-";

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">ประวัติการเคลื่อนไหวสินค้า</h1>

      <Card>
        <CardContent className="p-4 space-y-2">
          {txs.map(t => (
            <div key={t.id} className="rounded-xl border bg-white p-3 text-sm">
              <div className="flex justify-between">
                <div className="font-semibold">
                  {formatTxLabel(t.type)} {getProductName(t.productId)} ({t.qty})
                </div>
                <Badge variant="secondary">
                  {new Date(t.at).toLocaleString()}
                </Badge>
              </div>

              {t.note && (
                <div className="text-xs text-slate-500 mt-1">
                  หมายเหตุ: {t.note}
                </div>
              )}
            </div>
          ))}

          {txs.length === 0 && (
            <div className="text-sm text-slate-500">ยังไม่มีข้อมูล</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
