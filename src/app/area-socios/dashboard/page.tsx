import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const servicios = [
  { titulo: "Directorio de empresas", desc: "Empresas socias, productos ofrecidos, insumos requeridos y contactos comerciales.", icono: "🏭" },
  { titulo: "Líneas de financiamiento", desc: "Información actualizada sobre líneas de financiamiento bancario.", icono: "💰" },
  { titulo: "Informe de Situación Sectorial", desc: "Análisis y estadísticas del sector de bienes de capital.", icono: "📊" },
  { titulo: "Cómo exportar", desc: "Aspectos estratégicos, operativos y normativos para exportar.", icono: "🌎" },
  { titulo: "Directorio minero", desc: "Operadoras y proyectos mineros en Argentina.", icono: "⛏️" },
  { titulo: "Directorio de EPCistas", desc: "Empresas de ingeniería, procura y construcción.", icono: "🔧" },
  { titulo: "Energía eléctrica", desc: "Directorio de generación, transporte y distribución.", icono: "⚡" },
  { titulo: "Industria láctea", desc: "Directorio de empresas del sector lácteo.", icono: "🥛" },
  { titulo: "Industria farmacéutica", desc: "Farmacéutica, cosmética, sanidad animal y química.", icono: "💊" },
  { titulo: "Industria hidrocarburífera", desc: "Directorio de la industria del petróleo y gas.", icono: "🛢️" },
];

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <>
      <section className="bg-[#465FCB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6EC1E4] text-sm font-semibold uppercase tracking-widest mb-1">Área exclusiva</p>
              <h1 className="text-2xl font-bold">
                Bienvenido, {user?.firstName ?? "socio"}
              </h1>
            </div>
            <UserButton />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-lg font-bold text-[#1A1A1A] mb-6">Servicios disponibles</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicios.map((s) => (
            <div
              key={s.titulo}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#6EC1E4] hover:shadow-sm transition-all cursor-pointer"
            >
              <span className="text-2xl mb-3 block">{s.icono}</span>
              <h3 className="font-bold text-[#1A1A1A] mb-1 text-sm">{s.titulo}</h3>
              <p className="text-[#7A7A7A] text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[#7A7A7A] text-sm mb-3">¿Necesitás ayuda o información adicional?</p>
          <Link
            href="/contacto"
            className="inline-block px-6 py-2 border border-[#465FCB] text-[#465FCB] rounded-md text-sm font-medium hover:bg-[#465FCB] hover:text-white transition-colors"
          >
            Contactar a CIPIBIC
          </Link>
        </div>
      </section>
    </>
  );
}
