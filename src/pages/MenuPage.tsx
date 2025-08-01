
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MenuCategory from "@/components/menu/MenuCategory";
import { Info } from "lucide-react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useIsMobile } from "@/hooks/use-mobile";
import pacheteleImg from '@/assets/pachetele-primavara.jpg';
import aripioareDafinImg from '@/assets/aripioare-dafin.jpg';
import aripioareNaiImg from '@/assets/aripioare-nai.jpg';
import bananeImg from '@/assets/banane-prajite.jpg';
import crevetiChinezescImg from '@/assets/creveti-cu-sos.jpg';
import exploziePuiImg from '@/assets/explozie-pui.jpg';
import fasoleGanbianImg from '@/assets/fasole-ganbin.jpg';
import furniciImg from '@/assets/furnici-copac.jpg';
import noodlesFMImg from '@/assets/noodles-mare.jpg';
import nooflesPuiImg from '@/assets/noodles-pui.jpg';
import noodlesVitaImg from '@/assets/noodles-vita.jpg';
import noodlesLegumeImg from '@/assets/noodles-legume.jpg';
import orezYImg from '@/assets/orez-yangzu.jpg';
import porcIuteImg from '@/assets/porc-iute.jpg';
import porcMuxuImg from '@/assets/porc-muxu.jpg';
import porumbPaneImg from '@/assets/porumb-pane.jpg';
import puiCiupImg from '@/assets/pui-ciuperci.jpg';
import puiAluneImg from '@/assets/pui-alune.jpg';
import puiSusanImg from '@/assets/pui-susan.jpg';
import puidaImg from '@/assets/pui-acrișor.jpg';
import puiShanghaiImg from '@/assets/pui-shanghai.jpg';
import rataPrajitaImg from '@/assets/rata-prajita.jpg';
import salataCastImg from '@/assets/salata-castraveti.jpg';
import salataUrechiImg from '@/assets/salata-urechi.jpg';
import vitaChuanImg from '@/assets/vita-chuan.jpg';
import vitaTelinaImg from '@/assets/vita-telina.jpg';
import vitaCartofiImg from '@/assets/vita-cartofi.jpg';
import vitaIuteImg from '@/assets/vita-iute.jpg';
import vitaGanbianImg from '@/assets/vita-ganbin.jpg';
import colaImg from '@/assets/cola.jpg';
import spriteImg from '@/assets/sprite.jpg';
import fantaImg from '@/assets/fanta.jpg';
import apaImg from '@/assets/apa.jpg';
import ssImg from '@/assets/sos soia.jpg';
import sdImg from '@/assets/sos dulce.jpg';
import supaciupImg from '@/assets/supa-ciuperci.jpg';
import supavrImg from '@/assets/supa-vita-rosii.jpg';
import puipesteImg from '@/assets/pui-aroma-peste.jpg';
import puitaijiImg from '@/assets/pui-taiji.jpg';
import puiurechiImg from '@/assets/pui-urechi.jpg';
import puiganbianImg from '@/assets/pui-ganbin.jpg';
import puiplitaImg from '@/assets/pui-plita.jpg';
import vitastridieImg from '@/assets/vita-stridie.jpg';
import vitacondiImg from '@/assets/vita-condimentata.jpg';
import porcciupImg from '@/assets/porc-ciuperci.jpg';
import orezpicantImg from '@/assets/orez-picant.jpg';
import orezsoiaImg from '@/assets/orez-soia.jpg';
import orezcurryImg from '@/assets/orez-curry.jpg';
import cartofipaneImg from '@/assets/cartofi-pane.jpg';
import fructesosImg from '@/assets/fructe-mare-sos.jpg';
import ananasImg from '@/assets/ananas-prajit.jpg';
import crevetiPicantiImg from '@/assets/creveti-picanti.jpg';
import coltunasiImg from '@/assets/coltunasi.jpg';
import salataTaijiImg from '@/assets/salata-taiji.jpg';
import supaiuteacImg from '@/assets/supa-iute-acrisoara.jpg';
import supapuiporumbImg from '@/assets/supa-pui-porumb.jpg';
import ratapicantaImg from '@/assets/rata-picanta.jpg';
import vitapicantaImg from '@/assets/vita-picanta.jpg';
import vitaplitaImg from '@/assets/vita-plita.jpg';
import orezsimpluImg from '@/assets/orez-simplu.jpg';
import porcplitaImg from '@/assets/porc-plita.jpg';
import lapteprajitImg from '@/assets/lapte-prajit.jpg';
import vinetepesteImg from '@/assets/vinete-peste.jpg';
import logoImg from '@/assets/logo_taiji.png';

const categories = [
  {
    id: "aperitive",
    name: "Aperitive",
    products: [
      {
        id: "a1",
        name: "Pachețele de primăvară cu legume",
        description: "Varză, morcov, urechi de lemn",
        weight: "9 buc",
        price: "20 lei",
        image: pacheteleImg
      },
      {
        id: "a2",
        name: "Pachețele de primăvară cu carne",
        description: "Carne",
        weight: "6 buc",
        price: "24 lei",
        image: logoImg
      },
      {
        id: "a3",
        name: "Colțunași prăjiți",
        description: "Carne tocată, făină, ceapă verde",
        weight: "7 buc",
        price: "28 lei",
        image: coltunasiImg
      },
      {
        id: "a4",
        name: "Pui Shanghai",
        description: "Piept de pui, făină",
        weight: "300g",
        price: "32 lei",
        image: puiShanghaiImg
      },
      {
        id: "a5",
        name: "Salată Taiji",
        description: "Varză, morcov, alge de mare",
        weight: "250g",
        price: "18 lei",
        image: salataTaijiImg
      },
      {
        id: "a6",
        name: "Salată de castraveți",
        description: "Castraveți, usturoi, ardei gras",
        weight: "250g",
        price: "22 lei",
        image: salataCastImg
      },
      {
        id: "a7",
        name: "Salată de urechi de lemn",
        description: "Urechi de lemn, morcov, castraveți, usturoi, ulei de susan",
        weight: "250g",
        price: "28 lei",
        image: salataUrechiImg
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
        price: "18 lei",
        image: supaiuteacImg
      },
      {
        id: "s2",
        name: "Supă de pui cu porumb",
        description: "Pui, porumb, ou",
        weight: "320g",
        price: "18 lei",
        image: supapuiporumbImg
      },
      {
        id: "s3",
        name: "Supă de ciuperci",
        description: "Ciuperci, ou",
        weight: "320g",
        price: "16 lei",
        image: supaciupImg
      },
      {
        id: "s4",
        name: "Supă de vită cu roșii",
        description: "Vită, roșii, ou",
        weight: "320g",
        price: "20 lei",
        image: supavrImg
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
        price: "34 lei",
        image: puidaImg
      },
      {
        id: "pr2",
        name: "Pui cu aroma de pește",
        description: "Pui, morcov, ardei gras, usturoi, alge de mare",
        weight: "320g",
        price: "33 lei",
        image: puipesteImg
      },
      {
        id: "pr3",
        name: "Pui Taiji",
        description: "Pui, susan",
        weight: "320g",
        price: "34 lei",
        image: puitaijiImg
      },
      {
        id: "pr4",
        name: "Pui cu ciuperci",
        description: "Pui, ciuperci, ceapă verde, ardei gras",
        weight: "320g",
        price: "33 lei",
        image: puiCiupImg
      },
      {
        id: "pr5",
        name: "Pui cu urechi de lemn",
        description: "Pui, ou, morcov, castraveți, urechi de lemn",
        weight: "320g",
        price: "34 lei",
        image: puiurechiImg
      },
      {
        id: "pr6",
        name: "Pui cu alune",
        description: "Pui, alune, ceapă, castraveți, morcov",
        weight: "320g",
        price: "34 lei",
        image: puiAluneImg
      },
      {
        id: "pr7",
        name: "Pui ganbin",
        description: "Pui, morcov, ceapă, ardei iute, susan",
        weight: "320g",
        price: "34 lei",
        image: puiganbianImg
      },
      {
        id: "pr8",
        name: "Pui pe plită",
        description: "Pui, morcov, ardei gras, urechi de lemn, ciuperci, bambus",
        weight: "320g",
        price: "33 lei",
        image: puiplitaImg
      },
      {
        id: "pr9",
        name: "Explozie de pui",
        description: "Pui, condimente chinezești",
        weight: "320g",
        price: "34 lei",
        image: exploziePuiImg
      },
      {
        id: "pr10",
        name: "Pui cu susan",
        description: "Pui, susan, salată verde",
        weight: "320g",
        price: "32 lei",
        image: puiSusanImg
      },
      {
        id: "pr11",
        name: "Aripioare nai nai",
        description: "Aripiore de pui, ardei gras, ceapă, susan",
        weight: "320g",
        price: "35 lei",
        image: aripioareNaiImg
      },
      {
        id: "pr12",
        name: "Aripioare cu foi de dafin",
        description: "Aripiore de pui, ceapă, ardei gras, foi de dafin",
        weight: "320g",
        price: "35 lei",
        image: aripioareDafinImg
      },
      {
        id: "pr13",
        name: "Rață prăjită",
        description: "Rață",
        weight: "300g",
        price: "52 lei",
        image: rataPrajitaImg
      },
      {
        id: "pr14",
        name: "Rață picantă",
        description: "Rață, ardei iute, ceapă",
        weight: "350g",
        price: "55 lei",
        image: ratapicantaImg
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
        price: "42 lei",
        image: vitaplitaImg
      },
      {
        id: "v2",
        name: "Vită picantă",
        description: "Vită, ardei iute, ceapă",
        weight: "320g",
        price: "42 lei",
        image: vitapicantaImg
      },
      {
        id: "v3",
        name: "Vită crocantă cu țelină",
        description: "Vită, țelină verde",
        weight: "320g",
        price: "45 lei",
        image: vitaTelinaImg
      },
      {
        id: "v4",
        name: "Vită ganbin",
        description: "Vită, ardei iute, ceapă, susan",
        weight: "320g",
        price: "45 lei",
        image: vitaGanbianImg
      },
      {
        id: "v5",
        name: "Vită cu sos stridii",
        description: "Vită, ardei gras, ceapă, bambus, urechi de lemn",
        weight: "320g",
        price: "42 lei",
        image: vitastridieImg
      },
      {
        id: "v6",
        name: "Vită condimentată",
        description: "Vită, praz, chimen, condimente chinezești",
        weight: "320g",
        price: "42 lei",
        image: vitacondiImg
      },
      {
        id: "v7",
        name: "Vită cu cartofi",
        description: "Vită, cartofi, ardei roșu",
        weight: "320g",
        price: "42 lei",
        image: vitaCartofiImg
      },
      {
        id: "v8",
        name: "Vită și Chuan",
        description: "Vită, ceapă, ciuperci, varză, morcov",
        weight: "350g",
        price: "42 lei",
        image: vitaChuanImg
      },
      {
        id: "v9",
        name: "Vită fiartă iute",
        description: "Vită, varză, urechi de lemn, ceapă verde, castravete, usturoi",
        weight: "500g",
        price: "45 lei",
        image: vitaIuteImg
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
        price: "32 lei",
        image: porcciupImg
      },
      {
        id: "p2",
        name: "Porc pe plită",
        description: "Porc, morcov, ardei gras, ciuperci, bambus",
        weight: "320g",
        price: "32 lei",
        image: porcplitaImg
      },
      {
        id: "p3",
        name: "Porc muxu",
        description: "Porc, ou, morcov, castraveți, urechi de lemn",
        weight: "320g",
        price: "33 lei",
        image: porcMuxuImg
      },
      {
        id: "p4",
        name: "Porc iute",
        description: "Porc, ardei iute, ceapă",
        weight: "320g",
        price: "35 lei",
        image: porcIuteImg
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
        price: "15 lei",
        image: orezsimpluImg
      },
      {
        id: "on2",
        name: "Orez picant",
        description: "Orez, legume, pastă de ardei iute",
        weight: "320g",
        price: "18 lei",
        image: orezpicantImg
      },
      {
        id: "on3",
        name: "Orez cu soia",
        description: "Orez, soia, ciuperci",
        weight: "320g",
        price: "18 lei",
        image: orezsoiaImg
      },
      {
        id: "on4",
        name: "Orez yangzu",
        description: "Orez, legume, ou, șuncă",
        weight: "320g",
        price: "18 lei",
        image: orezYImg
      },
      {
        id: "on5",
        name: "Orez curry și fructe de mare",
        description: "Orez, scoici, creveți, calamar",
        weight: "320g",
        price: "28 lei",
        image: orezcurryImg
      },
      {
        id: "on6",
        name: "Noodles cu legume",
        description: "Noodles, varză, morcov, ciuperci, ceapă",
        weight: "320g",
        price: "26 lei",
        image: noodlesLegumeImg
      },
      {
        id: "on7",
        name: "Noodles cu pui",
        description: "Noodles, varză, morcov, ciuperci, pui",
        weight: "320g",
        price: "28 lei",
        image: nooflesPuiImg
      },
      {
        id: "on8",
        name: "Noodles cu vită",
        description: "Noodles, varză, morcov, ceapă, vită",
        weight: "320g",
        price: "31 lei",
        image: noodlesVitaImg
      },
      {
        id: "on9",
        name: "Noodles cu fructe de mare",
        description: "Noodles, varză, morcov, urechi de lemn, scoici, creveți, calamar",
        weight: "320g",
        price: "35 lei",
        image: noodlesFMImg
      },
      {
        id: "on10",
        name: "Furnici în copac",
        description: "Noodles, legume, carne tocată de porc",
        weight: "320g",
        price: "28 lei",
        image: furniciImg
      },]
    },
    {
    id: "legume",
    name: "Legume",
    products: [
      {
        id: "l1",
        name: "Fasole ganbin",
        description: "Fasole verde, ardei gras, ardei iute",
        weight: "320g",
        price: "26 lei",
        image: fasoleGanbianImg
      },
      {
        id: "l2",
        name: "Vinete cu aroma de pește",
        description: "Vinete, ceapă verde",
        weight: "320g",
        price: "26 lei",
        image: vinetepesteImg
      },
      {
        id: "l3",
        name: "Cartofi pane",
        description: "Cartofi, ardei iute",
        weight: "320g",
        price: "23 lei",
        image: cartofipaneImg
      },
      {
        id: "l4",
        name: "Porumb pane",
        description: "Porumb, amidon",
        weight: "320g",
        price: "25 lei",
        image: porumbPaneImg
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
        price: "53 lei",
        image: fructesosImg
      },
      {
        id: "fm2",
        name: "Creveți cu sos chinezesc",
        description: "Creveți, condimente chinezești",
        weight: "350g",
        price: "58 lei",
        image: crevetiChinezescImg
      },
      {
        id: "fm3",
        name: "Creveți picanți",
        description: "Creveți, ardei iute, ceapă",
        weight: "350g",
        price: "60 lei",
        image: crevetiPicantiImg
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
        price: "19 lei",
        image: ananasImg
      },
      {
        id: "d2",
        name: "Banane prăjite",
        description: "",
        weight: "250g",
        price: "18 lei",
        image: bananeImg
      },
      {
        id: "d3",
        name: "Lapte prăjit",
        description: "",
        weight: "250g",
        price: "24 lei",
        image: lapteprajitImg
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
        price: "8 lei",
        image: colaImg
      },
      {
        id: "b2",
        name: "Fanta",
        description: "",
        weight: "0.33L",
        price: "8 lei",
        image: fantaImg
      },
      {
        id: "b3",
        name: "Sprite",
        description: "",
        weight: "0.33L",
        price: "8 lei",
        image: spriteImg
      },
      {
        id: "b4",
        name: "Apă plată",
        description: "",
        weight: "0.5L",
        price: "6 lei",
        image: apaImg
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
        price: "4 lei",
        image: ssImg
      },
      {
        id: "sos2",
        name: "Sos iute",
        description: "",
        weight: "",
        price: "4 lei",
        image: logoImg
      },
      {
        id: "sos3",
        name: "Sos dulce",
        description: "",
        weight: "",
        price: "4 lei",
        image: sdImg
      },
      {
        id: "sos4",
        name: "Sos chili",
        description: "",
        weight: "",
        price: "4 lei",
        image: logoImg
      }
    ]
  }
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const isMobile = useIsMobile();
  const tabsListRef = useRef<HTMLDivElement>(null);
  
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
        activeTab.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
  }, [activeCategory, isMobile]);

  return (
    <HelmetProvider>
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
              <div className="overflow-x-auto pb-2">
                <TabsList 
                  ref={tabsListRef} 
                  className="w-max flex space-x-2 p-1 bg-gray-100 overflow-x-visible"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {categories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="whitespace-nowrap data-[state=active]:bg-chinese-red data-[state=active]:text-white"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
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
    </HelmetProvider>
  );
};

export default MenuPage;
