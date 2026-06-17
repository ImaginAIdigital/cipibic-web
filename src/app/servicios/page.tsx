import Link from "next/link";

const serviciosGenerales = [
  {
    title: "Representación gremial",
    desc: "Gestión de los intereses sectoriales ante organismos públicos, ministerios y entidades reguladoras.",
  },
  {
    title: "Oportunidades comerciales",
    desc: "Identificación y difusión de licitaciones, proyectos y demandas del sector público y privado.",
  },
  {
    title: "Asesoramiento tributario y aduanero",
    desc: "Información actualizada sobre regímenes fiscales, arancelarios y de promoción industrial.",
  },
  {
    title: "Defensa comercial",
    desc: "Protección frente a prácticas desleales de comercio y competencia desleal importada.",
  },
  {
    title: "Vinculación institucional",
    desc: "Participación en consejos público-privados, mesas sectoriales y organismos nacionales e internacionales.",
  },
  {
    title: "Clusters y proyectos asociativos",
    desc: "Articulación entre empresas para proyectos conjuntos en energías renovables, bioeconomía, minería y más.",
  },
];

const serviciosSocios = [
  "Directorio de empresas socias",
  "Directorio de productos y capacidades",
  "Líneas de financiamiento actualizadas",
  "Información de exportación y mercados externos",
  "Proyectos mineros en licitación",
  "Operadoras energéticas y sus demandas",
  "Industria láctea — equipos y proveedores",
  "Industria farmacéutica — normativa y oportunidades",
  "Industria petrolera — proyectos y contratos",
  "Boletines y documentos técnicos exclusivos",
];

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-[#465FCB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-[#6EC1E4] text-sm font-semibold uppercase tracking-widest mb-3">Lo que hacemos</p>
          <h1 className="text-4xl font-bold mb-4">Servicios</h1>
          <p className="text-blue-100 max-w-2xl">
            CIPIBIC ofrece servicios institucionales para todos sus asociados, más un área exclusiva con herramientas de inteligencia sectorial.
          </p>
        </div>
      </section>

      {/* Servicios generales */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-2">Servicios para asociados</h2>
        <p className="text-[#7A7A7A] mb-10">Disponibles para todas las empresas socias de CIPIBIC.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviciosGenerales.map((s) => (
            <div key={s.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-[#1A1A1A] mb-2">{s.title}</h3>
              <p className="text-[#7A7A7A] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios exclusivos */}
      <section className="bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-1/3">
              <p className="text-[#6EC1E4] text-sm font-semibold uppercase tracking-widest mb-3">Acceso restringido</p>
              <h2 className="text-2xl font-bold text-white mb-4">Servicios exclusivos para socios</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                El área de socios concentra información estratégica actualizada: directorios, financiamiento, exportaciones y oportunidades de negocio.
              </p>
              <Link
                href="/area-socios"
                className="inline-block px-6 py-3 bg-[#6EC1E4] text-[#1A1A1A] font-bold rounded-md hover:bg-[#5ab0d3] transition-colors"
              >
                Ingresar al área de socios
              </Link>
            </div>
            <div className="lg:w-2/3 grid sm:grid-cols-2 gap-3">
              {serviciosSocios.map((s) => (
                <div
                  key={s}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-3"
                >
                  <span className="text-[#6EC1E4] text-lg">🔒</span>
                  <span className="text-gray-300 text-sm">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
