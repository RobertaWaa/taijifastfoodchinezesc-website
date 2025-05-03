
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/home/HeroSection";
import DeliverySection from "@/components/home/DeliverySection";
import RecommendationsSection from "@/components/home/RecommendationsSection";
import VideoSection from "@/components/home/VideoSection";
import WelcomeMessage from "@/components/home/WelcomeMessage";
import ReviewsCarousel from "@/components/home/ReviewsCarousel";
import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const recommendationsRef = useRef<HTMLDivElement>(null);

  const scrollToRecommendations = () => {
    recommendationsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Taiji Fast Food Chinezesc | Restaurant Chinezesc în București</title>
        <meta
          name="description"
          content="Restaurant cu mâncare tradițională chinezească în București. Comandă online sau vizitează-ne pentru a savura cele mai autentice preparate chinezești."
        />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <HeroSection onExploreClick={scrollToRecommendations} />

        {/* Delivery Platforms Section */}
        <DeliverySection />

        {/* Recommendations Section */}
        <div ref={recommendationsRef}>
          <RecommendationsSection />
        </div>

        {/* Video Section */}
        <VideoSection />

        {/* Welcome Message Section */}
        <WelcomeMessage />

        {/* Reviews Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-center section-heading mx-auto">
              Ce spun clienții noștri
            </h2>
            <ReviewsCarousel />
            <div className="text-center mt-10">
              <Link to="/meniu">
                <Button className="bg-chinese-red hover:bg-chinese-darkred text-white">
                  Explorează meniul nostru <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
