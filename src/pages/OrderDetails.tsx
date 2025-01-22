import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const OrderDetails = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-right">פרטי הזמנה</h1>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">מספר הזמנה</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="הכנס מספר הזמנה"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">שם לקוח</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="הכנס שם לקוח"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">כתובת</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="הכנס כתובת"
                />
              </div>
              <div className="flex justify-end space-x-4">
                <Button variant="outline">ביטול</Button>
                <Button className="bg-blue-500 text-white">שמור</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default OrderDetails;