import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const DietaryPreferences = () => {
  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <div className="container mx-auto px-4 py-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold mb-6 text-right">העדפות תזונתיות</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <Button variant="outline" className="rounded-full">רגישות לגלוטן</Button>
              <Button variant="outline" className="rounded-full">צמחוני</Button>
              <Button variant="outline" className="rounded-full">טבעוני</Button>
              <Button variant="default" className="rounded-full bg-blue-500">רגישות ללקטוז</Button>
              <Button variant="outline" className="rounded-full">רגישות לדגים</Button>
              <Button variant="outline" className="rounded-full">רגישות לבוטנים</Button>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">הערות נוספות</h2>
              <textarea 
                className="w-full p-3 border rounded-lg resize-none h-32"
                placeholder="הוסף הערות מיוחדות לגבי העדפות התזונה שלך..."
              />
            </div>
            <div className="mt-6 flex justify-end">
              <Button className="bg-[#00A6E6] hover:bg-[#0089BF]">
                שמור העדפות
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DietaryPreferences;