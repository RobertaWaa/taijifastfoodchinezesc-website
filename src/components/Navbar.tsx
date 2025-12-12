
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoTaiji from "@/assets/logo_taiji.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Închide meniul mobil când se schimbă ruta
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-95 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src={logoTaiji}
            alt="Taiji Restaurant Chinezesc Logo"
            className="h-16 w-16"
          />
          <span className={`font-bold text-lg ${isScrolled ? 'text-chinese-red' : 'text-chinese-red'}`}>
            Taiji Restaurant Chinezesc
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="/" active={location.pathname === "/"}>
            Acasă
          </NavLink>
          <NavLink href="/meniu" active={location.pathname === "/meniu"}>
            Meniu
          </NavLink>
          <NavLink href="/contact" active={location.pathname === "/contact"}>
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="text-chinese-red"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col items-center py-4 space-y-4">
            <NavLink href="/" active={location.pathname === "/"}>
              Acasă
            </NavLink>
            <NavLink href="/meniu" active={location.pathname === "/meniu"}>
              Meniu
            </NavLink>
            <NavLink href="/contact" active={location.pathname === "/contact"}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  active,
  children,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
}) => {
  return (
    <Link
      to={href}
      className={`font-medium text-lg transition-colors hover:text-chinese-red relative ${
        active ? "text-chinese-red" : "text-gray-800"
      }`}
    >
      {children}
      {active && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-chinese-gold" />
      )}
    </Link>
  );
};

export default Navbar;
