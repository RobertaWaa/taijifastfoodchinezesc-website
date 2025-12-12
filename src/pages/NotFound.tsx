
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const NotFound = () => {
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      window.location.pathname
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Pagină negăsită | Taiji Restaurant Chinezesc</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 text-chinese-red">404</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pagina nu a fost găsită</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            Ne pare rău, dar pagina pe care o căutați nu există sau a fost mutată.
          </p>
          <Button asChild className="bg-chinese-red hover:bg-chinese-darkred">
            <Link to="/">Înapoi la pagina principală</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NotFound;
