"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getStockValuation, seedIfEmpty } from "@/lib/store";

export default function ValuationPage() {
  const [data, setData] = useState(() => getStockValuation());

  useEffect(() => {
    seedIfEmpty();
    setData(getStockValuation());
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold">Stock Valuation</h1>
          <p className="text-sm text-slate-500">มูลค่าสต๊อก (ต้นทุน x จำนวนคงเหลือ)</p>
        </div>
        <Badge variant="secondary">Backoffice</Badge>
      </div>

      <Card className="rounded-2xl">
        <CardContent className="p-4">
          <div className="text-sm text-slate-500">มูลค่าสต๊อกรวม</div>
          <div className="mt-1 text-3xl font-bold">{data.totalValue}</div>
        </CardContent>
      </Card>

      <Card className="rounded-2xl">
        <CardContent className="p-4 space-y-2">
          {data.rows.map((r) => (
            <div key={r.id} className="flex items-center justify-between rounded-xl border bg-white p-3">
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-slate-500">SKU: {r.sku}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold">
                  {r.stock} x {r.cost} = {r.value}
                </div>
                <div className="text-xs text-slate-500">ต้นทุนต่อหน่วย</div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
