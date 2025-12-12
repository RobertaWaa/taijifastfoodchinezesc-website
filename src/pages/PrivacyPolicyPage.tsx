
import React from "react";
import { Helmet } from "react-helmet";

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <Helmet>
        <title>Politică de Confidențialitate - Taiji Restaurant Chinezesc</title>
        <meta name="description" content="Politica de confidențialitate a restaurantului Taiji Restaurant Chinezesc" />
      </Helmet>

      <h1 className="text-3xl font-bold text-center text-chinese-red mb-8">Politică de Confidențialitate</h1>

      <div className="prose prose-lg max-w-4xl mx-auto">
        <p className="mb-4">
          <strong>Data ultimei actualizări:</strong> {new Date().toLocaleDateString('ro-RO')}
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">1. Introducere</h2>
          <p>
            Această Politică de Confidențialitate explică modul în care TAIJI FAST FOOD S.R.L. („noi", „nostru" sau „compania"), 
            operator al restaurantului Taiji Restaurant Chinezesc, colectează, utilizează, divulgă și protejează 
            informațiile personale pe care le obținem de la utilizatorii site-ului nostru și de la clienții restaurantului nostru.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">2. Informațiile pe care le colectăm</h2>
          <p>Putem colecta următoarele tipuri de informații personale:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Informații de contact: nume, adresă de livrare, număr de telefon, adresă de email</li>
            <li>Informații despre comenzi: produsele comandate, data și ora comenzii, preferințe</li>
            <li>Informații de plată: Nu stocăm datele complete ale cardurilor de credit/debit</li>
            <li>Informații tehnice: adresă IP, browser web, sistem de operare, date despre utilizarea site-ului</li>
            <li>Informații de marketing: preferințele dumneavoastră în ceea ce privește primirea comunicărilor de marketing</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">3. Cum folosim informațiile</h2>
          <p>Folosim informațiile pe care le colectăm pentru:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>A procesa și livra comenzile dumneavoastră</li>
            <li>A vă contacta în legătură cu comenzile, întrebările sau reclamațiile</li>
            <li>A îmbunătăți site-ul nostru, produsele și serviciile</li>
            <li>A vă trimite informații despre promoții sau oferte speciale (doar cu acordul dumneavoastră)</li>
            <li>A respecta obligațiile legale și reglementările în vigoare</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">4. Divulgarea informațiilor</h2>
          <p>Putem partaja informațiile dumneavoastră personale cu:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Furnizorii de servicii care ne ajută să operăm afacerea (procesatori de plăți, servicii de livrare)</li>
            <li>Parteneri de afaceri (cum ar fi platformele de comenzi online: Bolt Food, Tazz, Glovo, Takeaway)</li>
            <li>Autorități publice, când legea o impune</li>
          </ul>
          <p>
            Nu vom vinde, închiria sau distribui informațiile dumneavoastră personale unor terțe părți 
            fără consimțământul dumneavoastră, cu excepția cazurilor prevăzute în această politică.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">5. Cookie-uri și tehnologii similare</h2>
          <p>
            Site-ul nostru poate utiliza cookie-uri și tehnologii similare pentru a îmbunătăți experiența utilizatorului, 
            a analiza traficul și a personaliza conținutul. Puteți controla utilizarea cookie-urilor prin setările browserului dumneavoastră.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">6. Drepturile dumneavoastră</h2>
          <p>În conformitate cu Regulamentul General privind Protecția Datelor (GDPR), aveți următoarele drepturi:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Dreptul de acces la datele personale</li>
            <li>Dreptul la rectificarea datelor incorecte</li>
            <li>Dreptul la ștergerea datelor ("dreptul de a fi uitat")</li>
            <li>Dreptul la restricționarea prelucrării</li>
            <li>Dreptul la portabilitatea datelor</li>
            <li>Dreptul de a obiecta la prelucrarea datelor</li>
            <li>Dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrarea automată</li>
          </ul>
          <p>
            Pentru a vă exercita aceste drepturi, vă rugăm să ne contactați utilizând informațiile de contact de la sfârșitul acestei politici.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">7. Securitatea datelor</h2>
          <p>
            Implementăm măsuri tehnice și organizaționale adecvate pentru a proteja datele dumneavoastră personale împotriva 
            pierderii, utilizării neautorizate sau dezvăluirii. Cu toate acestea, nicio metodă de transmitere sau 
            stocare electronică nu este 100% sigură.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">8. Retenția datelor</h2>
          <p>
            Păstrăm datele dumneavoastră personale atât timp cât este necesar pentru a vă furniza serviciile solicitate 
            și pentru a respecta obligațiile legale. Perioada de păstrare poate varia în funcție de tipul informațiilor și cerințele legale.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">9. Modificări la această politică</h2>
          <p>
            Putem actualiza această politică de confidențialitate periodic pentru a reflecta schimbările din practicile noastre 
            sau din obligațiile legale. Vă încurajăm să revizuiți periodic această politică. Data ultimei actualizări 
            este indicată la începutul acestei politici.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">10. Contact</h2>
          <p>
            Dacă aveți întrebări sau preocupări cu privire la această politică de confidențialitate sau la modul în care 
            prelucrăm datele dumneavoastră personale, vă rugăm să ne contactați la:
          </p>
          <p className="mt-4">
            <strong>TAIJI FAST FOOD S.R.L.</strong><br />
            Strada Telița, Nr. 54, București, Sector 5, România<br />
            Email: taijifastfoodchinezesc@gmail.com<br />
            Telefon: 0774605402
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
