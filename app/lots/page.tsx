"use client";

import { useEffect, useState } from "react";
import { loadLots, loadProducts } from "@/lib/store";

export default function LotsPage() {
  const [lots, setLots] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    setLots(loadLots());
    setProducts(loadProducts());
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">ล็อตสินค้า</h1>

      <table className="w-full border text-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-2 border">สินค้า</th>
            <th className="p-2 border">ล็อต</th>
            <th className="p-2 border">วันหมดอายุ</th>
            <th className="p-2 border">คงเหลือ</th>
          </tr>
        </thead>
        <tbody>
          {lots.map(l => {
            const p = products.find((x:any)=>x.id===l.productId);
            const daysLeft = Math.ceil((l.expiry - Date.now()) / 86400000);

            return (
              <tr key={l.id} className={daysLeft < 7 ? "bg-red-50" : ""}>
                <td className="border p-1">{p?.name}</td>
                <td className="border p-1">{l.lotNo}</td>
                <td className="border p-1">
                  {new Date(l.expiry).toLocaleDateString()} ({daysLeft} วัน)
                </td>
                <td className="border p-1">{l.qty}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
