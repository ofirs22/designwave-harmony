import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const DietaryPreferences = () => {
  return (
    <div className="container mx-auto p-4 text-right" dir="rtl">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-6">האם יש לך העדפות או הגבלות תזונתיות?</h1>
        
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">יש לבחור מה שרלוונטי עבורך</h2>
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" className="rounded-full">רגישות לגלוטן</Button>
            <Button variant="outline" className="rounded-full">צמחוני</Button>
            <Button variant="outline" className="rounded-full">טבעוני</Button>
            <Button variant="default" className="rounded-full bg-blue-500">רגישות ללקטוז</Button>
            <Button variant="outline" className="rounded-full">רגישות לדגים</Button>
            <Button variant="outline" className="rounded-full">רגישות לבוטנים</Button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">משהו שלא נמצא ברשימה?</h2>
          <input
            type="text"
            placeholder="הוסיף כאן..."
            className="w-full p-3 border rounded-lg text-right"
          />
          <p className="text-sm text-gray-500 mt-2">אנחנו נרצה לרשום הערות</p>
        </div>

        <Button className="w-full bg-blue-500 text-white py-3 rounded-lg">
          לשאלה הבאה
        </Button>
      </Card>
    </div>
  );
};

export default DietaryPreferences;