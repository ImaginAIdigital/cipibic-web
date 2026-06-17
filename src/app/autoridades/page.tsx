const comisionDirectiva = [
  { cargo: "Presidente", nombre: "Ing. Luis Manini", ubicacion: "Quilmes – Buenos Aires", empresa: "Secin S.A." },
  { cargo: "Vicepresidente 1°", nombre: "Ing. Jorge Stratta", ubicacion: "Monte Vera – Santa Fe", empresa: "Asema S.A." },
  { cargo: "Vicepresidente 2°", nombre: "Ing. Hugo Tagliatti", ubicacion: "El Trébol – Santa Fe", empresa: "Máximo Bauducco S.A." },
  { cargo: "Secretario", nombre: "Lic. Marcelo Miron", ubicacion: "Villa Martelli – Buenos Aires", empresa: "Electromecánica Brenta S.A." },
  { cargo: "Prosecretario", nombre: "Lic. Jorge Scian", ubicacion: "Esteban Echeverría – Buenos Aires", empresa: "TYC S.A." },
  { cargo: "Tesorero", nombre: "Ing. Ricardo Bernal Castro", ubicacion: "Ezeiza – Buenos Aires", empresa: "CONUAR S.A." },
  { cargo: "Protesorero", nombre: "Lic. Bernardo Sandaza", ubicacion: "Esperanza – Santa Fe", empresa: "FIMACO SA" },
];

const vocalesTitulares = [
  { nombre: "Ing. César Obregón", ubicacion: "Galvez – Santa Fe", empresa: "Tadeo Czerweny S.A." },
  { nombre: "Lic. Ivana Taborda", ubicacion: "Sauce Viejo – Santa Fe", empresa: "FACORSA S.A." },
];

const vocalesSuplentes = [
  { nombre: "Tec. Omar Volonte", ubicacion: "Esperanza – Santa Fe", empresa: "S.A. Lito Gonella E Hijo I.C.F.I." },
  { nombre: "Sr. Jorge Simonutti", ubicacion: "Esperanza – Santa Fe", empresa: "Sica Metalúrgica Arg. SA." },
  { nombre: "Sr. Manuel Romano", ubicacion: "Rosario – Santa Fe", empresa: "EMU S.A." },
  { nombre: "Cdor. Gastón Guarino", ubicacion: "Florencio Varela – Buenos Aires", empresa: "Metalúrgica Calviño S.A." },
];

const revsoraCuentas = [
  { cargo: "Síndico Titular", nombre: "Sr. Raúl Capano", ubicacion: "Llavallol – Buenos Aires", empresa: "Cetec Sudamericana S.A." },
];

const equipoTecnico = [
  { area: "Administración", nombre: "Tec. Sup. María Inés Olave", email: "admin@cipibicargentina.org.ar" },
  { area: "Comercio exterior", nombre: "Lic. Alejandra Cerquetella", email: "comex@cipibicargentina.org.ar" },
  { area: "Dirección Ejecutiva", nombre: "Ing. Rubén Fabrizio", email: "info@cipibicargentina.org.ar" },
];

function MemberRow({ cargo, nombre, ubicacion, empresa }: { cargo?: string; nombre: string; ubicacion: string; empresa: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 py-4 border-b border-gray-100 last:border-0">
      {cargo && <p className="text-sm font-semibold text-[#465FCB]">{cargo}</p>}
      <div className={cargo ? "" : "sm:col-start-2"}>
        <p className="font-medium text-[#1A1A1A] text-sm">{nombre}</p>
        <p className="text-[#7A7A7A] text-xs mt-0.5">{empresa}</p>
      </div>
      <p className="text-[#7A7A7A] text-sm">{ubicacion}</p>
    </div>
  );
}

export default function AutoridadesPage() {
  return (
    <>
      <section className="bg-[#465FCB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-[#6EC1E4] text-sm font-semibold uppercase tracking-widest mb-3">La cámara</p>
          <h1 className="text-4xl font-bold mb-4">Autoridades</h1>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-14">

        {/* Comisión Directiva */}
        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-1">Comisión Directiva 2024–2026</h2>
          <div className="mt-4">
            {comisionDirectiva.map((m) => (
              <MemberRow key={m.nombre} {...m} />
            ))}
          </div>
        </section>

        {/* Vocales Titulares */}
        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">Vocales Titulares</h2>
          <div>
            {vocalesTitulares.map((m) => (
              <MemberRow key={m.nombre} {...m} />
            ))}
          </div>
        </section>

        {/* Vocales Suplentes */}
        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">Vocales Suplentes</h2>
          <div>
            {vocalesSuplentes.map((m) => (
              <MemberRow key={m.nombre} {...m} />
            ))}
          </div>
        </section>

        {/* Comisión Revisora */}
        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-4">Comisión Revisora de Cuentas</h2>
          <div>
            {revsoraCuentas.map((m) => (
              <MemberRow key={m.nombre} {...m} />
            ))}
          </div>
        </section>

        {/* Equipo Técnico */}
        <section>
          <h2 className="text-xl font-bold text-[#1A1A1A] mb-6">Equipo Técnico</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {equipoTecnico.map((m) => (
              <div key={m.nombre} className="bg-gray-50 border border-gray-200 rounded-xl p-5">
                <p className="text-xs font-semibold text-[#6EC1E4] uppercase tracking-wide mb-2">{m.area}</p>
                <p className="font-semibold text-[#1A1A1A] text-sm mb-1">{m.nombre}</p>
                <a href={`mailto:${m.email}`} className="text-[#465FCB] text-xs hover:underline break-all">
                  {m.email}
                </a>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
