
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    id: "pui-rata",
    name: "Pui și Rată",
    image: "https://source.unsplash.com/random/300x300/?chinese,chicken",
    description: "Preparate delicioase pe bază de pui și rată în stil chinezesc."
  },
  {
    id: "vita",
    name: "Vită",
    image: "https://source.unsplash.com/random/300x300/?chinese,beef",
    description: "Preparate cu vită gătite după rețete tradiționale chinezești."
  },
  {
    id: "porc",
    name: "Porc",
    image: "https://source.unsplash.com/random/300x300/?chinese,pork",
    description: "Specialități cu porc gătite în stilul specific bucătăriei chinezești."
  },
  {
    id: "orez-noodles",
    name: "Orez și Noodles",
    image: "https://source.unsplash.com/random/300x300/?chinese,noodles",
    description: "Orez și tăiței preparați în diverse stiluri chinezești."
  }
];

const RecommendationsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-center section-heading mx-auto">Recomandările noastre</h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Descoperă cele mai populare preparate chinezești, pregătite cu ingrediente proaspete și rețete autentice.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link 
                to={`/meniu#${category.id}`} 
                className="block group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <div className="h-64 bg-gray-200">
                    <img 
                      src={category.image} 
                      alt={category.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-200 text-sm line-clamp-2">{category.description}</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="inline-flex items-center text-chinese-gold font-medium">
                        Vezi preparate
                        <svg className="ml-1 w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <path d="M13.5 19l7.5-7.5-7.5-7.5M19 11.5H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
