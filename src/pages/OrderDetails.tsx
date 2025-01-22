import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Minus, ShoppingCart } from "lucide-react";

const OrderDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold">מאזן חדש</h1>
              <div className="flex items-center gap-2">
                <span className="text-lg">0</span>
                <ShoppingCart className="h-6 w-6" />
                <Button variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>מספר:</Label>
                  <Input type="text" placeholder="11133313" />
                </div>
                <div>
                  <Label>כמות מלאי:</Label>
                  <Input type="text" placeholder="0" />
                </div>
                <div>
                  <Label>שם מוצר:</Label>
                  <Input type="text" placeholder="מארז בסיסי" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label>מספר SmartBasket:</Label>
                  <Input type="text" placeholder="יש להוסיף אישורים בלבד" />
                </div>
                <div>
                  <Label>מספר רכישה:</Label>
                  <Input type="text" placeholder="מספר הזמנה מהמערכת" />
                </div>
                <div>
                  <Label>מספר שוק:</Label>
                  <Input type="text" placeholder="בהתאמה ל-100 בקבוקים" />
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline">בטל</Button>
                <Button className="bg-[#00A6E6] hover:bg-[#0089BF]">שמור</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OrderDetails;