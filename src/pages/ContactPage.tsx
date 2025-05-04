
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact | Taiji Fast Food Chinezesc</title>
        <meta
          name="description"
          content="Contactează restaurantul Taiji Fast Food Chinezesc. Află programul nostru, adresa, numărul de telefon și metodele de comandă online."
        />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-chinese-red text-center mb-8">
            Contact
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Informații de contact */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-chinese-red">Informații de contact</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-chinese-red p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Telefon</h3>
                    <p className="text-gray-700">
                      <a href="tel:0774605402" className="hover:text-chinese-red transition-colors">
                        0774 605 402
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-chinese-red p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-700">
                      <a 
                        href="mailto:taijifastfoodchinezesc@gmail.com" 
                        className="hover:text-chinese-red transition-colors"
                      >
                        taijifastfoodchinezesc@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-chinese-red p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Adresă</h3>
                    <p className="text-gray-700">
                      Strada Telița, Nr. 54, Bucuresti, Sector 5, Romania
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-lg mb-3">Program</h3>
                  <div className="flex flex-col space-y-2">
                    <p className="text-gray-700"><span className="font-medium">Luni - Vineri:</span> 20:00 - 23:00</p>
                    <p className="text-gray-700"><span className="font-medium">Sâmbătă - Duminică:</span> 12:00 - 23:00</p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-lg mb-3">Social Media</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61575975597791" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-chinese-red p-3 rounded-full text-white hover:bg-chinese-darkred transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.instagram.com/taijifastfoodchinezesc/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-chinese-red p-3 rounded-full text-white hover:bg-chinese-darkred transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://www.tiktok.com/@taijifastfoodchinezesc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-chinese-red p-3 rounded-full text-white hover:bg-chinese-darkred transition-colors"
                      aria-label="TikTok"
                    >
                      <svg 
                        width="20" 
                        height="20" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-current"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h2 className="text-2xl font-bold mb-6 text-chinese-red">Localizare</h2>
              <div className="aspect-video w-full h-[400px] rounded-lg overflow-hidden">
                <iframe
                  title="Google Maps Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.862043741538!2d26.089314776957912!3d44.40903147107173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff2a1681cc65%3A0x59a215e128a32574!2sStrada%20Teli%C8%9Ba%2054%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1682881234567!5m2!1sro!2sro"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="mt-4 text-gray-600">
                <p>
                  Ne puteți găsi ușor folosind Google Maps. Suntem localizați într-o zonă centrală, 
                  cu acces facil din orice parte a orașului.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
