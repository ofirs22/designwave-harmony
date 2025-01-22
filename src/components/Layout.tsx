import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Waves } from "lucide-react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
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
                <Waves className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
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

export default Layout;