export default function AutoridadesPage() {
  return (
    <>
      <section className="bg-[#465FCB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-[#6EC1E4] text-sm font-semibold uppercase tracking-widest mb-3">La cámara</p>
          <h1 className="text-4xl font-bold mb-4">Autoridades</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl space-y-6">
          <p className="text-[#7A7A7A] leading-relaxed">
            La Cámara de Industriales de Proyectos e Ingeniería de Bienes de Capital – CIPIBIC es una entidad gremial empresaria que agrupa a los fabricantes de Bienes de Capital especiales, creadores de tecnología que desarrollan productos con diseño propio y especialmente adaptados a las necesidades del usuario.
          </p>
          <p className="text-[#7A7A7A] leading-relaxed">
            Los Bienes de Capital son bienes duraderos que sirven para fabricar otros bienes o generar servicios.
          </p>
          <p className="text-[#7A7A7A] leading-relaxed">
            Una fábrica de Bienes de Capital es en definitiva una <strong className="text-[#1A1A1A]">FÁBRICA DE FÁBRICAS</strong>, donde se pueden producir los equipos y maquinarias para todo tipo de manufacturas y procesos.
          </p>

          <div className="grid sm:grid-cols-3 gap-6 py-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#465FCB]">5.700+</p>
              <p className="text-[#54595F] text-sm mt-1">empresas argentinas, 98% PyMEs</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#465FCB]">100.000</p>
              <p className="text-[#54595F] text-sm mt-1">puestos de trabajo directos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-[#465FCB]">8,6%</p>
              <p className="text-[#54595F] text-sm mt-1">de los puestos de trabajo industriales</p>
            </div>
          </div>

          <p className="text-[#7A7A7A] leading-relaxed">
            El sector de fabricantes nacionales de bienes de capital es muy heterogéneo, agrupa a más de 5.700 empresas argentinas, entre ellas el 98% corresponden a la categoría de PyMEs. El sector genera más de 100.000 puestos de trabajo directos, lo que representa el 8,6% de los puestos de trabajo industriales y el 39% del empleo metalúrgico.
          </p>
        </div>
      </section>
    </>
  );
}
