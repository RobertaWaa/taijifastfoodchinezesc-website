
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Maria Popa",
    content:
      "Cel mai bun restaurant chinezesc din București! Îmi place în special puiul Kung Pao și orezul prăjit. Mâncarea este mereu fierbinte și livrarea rapidă.",
    rating: 5,
  },
  {
    id: 2,
    name: "Alexandru Ionescu",
    content:
      "Am comandat de la Taiji de mai multe ori și nu am fost niciodată dezamăgit. Porțiile sunt generoase, iar prețurile sunt rezonabile.",
    rating: 4,
  },
  {
    id: 3,
    name: "Elena Dumitrescu",
    content:
      "Felicitări pentru rețete! Se simte autenticitatea bucătăriei chinezești în fiecare preparat. Voi reveni cu siguranță!",
    rating: 5,
  },
  {
    id: 4,
    name: "Mihai Georgescu",
    content:
      "Meniul diversificat și calitatea mâncării m-au făcut client fidel. Recomand tăițeii cu legume și rața în sos dulce-acrișor.",
    rating: 5,
  },
];

const ReviewsCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const nextSlide = () => {
    setDirection(1);
    setCurrent((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [current]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="relative max-w-4xl mx-auto overflow-hidden">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
          className="p-8 bg-white rounded-xl shadow-lg"
        >
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-6 h-6 ${
                  i < reviews[current].rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          
          <blockquote className="text-xl italic text-center mb-6">
            "{reviews[current].content}"
          </blockquote>
          
          <div className="text-center">
            <p className="text-lg font-semibold text-chinese-red">
              {reviews[current].name}
            </p>
          </div>

          <div className="flex justify-center mt-6">
            <div className="flex space-x-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 w-2 rounded-full ${
                    i === current ? "bg-chinese-red" : "bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md focus:outline-none hover:bg-chinese-gold hover:text-white transition-colors"
        aria-label="Previous review"
      >
        <CircleArrowLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md focus:outline-none hover:bg-chinese-gold hover:text-white transition-colors"
        aria-label="Next review"
      >
        <CircleArrowRight className="h-6 w-6" />
      </button>
    </div>
  );
};

export default ReviewsCarousel;
