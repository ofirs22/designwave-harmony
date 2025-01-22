import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Wave } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#006C8D] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/8d6b8172-e3c4-446d-8885-20dcbf42a62a.png" alt="SmartBasket" className="h-8" />
          </div>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex gap-6">
              <a href="#" className="hover:text-gray-200">יצירת קשר</a>
              <a href="#" className="hover:text-gray-200">מוצרים</a>
              <a href="#" className="hover:text-gray-200">מבצעים</a>
              <a href="#" className="hover:text-gray-200">חנות</a>
              <a href="#" className="hover:text-gray-200">ראשי</a>
            </nav>
            <div className="flex items-center gap-4">
              <input
                type="search"
                placeholder="חיפוש מוצר..."
                className="px-4 py-1 rounded-md text-black"
                dir="rtl"
              />
              <button className="p-2">
                <Wave className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 text-right" dir="rtl">
        <Card className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h1 className="text-4xl font-bold mb-6">בואו נכיר ונשפר את החוויה! 👋</h1>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סברי. בראיט ולחת צורק מונחף, בגורמי מגמש
                </p>
                <Button className="bg-[#00A6E6] hover:bg-[#0089BF] text-white px-8 py-3 rounded-full text-lg">
                  התחילו את השאלון
                </Button>
              </div>
              <div className="flex-1">
                <img
                  src="/lovable-uploads/f0a21bf1-6bb0-41b9-834b-16ab9f13c211.png"
                  alt="Milk Product"
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 text-right" dir="rtl">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">קטגוריות מוצרים</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">פריט רשימה</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">זמני הספקה</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">ספק וחנות</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">שירות לקוחות</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">אזור אישי</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">משלוחים ותשלומים</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">שאלות נפוצות</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">קישורים</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">אודות</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">צור קשר</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">עדכונים</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">שעות פעילות</h3>
              <p className="text-gray-600">ראשון עד חמישי: 9:00 - 21:00</p>
              <p className="text-gray-600">טלפון: 08-7998989</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;