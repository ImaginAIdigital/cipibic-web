const nacionales = [
  { name: "MAPA", full: "Maquinaria y Alimentos para el Planeta Agropecuario", href: "#" },
  { name: "ADIMRA", full: "Asociación de Industriales Metalúrgicos de la República Argentina", href: "#" },
];

const regionales = [
  { name: "CIMR", full: "Cámara Industrial Metalúrgica de Rafaela", href: "#" },
  { name: "CIME", full: "Cámara Industrial Metalúrgica de Esperanza", href: "#" },
  { name: "CAMSFE", full: "Cámara de la Industria Metalúrgica de Santa Fe", href: "#" },
];

const convenios = [
  { name: "INTI", full: "Instituto Nacional de Tecnología Industrial" },
  { name: "INTA", full: "Instituto Nacional de Tecnología Agropecuaria" },
  { name: "MinCyT", full: "Ministerio de Ciencia, Tecnología e Innovación" },
  { name: "UTN Santa Fe", full: "Universidad Tecnológica Nacional — Facultad Regional Santa Fe" },
  { name: "UTN Avellaneda", full: "Universidad Tecnológica Nacional — Facultad Regional Avellaneda" },
  { name: "UNAJ", full: "Universidad Nacional Arturo Jauretche" },
  { name: "UNGS", full: "Universidad Nacional de General Sarmiento" },
  { name: "UNQ", full: "Universidad Nacional de Quilmes" },
  { name: "CITERA", full: "Centro de Investigación en Tecnología para Energías Renovables Alternativas" },
  { name: "CEPLAM", full: "Centro de Empresas para la Producción de Plantas y Maquinaria" },
  { name: "Cluster Eólico", full: "Cluster Eólico Argentino" },
];

function InstitutionCard({ name, full, href }: { name: string; full: string; href?: string }) {
  const content = (
    <div className="border border-gray-200 rounded-xl p-5 hover:border-[#6EC1E4] hover:shadow-sm transition-all h-full">
      <p className="font-bold text-[#465FCB] text-lg mb-1">{name}</p>
      <p className="text-[#7A7A7A] text-sm leading-snug">{full}</p>
      {href && href !== "#" && (
        <span className="inline-block mt-3 text-xs text-[#465FCB] font-semibold">Visitar sitio →</span>
      )}
    </div>
  );
  return href && href !== "#" ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
  ) : (
    <div>{content}</div>
  );
}

export default function InstitucionesPage() {
  return (
    <>
      <section className="bg-[#465FCB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-[#6EC1E4] text-sm font-semibold uppercase tracking-widest mb-3">Red de alianzas</p>
          <h1 className="text-4xl font-bold mb-4">Instituciones Vinculadas</h1>
          <p className="text-blue-100 max-w-2xl">
            CIPIBIC trabaja en red con cámaras, organismos públicos, universidades e instituciones del sistema científico-tecnológico argentino.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        <div>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">Instituciones Nacionales</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {nacionales.map((i) => <InstitutionCard key={i.name} {...i} />)}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">Cámaras Regionales</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {regionales.map((i) => <InstitutionCard key={i.name} {...i} />)}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">Convenios de Colaboración</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {convenios.map((i) => <InstitutionCard key={i.name} {...i} />)}
          </div>
        </div>

      </div>
    </>
  );
}
