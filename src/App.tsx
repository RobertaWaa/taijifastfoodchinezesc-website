
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import ContactPage from "./pages/ContactPage";
import NutritionalInfoPage from "./pages/NutritionalInfoPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsAndConditionsPage from "./pages/TermsAndConditionsPage";
import NotFound from "./pages/NotFound";
import { Helmet, HelmetProvider } from "react-helmet-async";
import logoTaiji from "@/assets/logo_taiji.png";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HelmetProvider>
        <Helmet>
          <script type="application/ld+json">
            {`
              {
                "@context": "https://schema.org",
                "@type": "Restaurant",
                "name": "Taiji Fast Food Chinezesc",
                "image": "${logoTaiji}",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Strada Telița, Nr. 54",
                  "addressLocality": "București",
                  "addressRegion": "Sector 5",
                  "postalCode": "",
                  "addressCountry": "RO"
                },
                "telephone": "0774605402",
                "email": "taijifastfoodchinezesc@gmail.com",
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                    "opens": "20:00",
                    "closes": "23:00"
                  },
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Saturday", "Sunday"],
                    "opens": "11:00",
                    "closes": "23:00"
                  }
                ],
                "servesCuisine": "Chinese",
                "priceRange": "$$",
                "menu": "https://taijifastfood.com/meniu",
                "acceptsReservations": "True"
              }
            `}
          </script>
        </Helmet>
        <BrowserRouter>
  <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/meniu" element={<MenuPage />} /> 
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/informatii-nutritionale" element={<NutritionalInfoPage />} />
      <Route path="/politica-de-confidentialitate" element={<PrivacyPolicyPage />} />
      <Route path="/termeni-si-conditii" element={<TermsAndConditionsPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
</BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
