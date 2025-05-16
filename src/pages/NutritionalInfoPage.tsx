
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Date nutriționale bazate pe meniul real (valorile sunt aproximative și orientative)
const nutritionalInfo = [
  // Aperitive
  {
    name: "Pachețele de primăvară",
    category: "Aperitive",
    calories: 250,
    protein: 4,
    carbs: 35,
    fat: 12,
    allergens: "Gluten"
  },
  {
    name: "Colțunași prăjiți",
    category: "Aperitive",
    calories: 320,
    protein: 12,
    carbs: 30,
    fat: 16,
    allergens: "Gluten, ou"
  },
  {
    name: "Pui Shanghai",
    category: "Aperitive",
    calories: 350,
    protein: 25,
    carbs: 18,
    fat: 20,
    allergens: "Gluten"
  },
  {
    name: "Salată Taiji",
    category: "Aperitive",
    calories: 180,
    protein: 3,
    carbs: 15,
    fat: 12,
    allergens: "Alge marine, poate conține soia"
  },
  {
    name: "Salată de castraveți",
    category: "Aperitive",
    calories: 60,
    protein: 2,
    carbs: 10,
    fat: 0.5,
    allergens: "Usturoi"
  },
  {
    name: "Salată de urechi de lemn",
    category: "Aperitive",
    calories: 80,
    protein: 3,
    carbs: 11,
    fat: 3,
    allergens: "Usturoi,poate conține susan"
  },
  
  // Supe
  {
    name: "Supă iute acrișoară",
    category: "Supă",
    calories: 120,
    protein: 8,
    carbs: 12,
    fat: 4,
    allergens: "Ou, poate conține gluten"
  },
  {
    name: "Supă de pui cu porumb",
    category: "Supă",
    calories: 150,
    protein: 10,
    carbs: 15,
    fat: 6,
    allergens: "Poate conține gluten, ou"
  },
  {
    name: "Supă de ciuperci",
    category: "Supă",
    calories: 100,
    protein: 4,
    carbs: 10,
    fat: 5,
    allergens: "Ou, poate conține gluten"
  },
  {
    name: "Supă de vită cu roșii",
    category: "Supă",
    calories: 140,
    protein: 12,
    carbs: 10,
    fat: 7,
    allergens: "Ou, poate conține gluten"
  },
  
  // Pui și Rață
  {
    name: "Pui dulce acrișor",
    category: "Pui și Rată",
    calories: 320,
    protein: 20,
    carbs: 35,
    fat: 12,
    allergens: "Poate conține gluten, soia"
  },
  {
    name: "Pui cu aroma de pește",
    category: "Pui și Rată",
    calories: 300,
    protein: 22,
    carbs: 18,
    fat: 16,
    allergens: "Alge marine, soia, poate conține gluten"
  },
  {
    name: "Pui Taiji",
    category: "Pui și Rată",
    calories: 340,
    protein: 25,
    carbs: 15,
    fat: 20,
    allergens: "Susan, poate conține gluten, soia"
  },
  {
    name: "Pui cu ciuperci",
    category: "Pui și Rată",
    calories: 280,
    protein: 24,
    carbs: 14,
    fat: 15,
    allergens: "Poate conține gluten, soia"
  },
  {
    name: "Pui cu urechi de lemn",
    category: "Pui și Rată",
    calories: 290,
    protein: 24,
    carbs: 16,
    fat: 15,
    allergens: "Ou, poate conține gluten, soia"
  },
  {
    name: "Pui cu alune",
    category: "Pui și Rată",
    calories: 350,
    protein: 25,
    carbs: 14,
    fat: 22,
    allergens: "Arahide, poate conține gluten, soia"
  },
  {
    name: "Pui ganbin",
    category: "Pui și Rată",
    calories: 330,
    protein: 26,
    carbs: 12,
    fat: 20,
    allergens: "Susan, poate conține gluten, soia"
  },
  {
    name: "Pui pe plită",
    category: "Pui și Rată",
    calories: 310,
    protein: 24,
    carbs: 18,
    fat: 16,
    allergens: "Poate conține gluten, soia"
  },
  {
    name: "Explozie de pui",
    category: "Pui și Rată",
    calories: 330,
    protein: 25,
    carbs: 15,
    fat: 18,
    allergens: "Poate conține gluten, soia"
  },
  {
    name: "Pui cu susan",
    category: "Pui și Rată",
    calories: 340,
    protein: 28,
    carbs: 10,
    fat: 22,
    allergens: "Susan, poate conține gluten"
  },
  {
    name: "Aripiore ganbian",
    category: "Pui și Rată",
    calories: 380,
    protein: 22,
    carbs: 16,
    fat: 26,
    allergens: "Susan, poate conține gluten, soia"
  },
  {
    name: "Aripiore cu foi de dafin",
    category: "Pui și Rată",
    calories: 370,
    protein: 22,
    carbs: 15,
    fat: 25,
    allergens: "Poate conține gluten, soia"
  },
  {
    name: "Rață prăjită",
    category: "Pui și Rată",
    calories: 450,
    protein: 28,
    carbs: 12,
    fat: 35,
    allergens: "Poate conține gluten"
  },
  {
    name: "Rață picantă",
    category: "Pui și Rată",
    calories: 460,
    protein: 28,
    carbs: 14,
    fat: 34,
    allergens: "Poate conține gluten, soia"
  },
  
  // Vită
  {
    name: "Vită pe plită",
    category: "Vită",
    calories: 340,
    protein: 26,
    carbs: 18,
    fat: 18,
    allergens: "Poate conține gluten, soia"
  },
  {
    name: "Vită picantă",
    category: "Vită",
    calories: 360,
    protein: 28,
    carbs: 14,
    fat: 22,
    allergens: "Poate conține gluten, soia"
  },
  {
    name: "Vită crocantă cu țelină",
    category: "Vită",
    calories: 320,
    protein: 26,
    carbs: 18,
    fat: 16,
    allergens: "Poate conține gluten, soia, țelină"
  },
  {
    name: "Vită ganbin",
    category: "Vită",
    calories: 370,
    protein: 28,
    carbs: 14,
    fat: 24,
    allergens: "Susan, poate conține gluten, soia"
  },
  {
    name: "Vită în sos stridie",
    category: "Vită",
    calories: 330,
    protein: 25,
    carbs: 20,
    fat: 18,
    allergens: "Moluște, poate conține gluten, soia"
  },
  {
    name: "Vită condimentată",
    category: "Vită",
    calories: 350,
    protein: 26,
    carbs: 16,
    fat: 20,
    allergens: "Poate conține gluten, soia"
  },
  {
    name: "Vită cu cartofi",
    category: "Vită",
    calories: 380,
    protein: 24,
    carbs: 35,
    fat: 16,
    allergens: "Poate conține gluten, soia"
  },
  {
    name: "Vită și Chuan",
    category: "Vită",
    calories: 340,
    protein: 26,
    carbs: 18,
    fat: 19,
    allergens: "Poate conține gluten, soia"
  },
  
  // Porc
  {
    name: "Porc cu ciuperci",
    category: "Porc",
    calories: 320,
    protein: 22,
    carbs: 18,
    fat: 18,
    allergens: "Poate conține gluten, soia"
  },
  {
    name: "Porc pe plită",
    category: "Porc",
    calories: 340,
    protein: 22,
    carbs: 19,
    fat: 20,
    allergens: "Poate conține gluten, soia"
  },
  {
    name: "Porc muxu",
    category: "Porc",
    calories: 330,
    protein: 22,
    carbs: 20,
    fat: 19,
    allergens: "Ou, poate conține gluten, soia"
  },
  {
    name: "Porc iute",
    category: "Porc",
    calories: 350,
    protein: 22,
    carbs: 16,
    fat: 22,
    allergens: "Poate conține gluten, soia"
  },
  
  // Orez și Noodles
  {
    name: "Orez simplu",
    category: "Orez și Noodles",
    calories: 200,
    protein: 4,
    carbs: 44,
    fat: 0,
    allergens: "Nu conține alergeni comuni"
  },
  {
    name: "Orez picant",
    category: "Orez și Noodles",
    calories: 240,
    protein: 5,
    carbs: 45,
    fat: 6,
    allergens: "Poate conține gluten, soia"
  },
  {
    name: "Orez cu soia",
    category: "Orez și Noodles",
    calories: 230,
    protein: 6,
    carbs: 44,
    fat: 4,
    allergens: "Soia, poate conține gluten"
  },
  {
    name: "Orez yangzu",
    category: "Orez și Noodles",
    calories: 280,
    protein: 10,
    carbs: 45,
    fat: 8,
    allergens: "Ou, poate conține gluten, soia"
  },
  {
    name: "Orez curry și fructe de mare",
    category: "Orez și Noodles",
    calories: 320,
    protein: 16,
    carbs: 46,
    fat: 10,
    allergens: "Crustacee, moluște, poate conține gluten, soia"
  },
  {
    name: "Noodles cu legume",
    category: "Orez și Noodles",
    calories: 280,
    protein: 8,
    carbs: 52,
    fat: 5,
    allergens: "Gluten, poate conține soia, ou"
  },
  {
    name: "Noodles cu pui",
    category: "Orez și Noodles",
    calories: 330,
    protein: 20,
    carbs: 52,
    fat: 8,
    allergens: "Gluten, poate conține soia, ou"
  },
  {
    name: "Noodles cu vită",
    category: "Orez și Noodles",
    calories: 340,
    protein: 22,
    carbs: 52,
    fat: 8,
    allergens: "Gluten, poate conține soia, ou"
  },
  {
    name: "Noodles cu fructe de mare",
    category: "Orez și Noodles",
    calories: 320,
    protein: 18,
    carbs: 52,
    fat: 7,
    allergens: "Gluten, crustacee, moluște, poate conține soia, ou"
  },
  {
    name: "Furnici în copac",
    category: "Orez și Noodles",
    calories: 330,
    protein: 16,
    carbs: 54,
    fat: 8,
    allergens: "Gluten, poate conține soia, ou"
  },
  //Legume
  {
    name: "Fasole ganbin",
    category: "Legume",
    calories: 220,
    protein: 6,
    carbs: 28,
    fat: 10,
    allergens: "Poate conține gluten, soia"
  },
  {
    name: "Vinete cu aroma de pește",
    category: "Legume",
    calories: 240,
    protein: 4,
    carbs: 20,
    fat: 16,
    allergens: "Poate conține gluten, soia, pește"
  },
  {
    name: "Cartofi pane",
    category: "Legume",
    calories: 300,
    protein: 4,
    carbs: 45,
    fat: 12,
    allergens: "Gluten"
  },
  {
    name: "Porumb pane",
    category: "Legume",
    calories: 280,
    protein: 5,
    carbs: 40,
    fat: 12,
    allergens: "Gluten"
  },
  
  // Fructe de Mare
  {
    name: "Fructe de mare în sos chinezesc",
    category: "Fructe de Mare",
    calories: 280,
    protein: 22,
    carbs: 18,
    fat: 14,
    allergens: "Crustacee, moluște, poate conține gluten, soia"
  },
  {
    name: "Creveți cu sos chinezesc",
    category: "Fructe de Mare",
    calories: 270,
    protein: 24,
    carbs: 16,
    fat: 12,
    allergens: "Crustacee, poate conține gluten, soia"
  },
  {
    name: "Creveți picanți",
    category: "Fructe de Mare",
    calories: 260,
    protein: 24,
    carbs: 14,
    fat: 12,
    allergens: "Crustacee, poate conține gluten, soia"
  },
  
  // Desert
  {
    name: "Ananas prăjit",
    category: "Desert",
    calories: 220,
    protein: 2,
    carbs: 42,
    fat: 6,
    allergens: "Gluten"
  },
  {
    name: "Banane prăjite",
    category: "Desert",
    calories: 250,
    protein: 2,
    carbs: 46,
    fat: 8,
    allergens: "Gluten"
  },
  {
    name: "Lapte prăjit",
    category: "Desert",
    calories: 280,
    protein: 6,
    carbs: 42,
    fat: 10,
    allergens: "Gluten, lactoză"
  },
  
  // Băuturi
  {
    name: "Coca cola",
    category: "Băuturi",
    calories: 140,
    protein: 0,
    carbs: 35,
    fat: 0,
    allergens: "Nu conține alergeni comuni"
  },
  {
    name: "Fanta",
    category: "Băuturi",
    calories: 140,
    protein: 0,
    carbs: 35,
    fat: 0,
    allergens: "Nu conține alergeni comuni"
  },
  {
    name: "Sprite",
    category: "Băuturi",
    calories: 140,
    protein: 0,
    carbs: 35,
    fat: 0,
    allergens: "Nu conține alergeni comuni"
  },
  {
    name: "Apă plată",
    category: "Băuturi",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    allergens: "Nu conține alergeni comuni"
  },
  
  // Sosuri
  {
    name: "Sos soia",
    category: "Sosuri",
    calories: 15,
    protein: 1,
    carbs: 2,
    fat: 0,
    allergens: "Soia, grâu"
  },
  {
    name: "Sos iute",
    category: "Sosuri",
    calories: 20,
    protein: 0,
    carbs: 5,
    fat: 0,
    allergens: "Poate conține soia, gluten"
  },
  {
    name: "Sos dulce",
    category: "Sosuri",
    calories: 40,
    protein: 0,
    carbs: 10,
    fat: 0,
    allergens: "Poate conține soia, gluten"
  },
  {
    name: "Sos chili",
    category: "Sosuri",
    calories: 25,
    protein: 0,
    carbs: 5,
    fat: 0,
    allergens: "Poate conține soia"
  }
];

const NutritionalInfoPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(nutritionalInfo.map(item => item.category)));

  const filteredItems = nutritionalInfo.filter(
    (item) => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
      
      return matchesSearch && matchesCategory;
    }
  );

  return (
    <>
      <Helmet>
        <title>Informații Nutriționale | Taiji Fast Food Chinezesc</title>
        <meta
          name="description"
          content="Consultă informațiile nutriționale pentru preparatele noastre. Aflați valorile calorice, conținutul de proteine, carbohidrați, grăsimi și alergenii pentru fiecare fel de mâncare."
        />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Button
              asChild
              variant="ghost"
              className="mb-4 text-chinese-red hover:text-chinese-darkred hover:bg-transparent"
            >
              <Link to="/meniu" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Înapoi la meniu
              </Link>
            </Button>
            <h1 className="text-4xl font-bold text-chinese-red mb-4">Informații nutriționale</h1>
            <p className="text-gray-600 max-w-3xl">
              Mai jos veți găsi informații detaliate despre valorile nutriționale ale preparatelor noastre. 
              Vă rugăm să rețineți că acestea sunt orientative și pot varia ușor în funcție de preparare.
            </p>
          </div>

          <div className="mb-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="text"
                placeholder="Caută după numele produsului..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-md"
              />
              
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  onClick={() => setSelectedCategory(null)}
                  className={selectedCategory === null ? "bg-chinese-red hover:bg-chinese-darkred" : ""}
                  size="sm"
                >
                  Toate
                </Button>
                {categories.map(category => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-chinese-red hover:bg-chinese-darkred" : ""}
                    size="sm"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-chinese-red text-white">
                  <th className="p-3 text-left">Produs</th>
                  <th className="p-3 text-left">Categorie</th>
                  <th className="p-3 text-right">Calorii (kcal)</th>
                  <th className="p-3 text-right">Proteine (g)</th>
                  <th className="p-3 text-right">Carbohidrați (g)</th>
                  <th className="p-3 text-right">Grăsimi (g)</th>
                  <th className="p-3 text-left">Alergeni</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item, index) => (
                  <tr
                    key={index}
                    className={`border-b ${
                      index % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="p-3 font-medium">{item.name}</td>
                    <td className="p-3">{item.category}</td>
                    <td className="p-3 text-right">{item.calories}</td>
                    <td className="p-3 text-right">{item.protein}</td>
                    <td className="p-3 text-right">{item.carbs}</td>
                    <td className="p-3 text-right">{item.fat}</td>
                    <td className="p-3">{item.allergens}</td>
                  </tr>
                ))}

                {filteredItems.length === 0 && (
                  <tr>
                    <td colSpan={7} className="p-3 text-center text-gray-500">
                      Nu s-au găsit produse care să corespundă căutării.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg max-w-3xl">
            <h3 className="font-bold text-lg mb-2">Notă privind alergenii</h3>
            <p className="text-gray-600">
              Toate preparatele noastre pot conține urme de alergeni. Dacă aveți alergii sau 
              intoleranțe alimentare, vă rugăm să informați personalul nostru înainte de a comanda.
              Informațiile sunt furnizate cu titlu orientativ și pot varia în funcție de preparare.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NutritionalInfoPage;
