
import { motion } from "framer-motion";
import mascotImg from "../../assets/logo_taiji.png";


const WelcomeMessage = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-chinese-red mb-6">Bun venit la Taiji</h2>
            <p className="text-gray-700 mb-6 text-lg">
              La Taiji Fast Food Chinezesc, te întâmpinăm cu mâncăruri proaspete, preparate din ingrediente de calitate și cu rețete autentice aduse direct din China.
            </p>
            <p className="text-gray-700 mb-6 text-lg">
              Fiecare fel de mâncare este gătit cu pasiune, respect pentru tradiție și atenție la detalii, pentru a-ți oferi o experiență culinară memorabilă.
            </p>
            <p className="text-gray-700 mb-6 text-lg font-semibold">
              Vino să ne vizitezi și te vom cuceri cu aromele Chinei!
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-chinese-red text-white p-4 rounded-lg shadow-md flex items-center">
                <div className="rounded-full bg-white p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-chinese-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Livrare rapidă</h3>
                </div>
              </div>
              
              <div className="bg-chinese-red text-white p-4 rounded-lg shadow-md flex items-center">
                <div className="rounded-full bg-white p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-chinese-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold">Calitate garantată</h3>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute  w-full h-full border-2 border-chinese-gold rounded-lg"></div>
              <img 
                src={mascotImg} 
                alt="Mascota Taiji" 
                className="rounded-lg shadow-xl relative z-10 w-full max-w-md mx-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeMessage;
