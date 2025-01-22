import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import DietaryPreferences from "./pages/DietaryPreferences";
import OrderDetails from "./pages/OrderDetails";
import DeliveryReport from "./pages/DeliveryReport";
import ProductManagement from "./pages/ProductManagement";
import Cart from "./pages/Cart";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dietary-preferences" element={<DietaryPreferences />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/delivery-report" element={<DeliveryReport />} />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;