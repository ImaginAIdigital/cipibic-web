export default function ContactoPage() {
  return (
    <>
      <section className="bg-[#465FCB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-[#6EC1E4] text-sm font-semibold uppercase tracking-widest mb-3">Escribinos</p>
          <h1 className="text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-blue-100 max-w-xl">
            Estamos disponibles para consultas institucionales, solicitudes de asociación y cualquier información sobre el sector.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Formulario */}
          <div>
            <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">Envianos un mensaje</h2>
            <form className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#54595F] mb-1">Nombre</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#465FCB] focus:ring-1 focus:ring-[#465FCB] transition"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#54595F] mb-1">Empresa</label>
                  <input
                    type="text"
                    className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#465FCB] focus:ring-1 focus:ring-[#465FCB] transition"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#54595F] mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#465FCB] focus:ring-1 focus:ring-[#465FCB] transition"
                  placeholder="tu@empresa.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#54595F] mb-1">Asunto</label>
                <select className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#465FCB] focus:ring-1 focus:ring-[#465FCB] transition text-[#54595F]">
                  <option value="">Seleccioná un tema</option>
                  <option>Consulta sobre asociación</option>
                  <option>Información institucional</option>
                  <option>Oportunidades comerciales</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-[#54595F] mb-1">Mensaje</label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-200 rounded-md px-4 py-2.5 text-sm focus:outline-none focus:border-[#465FCB] focus:ring-1 focus:ring-[#465FCB] transition resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-[#465FCB] text-white font-semibold rounded-md hover:bg-[#3a4fb5] transition-colors"
              >
                Enviar mensaje
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">Información de contacto</h2>
              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#6EC1E4]/15 rounded-lg flex items-center justify-center shrink-0 text-[#465FCB]">
                    📍
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm mb-1">Dirección</p>
                    <p className="text-[#7A7A7A] text-sm">Alsina 1609, Piso 5° Of. 16<br />C1088AAO — Ciudad de Buenos Aires</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#6EC1E4]/15 rounded-lg flex items-center justify-center shrink-0 text-[#465FCB]">
                    📞
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm mb-1">Teléfono</p>
                    <a href="tel:+541143128077" className="text-[#465FCB] text-sm hover:underline">
                      +54 11 4312-8077
                    </a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-[#6EC1E4]/15 rounded-lg flex items-center justify-center shrink-0 text-[#465FCB]">
                    ✉️
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A] text-sm mb-1">Email</p>
                    <a href="mailto:info@cipibicargentina.org.ar" className="text-[#465FCB] text-sm hover:underline">
                      info@cipibicargentina.org.ar
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#6EC1E4]/10 border border-[#6EC1E4]/25 rounded-xl p-6">
              <h3 className="font-bold text-[#1A1A1A] mb-2">¿Querés ser socio?</h3>
              <p className="text-[#7A7A7A] text-sm mb-4">
                Si tu empresa fabrica bienes de capital y querés formar parte de la cámara, escribinos y te contamos los beneficios.
              </p>
              <a
                href="mailto:info@cipibicargentina.org.ar?subject=Solicitud de asociación"
                className="text-[#465FCB] text-sm font-semibold hover:underline"
              >
                Consultar sobre membresía →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
