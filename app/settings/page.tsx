import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">ตั้งค่า</h1>
        <p className="text-sm text-slate-500">ค่าพื้นฐานของระบบ</p>
      </div>

      <Card className="rounded-2xl">
        <CardContent className="space-y-4 p-4">
          <div>
            <div className="text-sm font-medium">ชื่อร้าน / บริษัท</div>
            <Input placeholder="เช่น ร้านกับข้าวแม่เอ" className="mt-2" />
          </div>

          <div>
            <div className="text-sm font-medium">สกุลเงิน</div>
            <Input placeholder="THB" className="mt-2" />
          </div>

          <Button className="rounded-xl">บันทึก</Button>
        </CardContent>
      </Card>
    </div>
  );
}
