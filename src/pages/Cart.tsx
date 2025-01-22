import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { Minus, Plus } from "lucide-react";

const Cart = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8" dir="rtl">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <Card className="p-6 mb-6">
              <div className="bg-red-100 text-red-600 p-4 rounded-lg mb-6">
                ⚠️ שימו לב! יש המלצה יד מקדימה ב 2 יש חוסר באחד מהמוצרים ⚠️
              </div>

              <div className="space-y-6">
                {[
                  {
                    id: "41",
                    name: "מארז בסיסי",
                    quantity: 1,
                    actions: ["עדכן שינויים"]
                  },
                  {
                    id: "333",
                    name: "חלב טרי 3%",
                    price: "₪10.90",
                    salePrice: "₪8.90",
                    quantity: 1,
                    image: "/lovable-uploads/f1357748-7cb7-4e8e-b2c2-d11656edd720.png"
                  }
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-4">
                      {item.image && (
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                      )}
                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        {item.price && (
                          <div className="flex gap-2">
                            <span className="text-red-500">{item.salePrice}</span>
                            <span className="text-gray-400 line-through">{item.price}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      {item.actions ? (
                        item.actions.map((action) => (
                          <Button key={action} variant="outline">{action}</Button>
                        ))
                      ) : (
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="icon">
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span>{item.quantity}</span>
                          <Button variant="outline" size="icon">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <div className="md:w-1/3">
            <Card className="p-6">
              <h2 className="text-xl font-bold mb-4">סיכום הזמנה</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>סה"כ מוצרים</span>
                  <span>₪57.23</span>
                </div>
                <div className="flex justify-between">
                  <span>משלוח</span>
                  <span>₪35.00</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>סה"כ לתשלום</span>
                  <span>₪92.23</span>
                </div>
              </div>
              <Button className="w-full mt-6 bg-[#00A6E6]">המשך לתשלום</Button>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;