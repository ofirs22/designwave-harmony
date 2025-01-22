import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

const OrderDetails = () => {
  return (
    <div className="container mx-auto p-4 text-right" dir="rtl">
      <Card className="p-6">
        <h1 className="text-xl font-bold mb-6">דוח הזמנות</h1>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 border-b">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" />
              <span className="font-medium">עגבניות חממה</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">6712</span>
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">חוסר</span>
              <span>8</span>
            </div>
          </div>

          <div className="flex justify-between items-center p-3 border-b">
            <div className="flex items-center gap-4">
              <Checkbox id="item2" />
              <span className="font-medium">פסטה אורגנית</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600">6189</span>
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm">חוסר</span>
              <span>2</span>
            </div>
          </div>

          {/* Add more items as needed */}
        </div>

        <div className="mt-6">
          <h2 className="font-semibold mb-2">הערות לשליח</h2>
          <textarea 
            className="w-full p-3 border rounded-lg text-right"
            rows={3}
            placeholder="הוסף הערות..."
          />
        </div>

        <Button className="w-full mt-6 bg-blue-500 text-white py-3 rounded-lg">
          עדכן דוח
        </Button>
      </Card>
    </div>
  );
};

export default OrderDetails;