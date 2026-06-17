import Link from "next/link";

const stats = [
  { value: "5.700+", label: "empresas en el sector" },
  { value: "100.000", label: "empleos directos" },
  { value: "8,6%", label: "del empleo industrial" },
];

const clusters = [
  { name: "CEPLAM", desc: "Maquinaria para producción de alimentos", href: "/clusters/ceplam" },
  { name: "CITERA", desc: "Tecnología para energías renovables", href: "/clusters/citera" },
  { name: "Cluster Eólico", desc: "Industria del viento en Argentina", href: "/clusters/eolico" },
  { name: "Gas y Petróleo", desc: "Equipamiento para la industria energética", href: "/clusters/gas-petroleo" },
  { name: "Transición Energética", desc: "Soluciones para la transformación del sector", href: "/clusters/transicion-energetica" },
  { name: "Bioeconomía", desc: "Agroindustria y biorrefinerías", href: "/clusters/bioeconomia" },
  { name: "Maquinaria para Alimentos", desc: "Equipos para la industria alimenticia", href: "/clusters/alimentos" },
  { name: "CLIMAR", desc: "Climatización y refrigeración industrial", href: "/clusters/climar" },
];


export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#465FCB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-[#6EC1E4] text-sm font-semibold uppercase tracking-widest mb-4">
              Cámara Empresaria Argentina
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Bienes de Capital para la industria argentina
            </h1>
            <p className="text-blue-100 text-lg leading-relaxed mb-8 max-w-2xl">
              CIPIBIC agrupa a los fabricantes de maquinaria especial, plantas llave en mano y
              soluciones tecnológicas para los principales sectores industriales del país.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/servicios"
                className="px-6 py-3 bg-white text-[#465FCB] font-semibold rounded-md hover:bg-blue-50 transition-colors"
              >
                Nuestros servicios
              </Link>
              <Link
                href="/contacto"
                className="px-6 py-3 border border-white/40 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
              >
                Contactarnos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#6EC1E4]/10 border-y border-[#6EC1E4]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-[#465FCB]">{s.value}</p>
                <p className="text-[#54595F] mt-1 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiénes somos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl space-y-5 text-[#7A7A7A] leading-relaxed">
          <p>
            La Cámara de Industriales de Proyectos e Ingeniería de Bienes de Capital – CIPIBIC es una entidad gremial empresaria que agrupa a los fabricantes de Bienes de Capital especiales, creadores de tecnología que desarrollan productos con diseño propio y especialmente adaptados a las necesidades del usuario. Estos productos pueden ser muy diferentes, pero tienen algo en común: un alto valor agregado, ingeniería y tecnología, y donde la utilización de recursos humanos calificados es determinante.
          </p>
          <p>
            Los Bienes de Capital son bienes duraderos que sirven para fabricar otros bienes o generar servicios.
          </p>
          <p>
            Una fábrica de Bienes de Capital es en definitiva una <strong className="text-[#1A1A1A]">FÁBRICA DE FÁBRICAS</strong>, donde se pueden producir los equipos y maquinarias para todo tipo de manufacturas y procesos.
          </p>
          <p>
            El sector de fabricantes nacionales de bienes de capital es muy heterogéneo, agrupa a más de 5.700 empresas argentinas, entre ellas el 98% corresponden a la categoría de PyMEs. El sector genera más de 100.000 puestos de trabajo directos, lo que representa el 8,6% de los puestos de trabajo industriales y el 39% del empleo metalúrgico. El sector de bienes de capital demanda mano de obra calificada, con sueldos en promedio en un 35% por encima del sector manufacturero, y de casi el 50% versus el promedio general de la economía. Además, las empresas que fabrican maquinaria y equipos destinan un 2,9% de su empleo a la realización de actividades de innovación, superando ampliamente el promedio metalúrgico que destina el 2,3% de su empleo a dichas actividades.
          </p>
          <p>
            Dentro de este universo CIPIBIC agrupa a empresas de capital nacional, fabricantes de bienes de capital con alto valor agregado en ingeniería y tecnología. Somos un sector que forma y demanda empleo de alta calificación, tradicionalmente exportador. Estas empresas son proveedoras de maquinaria y equipos especiales, plantas llave en mano y soluciones tecnológicas para diversos sectores como la industria alimenticia, química y farmacéutica, minera y energética; en esta última nuestros socios aportan soluciones para la industria de gas y petróleo, energías nuclear e hidroeléctrica, y entre las renovables eólica, solar y bioenergías entre otras, además de transmisión y distribución de la energía eléctrica.
          </p>
          <div className="pt-2">
            <Link href="/autoridades" className="text-[#465FCB] font-semibold text-sm hover:underline">
              Conocer más sobre la cámara →
            </Link>
          </div>
        </div>
      </section>

      {/* Clusters */}
      <section className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <p className="text-[#6EC1E4] text-sm font-semibold uppercase tracking-widest mb-3">Iniciativas sectoriales</p>
            <h2 className="text-3xl font-bold text-[#1A1A1A]">Clusters y programas temáticos</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {clusters.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="bg-white rounded-lg border border-gray-200 p-5 hover:border-[#6EC1E4] hover:shadow-md transition-all group"
              >
                <h3 className="font-bold text-[#1A1A1A] group-hover:text-[#465FCB] transition-colors mb-2">
                  {c.name}
                </h3>
                <p className="text-[#7A7A7A] text-sm leading-relaxed">{c.desc}</p>
                <span className="inline-block mt-3 text-[#465FCB] text-xs font-semibold">
                  Ver más →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Accesos rápidos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Noticias", href: "/noticias" },
            { label: "Mapa Capacidades Industriales", href: "/mapa-capacidades" },
            { label: "Documentos", href: "/documentos" },
            { label: "Boletines", href: "/boletines" },
            { label: "Eventos", href: "/eventos" },
            { label: "25 Años CIPIBIC: Transición Energética y Bioeconomía", href: "/25-anios" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-4 py-2 border border-[#465FCB]/30 text-[#465FCB] text-sm font-medium rounded-md hover:bg-[#465FCB] hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Socios */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-[#1A1A1A] rounded-2xl p-10 lg:p-14 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3">
              ¿Sos socio de CIPIBIC?
            </h2>
            <p className="text-gray-400 max-w-lg">
              Accedé al área exclusiva: directorios, líneas de financiamiento, información de exportación y más herramientas para tu empresa.
            </p>
          </div>
          <Link
            href="/area-socios"
            className="shrink-0 px-8 py-3 bg-[#6EC1E4] text-[#1A1A1A] font-bold rounded-md hover:bg-[#5ab0d3] transition-colors"
          >
            Ingresar al área de socios
          </Link>
        </div>
      </section>
    </>
  );
}
