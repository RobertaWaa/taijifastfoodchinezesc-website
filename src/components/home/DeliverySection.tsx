import boltLogo from "../../assets/bolt.png";
import tazzLogo from "../../assets/tazz.png";
import glovoLogo from "../../assets/glovo.png";
import takeawayLogo from "../../assets/takeaway.png";

import { motion } from "framer-motion";

const DeliverySection = () => {
  const deliveryPlatforms = [
    {
      name: "Bolt Food",
      logo: boltLogo,
      url: "#"
    },
    {
      name: "Tazz",
      logo: tazzLogo,
      url: "#"
    },
    {
      name: "Glovo",
      logo: glovoLogo,
      url: "#"
    },
    {
      name: "Takeaway",
      logo: takeawayLogo,
      url: "#"
    }
  ];
  

  return (
    <section className="py-20 bg-gray-50">
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
                className="h-20 object-contain"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;
