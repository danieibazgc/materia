import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

const navLinks = [
  { id: "catalogo", label: "Catálogo", href: "#categorias", active: true },
  { id: "tablero", label: "Tablero de búsqueda", href: "#tablero", active: false },
  { id: "proveedores", label: "Para proveedores", href: "#proveedor-cta", active: false },
  { id: "blog", label: "Blog", href: "#", active: false },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 h-14 w-full flex items-center border-b border-gray-200 z-50">
      <div className="flex justify-between items-center px-4 md:px-10 max-w-[1440px] mx-auto w-full">
        <a
          href="#"
          className="text-2xl font-bold text-gray-900 tracking-tight"
        >
          materi<span className="text-brand">a</span>
        </a>

        <ul className="hidden md:flex gap-6 items-center text-sm text-gray-500">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={`transition-colors duration-200 hover:text-brand ${
                  link.active
                    ? "text-brand font-medium border-b-2 border-brand py-4"
                    : ""
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="text-sm text-gray-500 hover:text-brand transition-colors font-medium"
          >
            Iniciar sesión
          </a>
          <Button variant="primary" size="md">
            Registrarme
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden text-gray-500 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute top-14 left-0 w-full bg-white border-b border-gray-200 md:hidden shadow-lg">
          <ul className="flex flex-col p-4 gap-3 text-sm text-gray-500">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`block py-2 transition-colors hover:text-brand ${
                    link.active ? "text-brand font-medium" : ""
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 p-4 border-t border-gray-100">
            <Button variant="outline" size="md" className="w-full">
              Iniciar sesión
            </Button>
            <Button variant="primary" size="md" className="w-full">
              Registrarme
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
