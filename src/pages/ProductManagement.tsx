import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { Plus, Search, X } from "lucide-react";

const ProductManagement = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8" dir="rtl">
        <Card className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">ניהול מוצרים</h1>
            <Button className="bg-[#00A6E6]">
              <Plus className="h-4 w-4 ml-2" />
              הוסף מוצר חדש
            </Button>
          </div>

          <div className="relative mb-6">
            <Input
              type="search"
              placeholder="חיפוש מוצר..."
              className="pl-10 pr-4"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex flex-wrap gap-2">
              {["מוצרים", "פירות וירקות", "חטיפים ושוקולד", "דגנים וקטניות", "קפה ותה", "תבלינים"].map((tag) => (
                <div key={tag} className="flex items-center bg-gray-100 rounded-full px-4 py-1">
                  <span>{tag}</span>
                  <X className="h-4 w-4 ml-2 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                id: "333",
                name: "חלב טרי 3% - תנובה",
                price: "₪10.90",
                salePrice: "₪8.90",
                image: "/lovable-uploads/f1357748-7cb7-4e8e-b2c2-d11656edd720.png"
              },
              {
                id: "13",
                name: "ערגליות חמאה",
                price: "₪18.90",
                salePrice: "₪12.90",
                image: "/lovable-uploads/f1357748-7cb7-4e8e-b2c2-d11656edd720.png"
              }
            ].map((product) => (
              <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                  <div>
                    <h3 className="font-semibold">{product.name}</h3>
                    <div className="flex gap-2">
                      <span className="text-red-500">{product.salePrice}</span>
                      <span className="text-gray-400 line-through">{product.price}</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline">ערוך מוצר</Button>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default ProductManagement;