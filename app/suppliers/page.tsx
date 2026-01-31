"use client";
import { useState, useEffect } from "react";
import { loadSuppliers, addSupplier } from "@/lib/store";

export default function SuppliersPage() {
  const [list, setList] = useState<any[]>([]);
  const [name, setName] = useState("");

  useEffect(() => setList(loadSuppliers()), []);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">ซัพพลายเออร์</h1>

      <div className="flex gap-2">
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="ชื่อซัพพลายเออร์"
          className="border p-2 rounded"
        />
        <button
          onClick={() => {
            addSupplier({ name });
            setList(loadSuppliers());
            setName("");
          }}
          className="bg-blue-600 text-white px-4 rounded"
        >
          เพิ่ม
        </button>
      </div>

      {list.map(s => (
        <div key={s.id} className="border p-2 rounded">{s.name}</div>
      ))}
    </div>
  );
}
