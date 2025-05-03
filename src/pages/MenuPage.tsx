
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuCategory from "@/components/menu/MenuCategory";
import { Info } from "lucide-react";
import { Helmet } from "react-helmet";

const categories = [
  {
    id: "aperitive",
    name: "Aperitive",
    products: [
      {
        id: "a1",
        name: "Pachetele de primavară",
        description: "Pachetele crocante umplute cu legume sau carne, prăjite la perfecțiune.",
        weight: "200g",
        image: "https://source.unsplash.com/random/300x200/?spring,rolls"
      },
      {
        id: "a2",
        name: "Colțunași chinezești",
        description: "Colțunași umpluți cu carne de porc și legume, serviți cu sos de soia.",
        weight: "250g",
        image: "https://source.unsplash.com/random/300x200/?dumplings"
      }
    ]
  },
  {
    id: "supa",
    name: "Supă",
    products: [
      {
        id: "s1",
        name: "Supă acru-picantă",
        description: "Supă tradițională chinezească cu un gust echilibrat între acru și picant, cu legume și ou.",
        weight: "350ml",
        image: "https://source.unsplash.com/random/300x200/?hot,sour,soup"
      },
      {
        id: "s2",
        name: "Supă Wonton",
        description: "Supă delicioasă cu colțunași umpluti cu carne de porc, servită cu legume proaspete.",
        weight: "350ml",
        image: "https://source.unsplash.com/random/300x200/?wonton,soup"
      }
    ]
  },
  {
    id: "pui-rata",
    name: "Pui și Rată",
    products: [
      {
        id: "pr1",
        name: "Pui Kung Pao",
        description: "Pui picant cu arahide, ardei iute și legume, în sos de soia.",
        weight: "350g",
        image: "https://source.unsplash.com/random/300x200/?kung,pao,chicken"
      },
      {
        id: "pr2",
        name: "Rață Pequin",
        description: "Rață crocantă servită cu sos special de casă și legume.",
        weight: "400g",
        image: "https://source.unsplash.com/random/300x200/?peking,duck"
      }
    ]
  },
  {
    id: "vita",
    name: "Vită",
    products: [
      {
        id: "v1",
        name: "Vită cu broccoli",
        description: "Felii fine de vită gătite cu broccoli proaspăt în sos de stridii.",
        weight: "350g",
        image: "https://source.unsplash.com/random/300x200/?beef,broccoli"
      },
      {
        id: "v2",
        name: "Vită Mongolian",
        description: "Vită marinată și gătită în stil mongol cu ardei și ceapă verde.",
        weight: "350g",
        image: "https://source.unsplash.com/random/300x200/?mongolian,beef"
      }
    ]
  },
  {
    id: "porc",
    name: "Porc",
    products: [
      {
        id: "p1",
        name: "Porc dulce-acrișor",
        description: "Bucăți crocante de porc în sos dulce-acrișor cu ananas și ardei.",
        weight: "350g",
        image: "https://source.unsplash.com/random/300x200/?sweet,sour,pork"
      },
      {
        id: "p2",
        name: "Porc cu ciuperci",
        description: "Felii de porc gătite cu ciuperci shiitake și legume asortate.",
        weight: "350g",
        image: "https://source.unsplash.com/random/300x200/?pork,mushroom"
      }
    ]
  },
  {
    id: "fructe-mare",
    name: "Fructe de Mare",
    products: [
      {
        id: "fm1",
        name: "Creveți în sos de usturoi",
        description: "Creveți proaspeți gătiți în sos delicat de usturoi și ghimbir.",
        weight: "300g",
        image: "https://source.unsplash.com/random/300x200/?garlic,shrimp"
      },
      {
        id: "fm2",
        name: "Mix de fructe de mare",
        description: "O combinație de creveți, calamari și scoici, gătite cu legume în sos picant.",
        weight: "400g",
        image: "https://source.unsplash.com/random/300x200/?seafood,mix"
      }
    ]
  },
  {
    id: "orez-noodles",
    name: "Orez și Noodles",
    products: [
      {
        id: "on1",
        name: "Orez prăjit special",
        description: "Orez prăjit cu ou, legume și la alegere cu pui, porc sau creveți.",
        weight: "350g",
        image: "https://source.unsplash.com/random/300x200/?fried,rice"
      },
      {
        id: "on2",
        name: "Noodles cu legume",
        description: "Tăiței de orez sau ou, gătiti cu legume crocante și sos de soia.",
        weight: "350g",
        image: "https://source.unsplash.com/random/300x200/?vegetable,noodles"
      }
    ]
  },
  {
    id: "desert",
    name: "Desert",
    products: [
      {
        id: "d1",
        name: "Banane în crustă",
        description: "Banane în crustă crocantă, servite cu miere și înghețată de vanilie.",
        weight: "200g",
        image: "https://source.unsplash.com/random/300x200/?banana,fritters"
      },
      {
        id: "d2",
        name: "Prăjitură chinezească de orez",
        description: "Prăjitură tradițională din orez glutinos și fasole roșie.",
        weight: "150g",
        image: "https://source.unsplash.com/random/300x200/?rice,cake"
      }
    ]
  },
  {
    id: "bauturi",
    name: "Băuturi",
    products: [
      {
        id: "b1",
        name: "Ceai chinezesc",
        description: "Diverse soiuri de ceai chinezesc tradițional.",
        weight: "250ml",
        image: "https://source.unsplash.com/random/300x200/?chinese,tea"
      },
      {
        id: "b2",
        name: "Băuturi răcoritoare",
        description: "Selecție de băuturi carbogazoase și sucuri de fructe.",
        weight: "330ml",
        image: "https://source.unsplash.com/random/300x200/?soda,drink"
      }
    ]
  },
  {
    id: "sosuri",
    name: "Sosuri",
    products: [
      {
        id: "sos1",
        name: "Sos de soia",
        description: "Sos tradițional de soia pentru a completa preparatele.",
        weight: "50ml",
        image: "https://source.unsplash.com/random/300x200/?soy,sauce"
      },
      {
        id: "sos2",
        name: "Sos picant",
        description: "Sos picant special făcut în casă pentru iubitorii de senzații puternice.",
        weight: "50ml",
        image: "https://source.unsplash.com/random/300x200/?hot,sauce"
      }
    ]
  }
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    
    // Scroll to category
    const element = document.getElementById(categoryId);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Meniu | Taiji Fast Food Chinezesc</title>
        <meta
          name="description"
          content="Descoperă meniul nostru complet cu preparate autentice chinezești. Aperitive, supe, feluri principale și deserturi pregătite după rețete tradiționale."
        />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-chinese-red text-center mb-8">
            Meniul nostru
          </h1>
          
          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-12">
            Descoperă bucătăria autentică chinezească prin preparatele noastre, 
            gătite cu ingrediente proaspete și rețete tradiționale.
          </p>

          <div className="flex justify-center mb-8">
            <Link to="/informatii-nutritionale">
              <Button variant="outline" className="flex items-center gap-2 border-chinese-red text-chinese-red hover:bg-chinese-red hover:text-white">
                <Info className="h-4 w-4" />
                Informații nutriționale
              </Button>
            </Link>
          </div>

          {/* Mobile Category Navigation */}
          <div className="md:hidden mb-8">
            <Tabs 
              defaultValue={categories[0].id} 
              onValueChange={handleCategoryChange}
              value={activeCategory}
            >
              <TabsList className="w-full h-auto flex flex-nowrap overflow-x-auto space-x-2 p-1 bg-gray-100 scrollbar-hide">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex-shrink-0 data-[state=active]:bg-chinese-red data-[state=active]:text-white"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Desktop Category Navigation */}
          <div className="hidden md:block sticky top-20 bg-white z-30 pb-4 border-b border-gray-200">
            <ul className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Button
                    variant={activeCategory === category.id ? "default" : "outline"}
                    className={
                      activeCategory === category.id
                        ? "bg-chinese-red text-white hover:bg-chinese-darkred"
                        : "text-chinese-red border-chinese-red hover:bg-chinese-red hover:text-white"
                    }
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.name}
                  </Button>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu Categories */}
          <div className="mt-12 space-y-16">
            {categories.map((category) => (
              <MenuCategory
                key={category.id}
                id={category.id}
                name={category.name}
                products={category.products}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
