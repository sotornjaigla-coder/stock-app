"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import {
  createCountSession,
  loadCountSessions,
  postCountSession,
  seedIfEmpty,
  updateCountRow,
} from "@/lib/store";

export default function CountPage() {
  const [sessions, setSessions] = useState(loadCountSessions());
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    seedIfEmpty();
    setSessions(loadCountSessions());
  }, []);

  const refresh = () => setSessions(loadCountSessions());

  const active = sessions.find((s) => s.id === activeId);

  return (
    <div className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h1 className="text-2xl font-bold">Cycle Count (นับสต๊อก)</h1>
          <p className="text-sm text-slate-500">สร้างรอบนับ → ปรับยอดจากส่วนต่างอัตโนมัติ</p>
        </div>
        <Badge variant="secondary">Backoffice</Badge>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          className="rounded-xl"
          onClick={() => {
            const s = createCountSession("");
            refresh();
            setActiveId(s.id);
            alert(`สร้างรอบนับสำเร็จ ✅ ${s.docNo}`);
          }}
        >
          + สร้างรอบนับ
        </Button>

        <Button
          variant="secondary"
          onClick={() => {
            refresh();
          }}
        >
          รีเฟรช
        </Button>
      </div>

      <Card className="rounded-2xl">
        <CardContent className="p-4">
          <div className="font-semibold">รอบนับล่าสุด</div>
          <div className="mt-3 flex flex-wrap gap-2">
            {sessions.slice(0, 10).map((s) => (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`rounded-xl border px-3 py-2 text-sm ${
                  activeId === s.id ? "bg-slate-900 text-white" : "bg-white"
                }`}
              >
                {s.docNo} ({s.status})
              </button>
            ))}
            {sessions.length === 0 && (
              <div className="text-sm text-slate-500">ยังไม่มีรอบนับ</div>
            )}
          </div>
        </CardContent>
      </Card>

      {active && (
        <Card className="rounded-2xl">
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{active.docNo}</div>
                <div className="text-xs text-slate-500">
                  สร้างเมื่อ {new Date(active.createdAt).toLocaleString()}
                </div>
              </div>

              <Button
                className="rounded-xl"
                disabled={active.status !== "DRAFT"}
                onClick={() => {
                  postCountSession(active.id);
                  alert("โพสต์ผลนับสำเร็จ ✅ (ระบบปรับยอดอัตโนมัติแล้ว)");
                  refresh();
                }}
              >
                โพสต์ผลนับ (Post)
              </Button>
            </div>

            <div className="space-y-2">
              {active.rows.map((r) => (
                <div key={r.productId} className="grid grid-cols-1 gap-2 rounded-2xl border bg-white p-3 md:grid-cols-4">
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-sm text-slate-500">ระบบ: {r.systemStock}</div>
                  <div>
                    <Input
                      type="number"
                      disabled={active.status !== "DRAFT"}
                      value={r.countedStock}
                      onChange={(e) => {
                        updateCountRow(active.id, r.productId, Number(e.target.value));
                        refresh();
                      }}
                    />
                  </div>
                  <div className={`text-sm font-semibold ${r.diff !== 0 ? "text-red-600" : "text-slate-600"}`}>
                    diff: {r.diff}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
