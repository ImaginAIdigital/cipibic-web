import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Identidad */}
          <div>
            <div className="mb-4">
              <span className="text-[#6EC1E4] font-bold text-2xl tracking-tight">CIPIBIC</span>
              <p className="text-gray-400 text-xs mt-1 uppercase tracking-wide">Argentina</p>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Cámara de Industriales de Proyectos e Ingeniería de Bienes de Capital de la República Argentina.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300 mb-4">Secciones</h4>
            <ul className="space-y-2">
              {[
                ["Autoridades", "/autoridades"],
                ["Productos", "/productos"],
                ["Servicios", "/servicios"],
                ["Socios Directos", "/socios/directos"],
                ["Instituciones Vinculadas", "/instituciones"],
                ["Contacto", "/contacto"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-gray-400 text-sm hover:text-[#6EC1E4] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300 mb-4">Contacto</h4>
            <address className="not-italic text-gray-400 text-sm space-y-2">
              <p>Alsina 1609, Piso 5° Of. 16<br />C1088AAO — Buenos Aires</p>
              <p>
                <a href="tel:+541143128077" className="hover:text-[#6EC1E4] transition-colors">
                  +54 11 4312-8077
                </a>
              </p>
              <p>
                <a href="mailto:info@cipibicargentina.org.ar" className="hover:text-[#6EC1E4] transition-colors">
                  info@cipibicargentina.org.ar
                </a>
              </p>
            </address>

            {/* Redes */}
            <div className="flex gap-3 mt-5">
              {[
                { label: "LinkedIn", href: "https://linkedin.com/company/cipibic" },
                { label: "Twitter", href: "https://twitter.com/cipibic" },
                { label: "YouTube", href: "https://youtube.com/@cipibic" },
                { label: "Instagram", href: "https://instagram.com/cipibic" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-[#6EC1E4] text-xs font-medium transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-600 text-xs">
          © {new Date().getFullYear()} CIPIBIC Argentina. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
