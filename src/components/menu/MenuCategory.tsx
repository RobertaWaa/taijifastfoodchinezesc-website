
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import styles from './MenuCategory.module.css';

interface Product {
  id: string;
  name: string;
  description: string;
  weight: string;
  price?: string;
  image: string;
}

interface MenuCategoryProps {
  id: string;
  name: string;
  products: Product[];
}

const MenuCategory = ({ id, name, products }: MenuCategoryProps) => {
  return (
    <motion.div
      id={id}
      className="scroll-mt-32"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-6 text-chinese-red border-b pb-2">{name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row h-full">
              <div className="sm:w-1/3 h-48 sm:h-auto relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className={styles.menuItemImage}
                  loading="lazy"
                />
              </div>
              <CardContent className="sm:w-2/3 p-4 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <div className="flex flex-col items-end">
                      {product.price && (
                        <span className="text-sm bg-chinese-gold text-white rounded-full px-2 py-1 mb-1">
                          {product.price}
                        </span>
                      )}
                      {product.weight && (
                        <span className="text-xs text-gray-500">
                          {product.weight}
                        </span>
                      )}
                    </div>
                  </div>
                  {product.description && (
                    <p className="text-gray-600">{product.description}</p>
                  )}
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default MenuCategory;
