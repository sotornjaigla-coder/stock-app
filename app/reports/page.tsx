"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

import { loadProducts, loadTxs, Product } from "@/lib/store";

export default function ReportsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [txs, setTxs] = useState<any[]>([]);

  useEffect(() => {
    setProducts(loadProducts());
    setTxs(loadTxs());
  }, []);

  // -------------------- TODAY RANGE --------------------
  const todayRange = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    const start = d.getTime();
    const end = start + 86400000;
    return { start, end };
  }, []);

  // -------------------- TODAY REVENUE --------------------
  const todayRevenue = useMemo(() => {
    return txs
      .filter(t => t.type === "OUT" && t.at >= todayRange.start && t.at < todayRange.end)
      .reduce((sum, t) => {
        const p = products.find(x => x.id === t.productId);
        return sum + (p?.price || 0) * t.qty;
      }, 0);
  }, [txs, products, todayRange]);

  // -------------------- TODAY PROFIT --------------------
  const todayProfit = useMemo(() => {
    return txs
      .filter(t => t.type === "OUT" && t.at >= todayRange.start && t.at < todayRange.end)
      .reduce((sum, t) => {
        const p = products.find(x => x.id === t.productId);
        return sum + ((p?.price || 0) - (p?.cost || 0)) * t.qty;
      }, 0);
  }, [txs, products, todayRange]);

  // -------------------- TOP PRODUCTS --------------------
  const topProducts = useMemo(() => {
    const map: any = {};
    txs.filter(t => t.type === "OUT").forEach(t => {
      map[t.productId] = (map[t.productId] || 0) + t.qty;
    });

    return Object.entries(map)
      .map(([id, qty]) => ({
        name: products.find(p => p.id === id)?.name || "-",
        qty
      }))
      .sort((a: any, b: any) => b.qty - a.qty)
      .slice(0, 5);
  }, [txs, products]);

  // -------------------- PDF EXPORT --------------------
  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Stock Report", 14, 18);

    doc.setFontSize(12);
    doc.text(`Total Products: ${products.length}`, 14, 30);
    doc.text(`Today's Revenue: ฿${todayRevenue}`, 14, 38);
    doc.text(`Today's Profit: ฿${todayProfit}`, 14, 46);

    autoTable(doc, {
      startY: 54,
      head: [["Name", "Stock", "Min", "Price"]],
      body: products.map(p => [
        p.name,
        p.stock,
        p.minStock,
        p.price
      ]),
    });

    doc.save("stock-report.pdf");
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">รายงาน</h1>

      <div className="grid md:grid-cols-3 gap-4">
        <Card><CardContent className="p-4">
          <div className="text-sm text-slate-500">ยอดขายวันนี้</div>
          <div className="text-2xl font-bold text-green-600">฿{todayRevenue}</div>
        </CardContent></Card>

        <Card><CardContent className="p-4">
          <div className="text-sm text-slate-500">กำไรวันนี้</div>
          <div className="text-2xl font-bold text-blue-600">฿{todayProfit}</div>
        </CardContent></Card>

        <Card><CardContent className="p-4">
          <div className="text-sm text-slate-500">สินค้าทั้งหมด</div>
          <div className="text-2xl font-bold">{products.length}</div>
        </CardContent></Card>
      </div>

      <Card>
        <CardContent className="p-4 space-y-2">
          <div className="font-semibold">สินค้าขายดี</div>
          {topProducts.map((p, i) => (
            <div key={i} className="flex justify-between text-sm bg-white p-2 rounded-lg">
              <span>{p.name}</span>
              <span>{p.qty} ชิ้น</span>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button onClick={exportPDF} className="rounded-xl">
        ดาวน์โหลด PDF รายงาน
      </Button>
    </div>
  );
}
