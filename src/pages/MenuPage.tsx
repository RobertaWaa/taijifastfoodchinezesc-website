
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuCategory from "@/components/menu/MenuCategory";
import { Info, ChevronLeft, ChevronRight } from "lucide-react";
import { Helmet } from "react-helmet";
import { useIsMobile } from "@/hooks/use-mobile";

const categories = [
  {
    id: "aperitive",
    name: "Aperitive",
    products: [
      {
        id: "a1",
        name: "Pachețele de primăvară",
        description: "Varză, morcov, urechi de lemn",
        weight: "250g / 6 buc",
        price: "15 lei",
        image: "https://source.unsplash.com/random/300x200/?spring,rolls"
      },
      {
        id: "a2",
        name: "Colțunași prăjiți",
        description: "Carne tocată, făină, ceapă verde",
        weight: "250g / 6 buc",
        price: "18 lei",
        image: "https://source.unsplash.com/random/300x200/?dumplings"
      },
      {
        id: "a3",
        name: "Pui Shanghai",
        description: "Piept de pui, făină",
        weight: "300g",
        price: "23 lei",
        image: "https://source.unsplash.com/random/300x200/?shanghai,chicken"
      },
      {
        id: "a4",
        name: "Salată Taiji",
        description: "Varză, morcov, femei alge de mare",
        weight: "250g",
        price: "18 lei",
        image: "https://source.unsplash.com/random/300x200/?chinese,salad"
      }
    ]
  },
  {
    id: "supa",
    name: "Supă",
    products: [
      {
        id: "s1",
        name: "Supă iute acrișoară",
        description: "Bambus, urechi de lemn, ou, castraveți",
        weight: "320g",
        price: "12 lei",
        image: "https://source.unsplash.com/random/300x200/?hot,sour,soup"
      },
      {
        id: "s2",
        name: "Supă de pui cu porumb",
        description: "Pui, porumb, ou",
        weight: "320g",
        price: "12 lei",
        image: "https://source.unsplash.com/random/300x200/?chicken,corn,soup"
      },
      {
        id: "s3",
        name: "Supă de ciuperci",
        description: "Ciuperci, ou",
        weight: "320g",
        price: "10 lei",
        image: "https://source.unsplash.com/random/300x200/?mushroom,soup"
      },
      {
        id: "s4",
        name: "Supă de vită cu roșii",
        description: "Vită, roșii, ou",
        weight: "320g",
        price: "12 lei",
        image: "https://source.unsplash.com/random/300x200/?beef,tomato,soup"
      }
    ]
  },
  {
    id: "pui-rata",
    name: "Pui și Rață",
    products: [
      {
        id: "pr1",
        name: "Pui dulce acrișor",
        description: "Pui, ananas, castraveți, morcov",
        weight: "320g",
        price: "25 lei",
        image: "https://source.unsplash.com/random/300x200/?sweet,sour,chicken"
      },
      {
        id: "pr2",
        name: "Pui cu aroma de pește",
        description: "Pui, morcov, ardei gras, usturoi, alge de mare",
        weight: "320g",
        price: "25 lei",
        image: "https://source.unsplash.com/random/300x200/?fish,flavor,chicken"
      },
      {
        id: "pr3",
        name: "Pui Taiji",
        description: "Pui, susan",
        weight: "320g",
        price: "26 lei",
        image: "https://source.unsplash.com/random/300x200/?sesame,chicken"
      },
      {
        id: "pr4",
        name: "Pui cu ciuperci",
        description: "Pui, ciuperci, ceapă verde, ardei gras",
        weight: "320g",
        price: "25 lei",
        image: "https://source.unsplash.com/random/300x200/?mushroom,chicken"
      },
      {
        id: "pr5",
        name: "Pui cu urechi de lemn",
        description: "Pui, ou, morcov, castraveți, urechi de lemn",
        weight: "320g",
        price: "25 lei",
        image: "https://source.unsplash.com/random/300x200/?chicken,mushroom"
      },
      {
        id: "pr6",
        name: "Pui cu alune",
        description: "Pui, alune, ceapă, castraveți, morcov",
        weight: "320g",
        price: "25 lei",
        image: "https://source.unsplash.com/random/300x200/?kung,pao,chicken"
      },
      {
        id: "pr7",
        name: "Pui ganbin",
        description: "Pui, morcov, ceapă, ardei iute, susan",
        weight: "320g",
        price: "28 lei",
        image: "https://source.unsplash.com/random/300x200/?spicy,chicken"
      },
      {
        id: "pr8",
        name: "Pui pe plită",
        description: "Pui, morcov, ardei gras, urechi de lemn, ciuperci, bambus",
        weight: "320g",
        price: "24 lei",
        image: "https://source.unsplash.com/random/300x200/?sizzling,chicken"
      },
      {
        id: "pr9",
        name: "Explozie de pui",
        description: "Pui, condimente chinezești",
        weight: "320g",
        price: "26 lei",
        image: "https://source.unsplash.com/random/300x200/?explosion,chicken"
      },
      {
        id: "pr10",
        name: "Aripiore ganbian",
        description: "Aripiore de pui, ardei gras, ceapă, susan",
        weight: "320g",
        price: "25 lei",
        image: "https://source.unsplash.com/random/300x200/?chicken,wings"
      },
      {
        id: "pr11",
        name: "Aripiore cu foi de dafin",
        description: "Aripiore de pui, ceapă, ardei gras, foi de dafin",
        weight: "320g",
        price: "25 lei",
        image: "https://source.unsplash.com/random/300x200/?bayleaf,chicken"
      },
      {
        id: "pr12",
        name: "Rață prăjită",
        description: "Rață",
        weight: "300g",
        price: "35 lei",
        image: "https://source.unsplash.com/random/300x200/?roast,duck"
      },
      {
        id: "pr13",
        name: "Rață picantă",
        description: "Rață, ardei iute, ceapă",
        weight: "350g",
        price: "36 lei",
        image: "https://source.unsplash.com/random/300x200/?spicy,duck"
      }
    ]
  },
  {
    id: "vita",
    name: "Vită",
    products: [
      {
        id: "v1",
        name: "Vită pe plită",
        description: "Vită, morcov, ardei gras, urechi de lemn, ciuperci, bambus",
        weight: "320g",
        price: "27 lei",
        image: "https://source.unsplash.com/random/300x200/?sizzling,beef"
      },
      {
        id: "v2",
        name: "Vită picantă",
        description: "Vită, ardei iute, ceapă",
        weight: "320g",
        price: "32 lei",
        image: "https://source.unsplash.com/random/300x200/?spicy,beef"
      },
      {
        id: "v3",
        name: "Vită crocantă cu țelină",
        description: "Vită, țelină verde",
        weight: "320g",
        price: "35 lei",
        image: "https://source.unsplash.com/random/300x200/?celery,beef"
      },
      {
        id: "v4",
        name: "Vită ganbin",
        description: "Vită, ardei iute, ceapă, susan",
        weight: "320g",
        price: "35 lei",
        image: "https://source.unsplash.com/random/300x200/?ganbin,beef"
      },
      {
        id: "v5",
        name: "Vită în sos stridie",
        description: "Vită, ardei gras, ceapă, bambus, urechi de lemn",
        weight: "320g",
        price: "28 lei",
        image: "https://source.unsplash.com/random/300x200/?oyster,sauce,beef"
      },
      {
        id: "v6",
        name: "Vită condimentată",
        description: "Vită, praz, chimen, condimente chinezești",
        weight: "320g",
        price: "30 lei",
        image: "https://source.unsplash.com/random/300x200/?spiced,beef"
      },
      {
        id: "v7",
        name: "Vită cu cartofi",
        description: "Vită, cartofi, ardei roșu",
        weight: "320g",
        price: "32 lei",
        image: "https://source.unsplash.com/random/300x200/?beef,potato"
      },
      {
        id: "v8",
        name: "Vită și Chuan",
        description: "Vită, ceapă, ciuperci, varză, morcov",
        weight: "350g",
        price: "30 lei",
        image: "https://source.unsplash.com/random/300x200/?szechuan,beef"
      }
    ]
  },
  {
    id: "porc",
    name: "Porc",
    products: [
      {
        id: "p1",
        name: "Porc cu ciuperci",
        description: "Porc, ciuperci, ceapă verde",
        weight: "320g",
        price: "25 lei",
        image: "https://source.unsplash.com/random/300x200/?pork,mushroom"
      },
      {
        id: "p2",
        name: "Porc pe plită",
        description: "Porc, morcov, ardei gras, ciuperci, bambus",
        weight: "320g",
        price: "25 lei",
        image: "https://source.unsplash.com/random/300x200/?sizzling,pork"
      },
      {
        id: "p3",
        name: "Porc muxu",
        description: "Porc, ou, morcov, castraveți, urechi de lemn",
        weight: "320g",
        price: "25 lei",
        image: "https://source.unsplash.com/random/300x200/?muxu,pork"
      },
      {
        id: "p4",
        name: "Porc iute",
        description: "Porc, ardei iute, ceapă",
        weight: "320g",
        price: "25 lei",
        image: "https://source.unsplash.com/random/300x200/?spicy,pork"
      }
    ]
  },
  {
    id: "orez-noodles",
    name: "Orez și Noodles",
    products: [
      {
        id: "on1",
        name: "Orez simplu",
        description: "Orez",
        weight: "320g",
        price: "10 lei",
        image: "https://source.unsplash.com/random/300x200/?plain,rice"
      },
      {
        id: "on2",
        name: "Orez picant",
        description: "Orez, legume, pastă de ardei iute",
        weight: "320g",
        price: "13 lei",
        image: "https://source.unsplash.com/random/300x200/?spicy,rice"
      },
      {
        id: "on3",
        name: "Orez cu soia",
        description: "Orez, soia, ciuperci",
        weight: "320g",
        price: "12 lei",
        image: "https://source.unsplash.com/random/300x200/?soy,rice"
      },
      {
        id: "on4",
        name: "Orez yangzu",
        description: "Orez, legume, ou, șuncă",
        weight: "320g",
        price: "14 lei",
        image: "https://source.unsplash.com/random/300x200/?yangzhou,fried,rice"
      },
      {
        id: "on5",
        name: "Orez curry și fructe de mare",
        description: "Orez, scoici, creveți, calamar",
        weight: "320g",
        price: "21 lei",
        image: "https://source.unsplash.com/random/300x200/?curry,seafood,rice"
      },
      {
        id: "on6",
        name: "Noodles cu legume",
        description: "Noodles, varză, morcov, ciuperci, ceapă",
        weight: "320g",
        price: "17 lei",
        image: "https://source.unsplash.com/random/300x200/?vegetable,noodles"
      },
      {
        id: "on7",
        name: "Noodles cu pui",
        description: "Noodles, varză, morcov, ciuperci, pui",
        weight: "320g",
        price: "22 lei",
        image: "https://source.unsplash.com/random/300x200/?chicken,noodles"
      },
      {
        id: "on8",
        name: "Noodles cu vită",
        description: "Noodles, varză, morcov, ceapă, vită",
        weight: "320g",
        price: "23 lei",
        image: "https://source.unsplash.com/random/300x200/?beef,noodles"
      },
      {
        id: "on9",
        name: "Noodles cu fructe de mare",
        description: "Noodles, varză, morcov, urechi de lemn, scoici, creveți, calamar",
        weight: "320g",
        price: "24 lei",
        image: "https://source.unsplash.com/random/300x200/?seafood,noodles"
      },
      {
        id: "on10",
        name: "Furnici în copac",
        description: "Noodles, legume, carne tocată de porc",
        weight: "320g",
        price: "22 lei",
        image: "https://source.unsplash.com/random/300x200/?ants,climbing,tree"
      },
      {
        id: "on11",
        name: "Fasole ganbin",
        description: "Fasole verde, ardei gras, ardei iute",
        weight: "320g",
        price: "20 lei",
        image: "https://source.unsplash.com/random/300x200/?green,beans"
      },
      {
        id: "on12",
        name: "Vinete cu aroma de pește",
        description: "Vinete, ceapă verde",
        weight: "320g",
        price: "22 lei",
        image: "https://source.unsplash.com/random/300x200/?fish,flavored,eggplant"
      },
      {
        id: "on13",
        name: "Cartofi pane",
        description: "Cartofi, ardei iute",
        weight: "320g",
        price: "18 lei",
        image: "https://source.unsplash.com/random/300x200/?fried,potatoes"
      },
      {
        id: "on14",
        name: "Porumb pane",
        description: "Porumb, amidon",
        weight: "320g",
        price: "18 lei",
        image: "https://source.unsplash.com/random/300x200/?fried,corn"
      }
    ]
  },
  {
    id: "fructe-mare",
    name: "Fructe de Mare",
    products: [
      {
        id: "fm1",
        name: "Fructe de mare în sos chinezesc",
        description: "Scoici, creveți, calamar",
        weight: "350g",
        price: "42 lei",
        image: "https://source.unsplash.com/random/300x200/?seafood,chinese,sauce"
      },
      {
        id: "fm2",
        name: "Creveți cu sos chinezesc",
        description: "Creveți, condimente chinezești",
        weight: "350g",
        price: "48 lei",
        image: "https://source.unsplash.com/random/300x200/?shrimp,chinese,sauce"
      },
      {
        id: "fm3",
        name: "Creveți picanți",
        description: "Creveți, ardei iute, ceapă",
        weight: "350g",
        price: "46 lei",
        image: "https://source.unsplash.com/random/300x200/?spicy,shrimp"
      }
    ]
  },
  {
    id: "desert",
    name: "Desert",
    products: [
      {
        id: "d1",
        name: "Ananas prăjit",
        description: "",
        weight: "250g",
        price: "12 lei",
        image: "https://source.unsplash.com/random/300x200/?fried,pineapple"
      },
      {
        id: "d2",
        name: "Banane prăjite",
        description: "",
        weight: "250g",
        price: "11 lei",
        image: "https://source.unsplash.com/random/300x200/?fried,banana"
      },
      {
        id: "d3",
        name: "Lapte prăjit",
        description: "",
        weight: "250g",
        price: "14 lei",
        image: "https://source.unsplash.com/random/300x200/?fried,milk"
      }
    ]
  },
  {
    id: "bauturi",
    name: "Băuturi",
    products: [
      {
        id: "b1",
        name: "Coca Cola",
        description: "",
        weight: "0.33L",
        price: "6 lei",
        image: "https://source.unsplash.com/random/300x200/?coca,cola"
      },
      {
        id: "b2",
        name: "Fanta",
        description: "",
        weight: "0.33L",
        price: "6 lei",
        image: "https://source.unsplash.com/random/300x200/?fanta"
      },
      {
        id: "b3",
        name: "Sprite",
        description: "",
        weight: "0.33L",
        price: "6 lei",
        image: "https://source.unsplash.com/random/300x200/?sprite"
      },
      {
        id: "b4",
        name: "Apă plată",
        description: "",
        weight: "0.5L",
        price: "5 lei",
        image: "https://source.unsplash.com/random/300x200/?water,bottle"
      }
    ]
  },
  {
    id: "sosuri",
    name: "Sosuri",
    products: [
      {
        id: "sos1",
        name: "Sos soia",
        description: "",
        weight: "",
        price: "2 lei",
        image: "https://source.unsplash.com/random/300x200/?soy,sauce"
      },
      {
        id: "sos2",
        name: "Sos iute",
        description: "",
        weight: "",
        price: "2 lei",
        image: "https://source.unsplash.com/random/300x200/?hot,sauce"
      },
      {
        id: "sos3",
        name: "Sos dulce",
        description: "",
        weight: "",
        price: "2 lei",
        image: "https://source.unsplash.com/random/300x200/?sweet,sauce"
      },
      {
        id: "sos4",
        name: "Sos chili",
        description: "",
        weight: "",
        price: "2 lei",
        image: "https://source.unsplash.com/random/300x200/?chili,sauce"
      }
    ]
  }
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const isMobile = useIsMobile();
  const tabsListRef = useRef<HTMLDivElement>(null);
  
  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsListRef.current) {
      const scrollAmount = 200;
      const scrollPosition = direction === 'left' 
        ? tabsListRef.current.scrollLeft - scrollAmount
        : tabsListRef.current.scrollLeft + scrollAmount;
        
      tabsListRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

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

  useEffect(() => {
    // Scroll to the active category tab on mobile
    if (tabsListRef.current && isMobile) {
      const activeTab = tabsListRef.current.querySelector(`[data-state="active"]`);
      if (activeTab) {
        const tabsListRect = tabsListRef.current.getBoundingClientRect();
        const activeTabRect = activeTab.getBoundingClientRect();
        
        // Calculate the amount to scroll to center the active tab
        const scrollPosition = 
          activeTabRect.left -
          tabsListRect.left -
          (tabsListRect.width / 2) +
          (activeTabRect.width / 2) +
          tabsListRef.current.scrollLeft;
        
        tabsListRef.current.scrollTo({
          left: scrollPosition,
          behavior: "smooth"
        });
      }
    }
  }, [activeCategory, isMobile]);

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
            <div className="relative">
              <Tabs 
                defaultValue={categories[0].id} 
                onValueChange={handleCategoryChange}
                value={activeCategory}
              >
                <div className="flex items-center">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => scrollTabs('left')}
                    className="flex-shrink-0 text-chinese-red"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  
                  <TabsList 
                    ref={tabsListRef} 
                    className="w-full h-auto flex flex-nowrap overflow-x-auto space-x-2 p-1 bg-gray-100 pb-3 scrollbar-hide no-scrollbar"
                  >
                    {categories.map((category) => (
                      <TabsTrigger 
                        key={category.id} 
                        value={category.id}
                        className="flex-shrink-0 data-[state=active]:bg-chinese-red data-[state=active]:text-white whitespace-nowrap"
                      >
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => scrollTabs('right')}
                    className="flex-shrink-0 text-chinese-red"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              </Tabs>
            </div>
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
