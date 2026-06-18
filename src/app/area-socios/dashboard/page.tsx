import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LogoutButton from "./LogoutButton";
import Link from "next/link";

const servicios = [
  { titulo: "Directorio de empresas", desc: "Empresas socias, productos ofrecidos, insumos requeridos y contactos comerciales.", icono: "🏭", disponible: true },
  { titulo: "Líneas de financiamiento", desc: "Información actualizada sobre líneas de financiamiento bancario.", icono: "💰", disponible: true },
  { titulo: "Informe de Situación Sectorial", desc: "Análisis y estadísticas del sector de bienes de capital.", icono: "📊", disponible: true },
  { titulo: "Cómo exportar", desc: "Aspectos estratégicos, operativos y normativos para exportar.", icono: "🌎", disponible: false },
  { titulo: "Directorio minero", desc: "Operadoras y proyectos mineros en Argentina.", icono: "⛏️", disponible: false },
  { titulo: "Directorio de EPCistas", desc: "Empresas de ingeniería, procura y construcción.", icono: "🔧", disponible: false },
  { titulo: "Energía eléctrica", desc: "Directorio de generación, transporte y distribución.", icono: "⚡", disponible: false },
  { titulo: "Industria láctea", desc: "Directorio de empresas del sector lácteo.", icono: "🥛", disponible: false },
  { titulo: "Industria farmacéutica", desc: "Farmacéutica, cosmética, sanidad animal y química.", icono: "💊", disponible: false },
  { titulo: "Industria hidrocarburífera", desc: "Directorio de la industria del petróleo y gas.", icono: "🛢️", disponible: false },
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/area-socios");

  return (
    <>
      <section className="bg-[#465FCB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#6EC1E4] text-sm font-semibold uppercase tracking-widest mb-1">Área exclusiva para socios</p>
              <h1 className="text-2xl font-bold">Bienvenido</h1>
              <p className="text-blue-200 text-sm mt-1">{user.email}</p>
            </div>
            <LogoutButton />
          </div>
        </div>
      </section>

      <div className="bg-[#6EC1E4]/10 border-b border-[#6EC1E4]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-[#465FCB] text-sm">✅ Acceso verificado — Estás en el área exclusiva de socios CIPIBIC.</p>
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <h2 className="text-lg font-bold text-[#1A1A1A] mb-1">Servicios disponibles</h2>
          <p className="text-[#7A7A7A] text-sm mb-6">Accedé a la información exclusiva para empresas asociadas.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicios.filter(s => s.disponible).map((s) => (
              <div key={s.titulo} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#465FCB] hover:shadow-md transition-all cursor-pointer group">
                <span className="text-2xl mb-3 block">{s.icono}</span>
                <h3 className="font-bold text-[#1A1A1A] group-hover:text-[#465FCB] transition-colors mb-1 text-sm">{s.titulo}</h3>
                <p className="text-[#7A7A7A] text-xs leading-relaxed">{s.desc}</p>
                <span className="inline-block mt-3 text-[#465FCB] text-xs font-semibold">Acceder →</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-[#1A1A1A] mb-1">Próximamente</h2>
          <p className="text-[#7A7A7A] text-sm mb-6">Estos directorios estarán disponibles en las próximas semanas.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {servicios.filter(s => !s.disponible).map((s) => (
              <div key={s.titulo} className="bg-gray-50 border border-gray-100 rounded-xl p-5 opacity-60">
                <span className="text-2xl mb-3 block">{s.icono}</span>
                <h3 className="font-bold text-[#54595F] mb-1 text-sm">{s.titulo}</h3>
                <p className="text-[#7A7A7A] text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-[#7A7A7A] text-sm mb-3">¿Necesitás información adicional?</p>
          <Link href="/contacto" className="inline-block px-6 py-2 border border-[#465FCB] text-[#465FCB] rounded-md text-sm font-medium hover:bg-[#465FCB] hover:text-white transition-colors">
            Contactar a CIPIBIC
          </Link>
        </div>
      </section>
    </>
  );
}
