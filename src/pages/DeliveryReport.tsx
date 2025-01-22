import { Card } from "@/components/ui/card";

const DeliveryReport = () => {
  return (
    <div className="container mx-auto p-4 text-right" dir="rtl">
      <Card className="p-6">
        <h1 className="text-xl font-bold mb-6">דוח Z - רבעוני</h1>
        
        <div className="grid gap-6">
          <div className="flex justify-between border-b pb-4">
            <div>
              <div className="text-gray-600">תחילה</div>
              <div>21:33 - 28/12/24</div>
            </div>
            <div>
              <div className="text-gray-600">סיום</div>
              <div>23:45 - 29/12/24</div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-3">פרטי העסק</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-gray-600">שם</div>
                <div>SmartBasket</div>
              </div>
              <div>
                <div className="text-gray-600">כתובת</div>
                <div>המסגר 4, תל-אביב</div>
              </div>
              <div>
                <div className="text-gray-600">טלפון</div>
                <div>054-3210123</div>
              </div>
              <div>
                <div className="text-gray-600">ח.פ</div>
                <div>9876543213</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-semibold mb-3">נתוני משלוח</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded">
                <div className="font-medium">SmartBasket</div>
                <div className="text-sm text-gray-600">157 מס׳ משלוחים</div>
                <div className="text-sm text-gray-600">₪340 סכום כולל</div>
              </div>
              {/* Add more delivery stats as needed */}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DeliveryReport;