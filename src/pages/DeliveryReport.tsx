import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const DeliveryReport = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-right">דוח משלוחים</h1>
            <div className="space-y-4">
              <div className="border rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2">משלוח #1234</h2>
                <p className="text-gray-600">כתובת: רחוב הרצל 1, תל אביב</p>
                <p className="text-gray-600">זמן משלוח: 14:30</p>
                <p className="text-gray-600">סטטוס: בדרך</p>
              </div>
              <div className="border rounded-lg p-4">
                <h2 className="text-lg font-semibold mb-2">משלוח #1235</h2>
                <p className="text-gray-600">כתובת: רחוב בן גוריון 5, רמת גן</p>
                <p className="text-gray-600">זמן משלוח: 15:00</p>
                <p className="text-gray-600">סטטוס: ממתין</p>
              </div>
              <div className="flex justify-end">
                <Button className="bg-blue-500 text-white">הדפס דוח</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default DeliveryReport;