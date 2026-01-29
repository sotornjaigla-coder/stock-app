"use client";

import { useEffect, useState } from "react";
import {
  loadProducts,
  getStockCard,
  Product,
  formatTxLabel,
} from "@/lib/store";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function StockCardPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [productId, setProductId] = useState("");
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    setProducts(loadProducts());
  }, []);

  useEffect(() => {
    if (productId) setRows(getStockCard(productId));
  }, [productId]);

  const product = products.find(p => p.id === productId);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold">Stock Card</h1>
          <p className="text-sm text-slate-500">ประวัติการเคลื่อนไหวสินค้าแบบละเอียด</p>
        </div>
        <Badge variant="secondary">Real data</Badge>
      </div>

      <Card>
        <CardContent className="p-4 space-y-3">
          <div className="font-semibold">เลือกสินค้า</div>
          <select
            className="h-10 w-full rounded-xl border px-3 text-sm"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
          >
            <option value="">-- เลือกสินค้า --</option>
            {products.map(p => (
              <option key={p.id} value={p.id}>
                {p.sku} - {p.name}
              </option>
            ))}
          </select>
        </CardContent>
      </Card>

      {product && (
        <Card>
          <CardContent className="p-4 space-y-3">
            <div className="flex justify-between">
              <div className="font-semibold text-lg">{product.name}</div>
              <div className="text-sm text-slate-500">
                คงเหลือปัจจุบัน: <b>{product.stock} {product.unit}</b>
              </div>
            </div>

            <div className="overflow-auto">
              <table className="w-full text-sm border">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="p-2 border">วันที่</th>
                    <th className="p-2 border">รายการ</th>
                    <th className="p-2 border">เข้า</th>
                    <th className="p-2 border">ออก</th>
                    <th className="p-2 border">คงเหลือ</th>
                    <th className="p-2 border">หมายเหตุ</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map(r => {
                    const inQty = r.qty > 0 ? r.qty : "";
                    const outQty = r.qty < 0 ? Math.abs(r.qty) : "";

                    return (
                      <tr key={r.id} className="text-center">
                        <td className="border p-1">
                          {new Date(r.at).toLocaleString()}
                        </td>
                        <td className="border p-1">{formatTxLabel(r.type)}</td>
                        <td className="border p-1 text-green-600">{inQty}</td>
                        <td className="border p-1 text-red-600">{outQty}</td>
                        <td className="border p-1 font-semibold">{r.balance}</td>
                        <td className="border p-1">{r.note || "-"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
