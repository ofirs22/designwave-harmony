import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const DeliveryReport = () => {
  const deliveries = [
    {
      id: "000001278",
      orderNumber: "001",
      name: "הראל מיכאל",
      phone: "050-1234567",
      address: "אשדוד: שמואלי הנגר, 6"
    },
    {
      id: "000001173",
      orderNumber: "002",
      name: "ישראלי ישראל",
      phone: "050-1234567",
      address: "ראשון לציון: הצפרירים 7, 41"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold mb-6">כל ההזמנות</h1>
            
            <div className="space-y-4">
              {deliveries.map((delivery) => (
                <div 
                  key={delivery.id}
                  className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">פרטי משלוח</span>
                        <span className="text-blue-500">#{delivery.orderNumber}</span>
                      </div>
                      <div className="text-sm text-gray-600">מס׳ הזמנה {delivery.id}</div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <ArrowLeft className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <div className="text-sm text-gray-500">שם</div>
                      <div>{delivery.name}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">מס׳ טלפון</div>
                      <div>{delivery.phone}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">כתובת ודירה</div>
                      <div>{delivery.address}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DeliveryReport;