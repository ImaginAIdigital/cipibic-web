export default function AutoridadesPage() {
  return (
    <>
      <section className="bg-[#465FCB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-[#6EC1E4] text-sm font-semibold uppercase tracking-widest mb-3">La cámara</p>
          <h1 className="text-4xl font-bold mb-4">Autoridades</h1>
          <p className="text-blue-100 max-w-2xl">
            CIPIBIC es conducida por representantes elegidos por las empresas socias para defender los intereses del sector de bienes de capital.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Misión */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-2xl font-bold text-[#1A1A1A] mb-5">Nuestra misión</h2>
          <p className="text-[#7A7A7A] leading-relaxed mb-4">
            CIPIBIC es una entidad gremial empresaria que agrupa a los fabricantes de Bienes de Capital especiales de la República Argentina. Representa a más de 5.700 empresas del sector, que generan más de 100.000 empleos directos y representan el 8,6% del empleo industrial del país.
          </p>
          <p className="text-[#7A7A7A] leading-relaxed">
            La cámara trabaja para promover el desarrollo de la industria nacional de bienes de capital, defender los intereses de sus asociados ante el Estado y la comunidad, y fomentar la integración y el crecimiento del sector.
          </p>
        </div>

        {/* Placeholder autoridades */}
        <div className="bg-[#6EC1E4]/10 border border-[#6EC1E4]/25 rounded-2xl p-10 text-center">
          <p className="text-[#465FCB] font-semibold mb-2">Información en proceso de actualización</p>
          <p className="text-[#7A7A7A] text-sm">
            Los datos de las autoridades vigentes estarán disponibles próximamente.
          </p>
        </div>
      </section>
    </>
  );
}
