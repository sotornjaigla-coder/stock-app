"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menus = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "สินค้า", href: "/products" },
  { name: "รับเข้า", href: "/stock-in" },
  { name: "เบิกออก", href: "/stock-out" },
  { name: "ปรับสต็อก", href: "/adjustment" },
  { name: "ตรวจนับสต็อก", href: "/stock-count" },
  { name: "โอนย้ายสินค้า", href: "/transfer" },
  { name: "Stock Card", href: "/stock-card" },
  { name: "ล็อตสินค้า", href: "/lots" },

  { name: "POS ขายหน้าร้าน", href: "/pos" },

{ name: "รายงาน", href: "/reports" },
{ name: "ประวัติ", href: "/transactions" },

];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="h-screen w-64 border-r bg-white px-4 py-5">
      <div className="text-xl font-bold tracking-tight">STOCK APP</div>
      <div className="mt-1 text-xs text-slate-500">ระบบจัดการสต็อกสินค้า</div>

      <nav className="mt-6 flex flex-col gap-1">
        {menus.map((m) => {
          const active = pathname === m.href;
          return (
            <Link
              key={m.href}
              href={m.href}
              className={[
                "rounded-xl px-3 py-2 text-sm transition",
                active
                  ? "bg-slate-900 text-white"
                  : "text-slate-700 hover:bg-slate-100",
              ].join(" ")}
            >
              {m.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-6 rounded-xl border bg-slate-50 p-3 text-xs text-slate-600">
        <div className="font-semibold">Tips</div>
        <div className="mt-1">
          เริ่มจากเพิ่มสินค้าในเมนู “สินค้า” ก่อน แล้วค่อยรับเข้า/เบิกออก
        </div>
      </div>
    </aside>
  );
}
