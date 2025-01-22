import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16 text-right" dir="rtl">
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
      </div>
    </Layout>
  );
};

export default Index;