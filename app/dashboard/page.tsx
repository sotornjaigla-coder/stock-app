"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getDashboardSummary, formatTxLabel, loadTxs } from "@/lib/store";
import {
<<<<<<< HEAD
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
=======
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
>>>>>>> a2fad253fba2f1bb84a19a2035dd48566999226c
} from "recharts";

export default function DashboardPage() {
  const [data, setData] = useState(getDashboardSummary());
  const [chartData, setChartData] = useState<any[]>([]);

  useEffect(() => {
    const refresh = () => {
      setData(getDashboardSummary());
      buildChart();
    };
    refresh();
    window.addEventListener("focus", refresh);
    return () => window.removeEventListener("focus", refresh);
  }, []);

  function buildChart() {
    const txs = loadTxs();
    const today = new Date();
    const days: any[] = [];

    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const start = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
      const end = start + 86400000;

      const sales = txs
        .filter(t => t.type === "OUT" && t.at >= start && t.at < end)
        .reduce((s, t) => s + (t.priceSnapshot || 0) * t.qty, 0);

      days.push({
        day: d.toLocaleDateString("th-TH", { day: "numeric", month: "short" }),
        sales,
      });
    }

    setChartData(days);
  }

  return (
    <div className="space-y-6">

      {/* HEADER */}
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-sm text-slate-500">ภาพรวมระบบสต็อก</p>
        </div>
        <Badge variant="secondary">Real data</Badge>
      </div>

      {/* SUMMARY */}
      <div className="grid gap-4 md:grid-cols-4">
        <SummaryCard title="สินค้าทั้งหมด" value={data.totalProducts} />
        <SummaryCard title="ใกล้หมด" value={data.lowStockCount} red />
        <SummaryCard title="รับเข้า (วันนี้)" value={`+${data.inToday}`} />
<<<<<<< HEAD
=======
        {/* ✅ เอาเครื่องหมายลบออก */}
>>>>>>> a2fad253fba2f1bb84a19a2035dd48566999226c
        <SummaryCard
          title="ขายออก (วันนี้)"
          value={`฿${data.outToday.toLocaleString()} บาท`}
          green
        />
      </div>

      {/* SALES CHART */}
      <Card>
        <CardContent className="p-4">
          <div className="font-semibold mb-3">ยอดขาย 7 วันล่าสุด (บาท)</div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
<<<<<<< HEAD
                {/* ✅ FIX TYPE ERROR */}
                <Tooltip
  formatter={(value, name) => [
    `฿${Number(value).toLocaleString()} บาท`,
    "ยอดขาย",
  ]}
/>

=======
                <Tooltip formatter={(v:number)=>`฿${v.toLocaleString()} บาท`} />
>>>>>>> a2fad253fba2f1bb84a19a2035dd48566999226c
                <Line type="monotone" dataKey="sales" stroke="#2563eb" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* LOW STOCK PRODUCTS */}
      <Card>
        <CardContent className="p-4 space-y-3">
          <div className="font-semibold">สินค้าใกล้หมด</div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {data.products
              .filter(p => p.stock <= p.minStock)
              .map(p => (
                <div key={p.id} className="rounded-xl border bg-white p-3">
<<<<<<< HEAD
=======

                  {/* ⭐ FIX รูปไม่หลุดกรอบ */}
>>>>>>> a2fad253fba2f1bb84a19a2035dd48566999226c
                  <div className="w-full aspect-square overflow-hidden rounded-lg border bg-slate-50 relative">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        sizes="200px"
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
                        No image
                      </div>
                    )}
                  </div>

                  <div className="mt-2 text-sm font-semibold text-center">{p.name}</div>
                  <div className="text-xs text-red-600 text-center">
                    เหลือ {p.stock} {p.unit} / ขั้นต่ำ {p.minStock}
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>

      {/* RECENT ACTIVITY */}
      <Card>
        <CardContent className="p-4 space-y-2">
          <div className="font-semibold">กิจกรรมล่าสุด</div>

          {data.latestTxs.map(t => {
            const p = data.products.find(x => x.id === t.productId);
            return (
              <div key={t.id} className="flex justify-between text-sm bg-white p-2 rounded-lg border">
                <div>{formatTxLabel(t.type)} — {p?.name ?? "-"}</div>
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

function SummaryCard({ title, value, red, green }: any) {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="text-sm text-slate-500">{title}</div>
        <div className={`text-2xl font-bold ${red ? "text-red-600" : green ? "text-green-600" : ""}`}>
          {value}
        </div>
      </CardContent>
    </Card>
  );
}
