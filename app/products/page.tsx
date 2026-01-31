"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";

import {
  Product,
  addProduct,
  deleteProduct,
  loadProducts,
  updateProduct,
} from "@/lib/store";

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [editItem, setEditItem] = useState<Product | null>(null);

  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [unit, setUnit] = useState("ชิ้น");
  const [minStock, setMinStock] = useState<number | "">("");
  const [price, setPrice] = useState<number | "">("");
  const [image, setImage] = useState<string | undefined>(undefined);

  useEffect(() => {
    refresh();
  }, []);

  const refresh = () => setProducts(loadProducts());
  const canSave = useMemo(() => sku.trim() && name.trim(), [sku, name]);

  const resetForm = () => {
    setSku("");
    setName("");
    setUnit("ชิ้น");
    setMinStock("");
    setPrice("");
    setImage(undefined);
  };

  const onAdd = () => {
    if (!canSave) return;

addProduct({
  sku: sku.trim(),
  name: name.trim(),
  unit: unit.trim() || "ชิ้น",
  minStock: Number(minStock) || 0,
  price: Number(price) || 0,
  cost: 0,                // ⭐ ต้องใส่
  location: "คลังหลัก",   // ⭐ ต้องใส่
  image,
});


    resetForm();
    setOpen(false);
    refresh();
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">สินค้า</h1>
          <p className="text-sm text-slate-500">จัดการสินค้า + ราคาขาย</p>
        </div>

        {/* ADD PRODUCT */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="rounded-xl">+ เพิ่มสินค้า</Button>
          </DialogTrigger>

          <DialogContent className="rounded-2xl">
            <DialogHeader>
              <DialogTitle>เพิ่มสินค้า</DialogTitle>
            </DialogHeader>

            <div className="space-y-3">
              <Input placeholder="SKU เช่น P001" value={sku} onChange={(e) => setSku(e.target.value)} />
              <Input placeholder="ชื่อสินค้า" value={name} onChange={(e) => setName(e.target.value)} />
              <Input placeholder="หน่วย เช่น ขวด" value={unit} onChange={(e) => setUnit(e.target.value)} />

              <Input
                type="number"
                placeholder="จำนวนขั้นต่ำแจ้งเตือน"
                value={minStock}
                onChange={(e) => setMinStock(e.target.value === "" ? "" : Number(e.target.value))}
                min={0}
              />

              <Input
                type="number"
                placeholder="ราคาขาย (บาท)"
                value={price}
                onChange={(e) => setPrice(e.target.value === "" ? "" : Number(e.target.value))}
                min={0}
              />

              <input
                type="file"
                accept="image/*"
                onChange={async e => {
                  const file = e.target.files?.[0];
                  if (!file) return;
                  if (file.size > 800000) return alert("รูปใหญ่เกินไป");
                  setImage(await fileToBase64(file));
                }}
              />

              <Button onClick={onAdd} disabled={!canSave}>บันทึก</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* TABLE */}
      <Card className="rounded-2xl">
        <CardContent className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>รูป</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>ชื่อ</TableHead>
                <TableHead>ราคา</TableHead>
                <TableHead>คงเหลือ</TableHead>
                <TableHead>ขั้นต่ำ</TableHead>
                <TableHead>สถานะ</TableHead>
                <TableHead>จัดการ</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((p) => {
                const low = p.stock <= p.minStock;
                return (
                  <TableRow key={p.id}>
                    <TableCell>
                      <div className="relative w-12 aspect-square overflow-hidden rounded-xl border bg-white">
                        {p.image ? (
                          <Image
                            src={p.image}
                            alt=""
                            fill
                            className="object-contain"
                            unoptimized
                          />
                        ) : null}
                      </div>
                    </TableCell>
                    <TableCell>{p.sku}</TableCell>
                    <TableCell>{p.name}</TableCell>
                    <TableCell>฿{p.price}</TableCell>
                    <TableCell>{p.stock}</TableCell>
                    <TableCell>{p.minStock}</TableCell>
                    <TableCell>
                      <Badge variant={low ? "destructive" : "secondary"}>
                        {low ? "ใกล้หมด" : "ปกติ"}
                      </Badge>
                    </TableCell>
                    <TableCell className="flex gap-2">
                      <Button size="sm" variant="secondary" onClick={() => setEditItem(p)}>แก้ไข</Button>
                      <Button size="sm" variant="destructive" onClick={() => { deleteProduct(p.id); refresh(); }}>ลบ</Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* EDIT DIALOG */}
      <Dialog open={!!editItem} onOpenChange={() => setEditItem(null)}>
        <DialogContent>
          {editItem && (
            <div className="space-y-2">
              <Input value={editItem.name} onChange={e => setEditItem({ ...editItem, name: e.target.value })} />
              <Input type="number" value={editItem.price} onChange={e => setEditItem({ ...editItem, price: Number(e.target.value) })} />
              <Button onClick={() => { updateProduct(editItem); setEditItem(null); refresh(); }}>บันทึก</Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
