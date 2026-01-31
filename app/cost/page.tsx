"use client";
import { useEffect, useState } from "react";
import { getFinanceReport } from "@/lib/store";

export default function CostPage() {
  const [data, setData] = useState({ revenue:0, cost:0, profit:0 });

  useEffect(() => setData(getFinanceReport()), []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">ต้นทุนและกำไร</h1>

      <div>รายได้: ฿{data.revenue.toLocaleString()}</div>
      <div>ต้นทุน: ฿{data.cost.toLocaleString()}</div>
      <div className="text-green-600 font-bold">
        กำไร: ฿{data.profit.toLocaleString()}
      </div>
    </div>
  );
}
