import Link from "next/link";

export default function AreaSociosPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-10 text-center">
          <div className="w-14 h-14 bg-[#465FCB] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl">
            🔒
          </div>
          <h1 className="text-2xl font-bold text-[#1A1A1A] mb-3">Área de Socios</h1>
          <p className="text-[#7A7A7A] text-sm mb-8 leading-relaxed">
            Esta sección es exclusiva para empresas asociadas a CIPIBIC. Ingresá con tus credenciales para acceder a directorios, financiamiento y más.
          </p>

          <div className="space-y-3">
            <button className="w-full py-3 bg-[#465FCB] text-white font-semibold rounded-md hover:bg-[#3a4fb5] transition-colors">
              Iniciar sesión
            </button>
            <p className="text-xs text-[#7A7A7A]">
              ¿No tenés acceso?{" "}
              <Link href="/contacto" className="text-[#465FCB] hover:underline">
                Contactanos
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
