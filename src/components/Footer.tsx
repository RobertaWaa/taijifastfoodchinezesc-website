
import { Link } from "react-router-dom";
import { Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-chinese-darkred text-white">
      <div className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/public/lovable-uploads/d2978da2-974d-4ed5-b0c7-e386f8b3aec1.png"
                alt="Taiji Fast Food Chinezesc Logo"
                className="h-16 w-16 mr-3"
              />
              <h3 className="font-bold text-xl">Taiji Fast Food Chinezesc</h3>
            </div>
            <p className="text-gray-200 mb-4">
              Savurează autenticitatea bucătăriei chinezești în inima Bucureștiului.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61575975597791"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-chinese-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/taijifastfoodchinezesc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-chinese-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.tiktok.com/@taijifastfoodchinezesc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-chinese-gold transition-colors"
                aria-label="TikTok"
              >
                <svg 
                  width="24" 
                  height="24" 
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
          
          <div>
            <h4 className="font-bold text-lg mb-4 border-b border-chinese-gold pb-2">Program</h4>
            <p>Luni - Vineri: 20:00 - 23:00</p>
            <p>Sâmbătă - Duminică: 12:00 - 23:00</p>
            <div className="mt-4">
              <p className="flex items-center mb-2">
                <Phone size={18} className="mr-2" /> 0774605402
              </p>
              <p className="flex items-center">
                <Mail size={18} className="mr-2" /> taijifastfoodchinezesc@gmail.com
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 border-b border-chinese-gold pb-2">Navigare</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-chinese-gold transition-colors">Acasă</Link>
              </li>
              <li>
                <Link to="/meniu" className="hover:text-chinese-gold transition-colors">Meniu</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-chinese-gold transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/informatii-nutritionale" className="hover:text-chinese-gold transition-colors">
                  Informații nutriționale
                </Link>
              </li>
            </ul>
            <p className="flex items-center mt-4">
              <MapPin size={18} className="mr-2 flex-shrink-0" /> 
              <span>Strada Telița, Nr. 54, București, Sector 5, România</span>
            </p>
          </div>
        </div>
        
        <div className="border-t border-chinese-gold mt-8 pt-6">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <Link to="/politica-de-confidentialitate" className="text-sm text-gray-200 hover:text-chinese-gold transition-colors">
              Politica de confidențialitate
            </Link>
            <Link to="/termeni-si-conditii" className="text-sm text-gray-200 hover:text-chinese-gold transition-colors">
              Termeni și condiții
            </Link>
            <a 
              href="https://anpc.ro/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm text-gray-200 hover:text-chinese-gold transition-colors"
            >
              ANPC
            </a>
          </div>
          <p className="text-center">&copy; {currentYear} Taiji Fast Food Chinezesc. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
