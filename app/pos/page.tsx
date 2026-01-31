"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  loadProducts,
  Product,
  sellProduct,
  stockIn,
} from "@/lib/store";

type CartItem = {
  productId: string;
  name: string;
  price: number;
  cost: number;
  qty: number;
};

export default function POSPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [search, setSearch] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentType, setPaymentType] = useState<"cash" | "promptpay">("cash");
  const [successOpen, setSuccessOpen] = useState(false);
  const [lastBill, setLastBill] = useState<any>(null);
  const [returnNote, setReturnNote] = useState("");

  const searchParams = useSearchParams();
  const addedRef = useRef<string | null>(null);

  useEffect(() => setProducts(loadProducts()), []);

  useEffect(() => {
    const addId = searchParams.get("add");
    if (!addId || addedRef.current === addId) return;
    addedRef.current = addId;
    const p = loadProducts().find((x) => x.id === addId);
    if (p) addToCart(p);
  }, [searchParams]);

  const addToCart = (p: Product) => {
    if (p.stock <= 0) return alert("สินค้าหมด");

    setCart(prev => {
      const idx = prev.findIndex(x => x.productId === p.id);
      if (idx >= 0) {
        const next = [...prev];
        if (next[idx].qty + 1 > p.stock) return prev;
        next[idx].qty += 1;
        return next;
      }
      return [...prev, { productId: p.id, name: p.name, price: p.price, cost: p.cost, qty: 1 }];
    });
  };

  const subtotal = useMemo(() => cart.reduce((s, i) => s + i.price * i.qty, 0), [cart]);
  const profit = useMemo(() => cart.reduce((s, i) => s + (i.price - i.cost) * i.qty, 0), [cart]);
  const total = Math.max(0, subtotal - discount);

  const filtered = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  /* ================= CHECKOUT ================= */
  const checkout = () => {
    cart.forEach(item => sellProduct(item.productId, item.qty));

    setLastBill({
      billNo: crypto.randomUUID().slice(0, 8),
      total,
      profit,
      payment: paymentType,
    });

    setSuccessOpen(true);
    setCart([]);
    setDiscount(0);
    setProducts(loadProducts());
  };

  /* ================= RETURN GOOD ================= */
  const handleReturnGood = () => {
    cart.forEach(item =>
      stockIn(item.productId, item.qty, item.cost, returnNote)
    );
    alert("คืนสินค้าเข้าสต็อกแล้ว");
    setCart([]);
    setReturnNote("");
    setProducts(loadProducts());
  };

  /* ================= RETURN DAMAGED ================= */
  const handleReturnDamaged = () => {
    alert("บันทึกของเสียเรียบร้อย (ไม่เข้า stock)");
    setCart([]);
    setReturnNote("");
  };

  return (
    <div className="space-y-6">
      <Dialog open={successOpen} onOpenChange={setSuccessOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-green-600">ชำระเงินสำเร็จ</DialogTitle>
          </DialogHeader>
          {lastBill && (
            <div className="text-sm space-y-2">
              <div>เลขบิล: {lastBill.billNo}</div>
              <div>ยอดรวม: ฿{lastBill.total}</div>
              <div>กำไร: ฿{lastBill.profit}</div>
              <div>ชำระด้วย: {lastBill.payment}</div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">POS</h1>
        <Badge variant="secondary">ขายหน้าร้าน</Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="space-y-3 p-4">
            <Input placeholder="ค้นหาสินค้า" value={search} onChange={(e) => setSearch(e.target.value)} />

            <div className="grid grid-cols-2 gap-3">
              {filtered.map(p => (
                <button key={p.id} onClick={() => addToCart(p)}
                  className="rounded-2xl border bg-white p-2 text-left hover:bg-slate-50">
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border bg-white mb-2">
                    {p.image ? (
                      <Image src={p.image} alt={p.name} fill className="object-contain" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
                        No image
                      </div>
                    )}
                  </div>
                  <div className="text-sm font-semibold">{p.name}</div>
                  <div className="text-xs text-slate-500">฿{p.price} | เหลือ {p.stock}</div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="space-y-3 p-4">
            {cart.map(i => (
              <div key={i.productId} className="flex justify-between items-center border rounded-xl p-3">
                <div>
                  <div className="font-semibold text-sm">{i.name}</div>
                  <div className="text-xs text-slate-500">{i.price} x {i.qty}</div>
                </div>
              </div>
            ))}

            <Input placeholder="หมายเหตุการคืนสินค้า" value={returnNote} onChange={(e)=>setReturnNote(e.target.value)} />
            <Input type="number" value={discount} onChange={(e)=>setDiscount(Number(e.target.value))} placeholder="ส่วนลด" />

            <div className="font-bold text-lg">รวม ฿{total}</div>
            <div className="text-green-600 font-semibold">กำไร ฿{profit}</div>

            <Button className="w-full" onClick={checkout} disabled={!cart.length}>ชำระเงิน</Button>
            <Button variant="secondary" className="w-full" onClick={handleReturnGood} disabled={!cart.length}>คืนสินค้า (ดี)</Button>
            <Button variant="destructive" className="w-full" onClick={handleReturnDamaged} disabled={!cart.length}>คืนของเสีย</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
