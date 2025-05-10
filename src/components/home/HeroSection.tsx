
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/pattern-taiji.jpg";

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection = ({ onExploreClick }: HeroSectionProps) => {
  return (
    <section
  className="relative h-screen flex items-center"
  style={{
    backgroundImage: `url(${heroImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Taiji Fast Food <span className="text-chinese-gold">Chinezesc</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Savurează autenticitatea bucătăriei chinezești în inima Bucureștiului
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              asChild
              className="bg-chinese-red hover:bg-chinese-darkred text-white px-8 py-6 text-lg"
            >
              <Link to="/meniu">
                Vezi Meniul <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-white bg-chinese-gold text-white hover:bg-white hover:text-chinese-gold px-8 py-6 text-lg"
            >
              <Link to="/contact">
                Contactează-ne
              </Link>
            </Button>
          </div>
          <div className="mt-16">
            <button
              onClick={onExploreClick}
              className="text-white flex flex-col items-center animate-bounce-slow hover:text-chinese-gold transition-colors"
            >
              <span className="mb-2">Descoperă Specialitățile Noastre</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-8 w-8"
              >
                <path d="M12 5v14" />
                <path d="m19 12-7 7-7-7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
