
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// Datele nutriționale sunt aproximative și vor fi actualizate ulterior
const nutritionalInfo = [
  {
    name: "Pachetele de primavară",
    category: "Aperitive",
    calories: 220,
    protein: 5,
    carbs: 28,
    fat: 10,
    allergens: "Gluten, ou"
  },
  {
    name: "Colțunași chinezești",
    category: "Aperitive",
    calories: 250,
    protein: 8,
    carbs: 30,
    fat: 12,
    allergens: "Gluten, ou, susan"
  },
  {
    name: "Supă acru-picantă",
    category: "Supă",
    calories: 120,
    protein: 6,
    carbs: 15,
    fat: 5,
    allergens: "Ou, soia"
  },
  {
    name: "Supă Wonton",
    category: "Supă",
    calories: 180,
    protein: 10,
    carbs: 20,
    fat: 7,
    allergens: "Gluten, ou, soia"
  },
  {
    name: "Pui Kung Pao",
    category: "Pui și Rată",
    calories: 380,
    protein: 25,
    carbs: 22,
    fat: 18,
    allergens: "Arahide, soia"
  },
  {
    name: "Rață Pequin",
    category: "Pui și Rată",
    calories: 450,
    protein: 28,
    carbs: 30,
    fat: 24,
    allergens: "Gluten, soia, susan"
  },
  {
    name: "Vită cu broccoli",
    category: "Vită",
    calories: 320,
    protein: 22,
    carbs: 16,
    fat: 16,
    allergens: "Soia, gluten"
  },
  {
    name: "Vită Mongolian",
    category: "Vită",
    calories: 350,
    protein: 24,
    carbs: 20,
    fat: 18,
    allergens: "Soia, gluten, susan"
  },
  {
    name: "Porc dulce-acrișor",
    category: "Porc",
    calories: 400,
    protein: 18,
    carbs: 40,
    fat: 16,
    allergens: "Gluten, soia"
  },
  {
    name: "Porc cu ciuperci",
    category: "Porc",
    calories: 320,
    protein: 20,
    carbs: 25,
    fat: 15,
    allergens: "Gluten, soia"
  },
  {
    name: "Creveți în sos de usturoi",
    category: "Fructe de Mare",
    calories: 280,
    protein: 18,
    carbs: 20,
    fat: 12,
    allergens: "Crustacee, soia"
  },
  {
    name: "Mix de fructe de mare",
    category: "Fructe de Mare",
    calories: 310,
    protein: 24,
    carbs: 22,
    fat: 14,
    allergens: "Crustacee, moluște, soia"
  },
  {
    name: "Orez prăjit special",
    category: "Orez și Noodles",
    calories: 350,
    protein: 12,
    carbs: 55,
    fat: 10,
    allergens: "Ou, soia"
  },
  {
    name: "Noodles cu legume",
    category: "Orez și Noodles",
    calories: 320,
    protein: 10,
    carbs: 50,
    fat: 8,
    allergens: "Gluten, ou, soia"
  },
  {
    name: "Banane în crustă",
    category: "Desert",
    calories: 280,
    protein: 3,
    carbs: 48,
    fat: 10,
    allergens: "Gluten, ou"
  },
  {
    name: "Prăjitură chinezească de orez",
    category: "Desert",
    calories: 240,
    protein: 4,
    carbs: 45,
    fat: 6,
    allergens: "Nu conține alergeni comuni"
  },
  {
    name: "Ceai chinezesc",
    category: "Băuturi",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
    allergens: "Nu conține alergeni comuni"
  },
  {
    name: "Băuturi răcoritoare",
    category: "Băuturi",
    calories: 120,
    protein: 0,
    carbs: 30,
    fat: 0,
    allergens: "Poate conține conservanți"
  },
  {
    name: "Sos de soia",
    category: "Sosuri",
    calories: 15,
    protein: 1,
    carbs: 2,
    fat: 0,
    allergens: "Soia, grâu"
  },
  {
    name: "Sos picant",
    category: "Sosuri",
    calories: 30,
    protein: 1,
    carbs: 5,
    fat: 1,
    allergens: "Poate conține soia"
  }
];

const NutritionalInfoPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredItems = nutritionalInfo.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
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

          <div className="mb-6">
            <Input
              type="text"
              placeholder="Caută după numele produsului sau categorie..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md"
            />
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
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NutritionalInfoPage;
