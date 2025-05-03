
import React from "react";
import { Helmet } from "react-helmet";

const TermsAndConditionsPage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <Helmet>
        <title>Termeni și Condiții - Taiji Fast Food Chinezesc</title>
        <meta name="description" content="Termenii și condițiile pentru restaurantul Taiji Fast Food Chinezesc" />
      </Helmet>

      <h1 className="text-3xl font-bold text-center text-chinese-red mb-8">Termeni și Condiții</h1>

      <div className="prose prose-lg max-w-4xl mx-auto">
        <p className="mb-4">
          <strong>Data ultimei actualizări:</strong> {new Date().toLocaleDateString('ro-RO')}
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">1. Introducere</h2>
          <p>
            Acești Termeni și Condiții guvernează utilizarea site-ului web operat de TAIJI FAST FOOD S.R.L. 
            („noi", „nostru" sau „compania"), precum și serviciile oferite de restaurantul nostru Taiji Fast Food Chinezesc.
          </p>
          <p>
            Prin accesarea site-ului nostru și utilizarea serviciilor noastre, sunteți de acord cu acești Termeni și Condiții în 
            întregime. Dacă nu sunteți de acord cu acești Termeni și Condiții sau cu oricare dintre părțile lor, 
            nu trebuie să utilizați site-ul nostru sau serviciile noastre.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">2. Utilizarea site-ului</h2>
          <p>
            Site-ul nostru vă permite să explorați meniul restaurantului nostru, să aflați informații despre noi și să 
            ne contactați pentru comenzi sau întrebări. Vă angajați să utilizați site-ul nostru doar în scopuri legale 
            și într-un mod care să nu încalce drepturile niciunei terțe părți și să nu restricționeze sau împiedice 
            utilizarea și beneficiul site-ului de către orice terță parte.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">3. Comenzi și livrări</h2>
          <p>
            Comenzile pot fi plasate telefonic sau prin platformele de comenzi online partenere (Bolt Food, Tazz, Glovo, Takeaway). 
            Ne rezervăm dreptul de a refuza sau anula orice comandă din motive justificate, cum ar fi erori de preț, 
            indisponibilitatea produselor sau suspiciuni de fraudă.
          </p>
          <p>
            Informațiile despre prețuri, timpul de preparare și livrare sunt orientative și pot varia în funcție de 
            o serie de factori, inclusiv volumul de comenzi, condițiile meteorologice și de trafic.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">4. Proprietate intelectuală</h2>
          <p>
            Toate drepturile de proprietate intelectuală asupra conținutului site-ului nostru, inclusiv dar fără a se 
            limita la text, grafică, logo-uri, imagini, înregistrări audio, înregistrări video și software, sunt deținute 
            de noi sau de licențiatorii noștri. Aceste materiale sunt protejate de legile privind drepturile de autor 
            și de alte legi și tratate privind proprietatea intelectuală din întreaga lume.
          </p>
          <p>
            Este strict interzisă reproducerea, distribuirea, modificarea sau utilizarea în orice alt mod a conținutului 
            site-ului nostru fără permisiunea noastră prealabilă scrisă.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">5. Limitarea răspunderii</h2>
          <p>
            În măsura permisă de lege, excludem toate reprezentările, garanțiile și condițiile referitoare la site-ul 
            nostru și la utilizarea acestui site-ului. Nu suntem răspunzători pentru pierderi sau daune cauzate de o 
            virus, atac de refuz distribuit al serviciului sau alt material tehnologic dăunător care poate infecta 
            echipamentul dvs. computer, programele computerului, date sau alt material proprietar din cauza utilizării 
            site-ului nostru.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">6. Informații despre alergeni</h2>
          <p>
            Facem toate eforturile pentru a furniza informații precise despre ingredientele și alergenii din produsele 
            noastre. Cu toate acestea, procesele noastre de preparare pot implica contaminare încrucișată, așadar vă 
            recomandăm să ne contactați direct pentru informații detaliate dacă suferiți de alergii sau intoleranțe alimentare.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">7. Modificarea acestor termeni</h2>
          <p>
            Ne rezervăm dreptul de a modifica acești Termeni și Condiții în orice moment. Modificările vor fi efective 
            imediat ce sunt postate pe site-ul nostru. Utilizarea continuă a site-ului nostru după postarea modificărilor 
            va constitui acceptarea dvs. a acestor modificări.
          </p>
          <p>
            Vă recomandăm să verificați periodic acești Termeni și Condiții pentru a vă asigura că înțelegeți termenii 
            care se aplică utilizării site-ului nostru și serviciilor noastre.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">8. Legea aplicabilă</h2>
          <p>
            Acești Termeni și Condiții sunt guvernați și interpretați în conformitate cu legile din România, iar orice 
            litigii legate de acești Termeni și Condiții vor fi supuse jurisdicției exclusive a instanțelor din România.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-chinese-red mb-4">9. Contact</h2>
          <p>
            Dacă aveți întrebări sau preocupări cu privire la acești Termeni și Condiții, vă rugăm să ne contactați la:
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

export default TermsAndConditionsPage;
