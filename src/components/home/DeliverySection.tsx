
import { motion } from "framer-motion";

const DeliverySection = () => {
  const deliveryPlatforms = [
    {
      name: "Bolt Food",
      logo: "https://food.bolt.eu/images/bolt-food-logo.svg",
      url: "#"
    },
    {
      name: "Tazz",
      logo: "https://tazz.ro/static/images/logo.svg",
      url: "#"
    },
    {
      name: "Glovo",
      logo: "https://glovoapp.com/images/logo-green.svg",
      url: "#"
    },
    {
      name: "Takeaway",
      logo: "https://www.takeaway.com/foodwiki/uploads/sites/11/2020/09/Just_Eat_Takeaway.com_Logo.png",
      url: "#"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center section-heading mx-auto">
          Puteți comanda pe:
        </h2>
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          {deliveryPlatforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow w-36 h-36"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <img
                src={platform.logo}
                alt={`${platform.name} Logo`}
                className="h-16 object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
