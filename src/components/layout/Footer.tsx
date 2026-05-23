const footerLinksPlatform = [
  { id: "ft-catalogo", label: "Catálogo", href: "#categorias" },
  { id: "ft-tablero", label: "Tablero", href: "#tablero" },
  { id: "ft-trazabilidad", label: "Trazabilidad", href: "#trazabilidad" },
  { id: "ft-planes", label: "Planes", href: "#planes" },
];

const footerLinksCompany = [
  { id: "ft-nosotros", label: "Sobre nosotros", href: "#" },
  { id: "ft-blog", label: "Blog", href: "#" },
  { id: "ft-contacto", label: "Contacto", href: "#" },
  { id: "ft-proveedores", label: "Para proveedores", href: "#proveedor-cta" },
];

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-12 w-full">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-10 max-w-[1440px] mx-auto">
        <div className="col-span-2 md:col-span-1 mb-8 md:mb-0">
          <a
            href="#"
            className="text-2xl font-bold text-gray-900 tracking-tight block mb-4"
          >
            materi<span className="text-brand">a</span>
          </a>
          <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
            Sostenibilidad industrial y refinamiento editorial. Conectando
            excedentes textiles con diseño consciente.
          </p>
        </div>

        <div>
          <h5 className="text-sm font-medium text-gray-900 mb-4">Plataforma</h5>
          <ul className="space-y-3 text-sm">
            {footerLinksPlatform.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-gray-500 hover:text-brand hover:underline transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-medium text-gray-900 mb-4">Empresa</h5>
          <ul className="space-y-3 text-sm">
            {footerLinksCompany.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-gray-500 hover:text-brand hover:underline transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-4 md:px-10 max-w-[1440px] mx-auto mt-12 pt-8 border-t border-gray-200">
        <p className="text-xs text-gray-300 text-center md:text-left">
          © 2024 Materia. Sostenibilidad industrial y refinamiento editorial.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
