import Link from "next/link";

const serviciosSocios = [
  "Directorio interactivo de empresas, productos ofrecidos, insumos requeridos y contactos comerciales",
  "Información sobre líneas de financiamiento bancario",
  "Informe de Situación Sectorial",
  "Cómo exportar: aspectos estratégicos, operativos y normativos",
  "Directorio de operadoras y proyectos mineros",
  "Directorio de EPCistas y contratistas",
  "Directorio de Energía Eléctrica: Generación, transporte y distribución",
  "Directorio de empresas de la industria láctea",
  "Directorio de la industria farmacéutica, cosmética, sanidad animal y química",
  "Directorio de la industria hidrocarburífera",
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
        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-8">Servicios CIPIBIC al Asociado</h2>
        <div className="max-w-4xl space-y-5 text-[#7A7A7A] leading-relaxed">
          <p>Realizamos de manera continua una gestión de promoción de los intereses sectoriales al conjunto de la sociedad en general y a los encargados de tomar decisiones en materia de políticas industriales en particular.</p>
          <p>Trabajamos en la identificación y difusión de oportunidades comerciales. Difundimos entre los socios trabajos propios y de terceros sobre: estudios políticos y económicos, estadísticas sobre importaciones y exportaciones, análisis de posiciones arancelarias sensibles y específicas de nuestros socios, novedades fiscales, laborales y de interés general.</p>
          <p>Mantenemos contacto frecuente y habitual con todas las dependencias, organismos y funcionarios públicos en las áreas de incumbencia de nuestra actividad, tanto del poder ejecutivo como del legislativo. Acompañamos y apoyamos a los asociados en las gestiones que inicien ante distintos organismos o dependencias públicas o privadas.</p>
          <p>Damos asesoramiento y orientación en materia de: Régimen para fabricantes de bienes de capital, Saldo Técnico de IVA y demás regímenes de interés.</p>
          <p>Mantenemos informadas y actualizadas a las empresas sobre las regulaciones y normas aplicables al comercio exterior y las negociaciones internacionales. Facilitamos datos estadísticos sobre la importación y exportación de bienes.</p>
          <p>Formamos parte del Consejo Público Privado para la Promoción de las Exportaciones, trabajando junto a la Cancillería Argentina en la definición de actividades promocionales específicas para los diversos sectores de la actividad económica –entre ellos bienes de capital/plantas llave en mano–, con el fin de acompañar a nuestras empresas en la internacionalización de sus productos en el exterior.</p>
          <p>Nos ocupamos de la defensa comercial frente a prácticas desleales en el comercio internacional, como la aplicación de las medidas antidumping, medidas aduaneras, valores criterio, aduanas especializadas, normas técnicas al comercio, licencias de importación, etc.</p>
          <p>Brindamos asesoramiento en temas operativos relacionados con la importación, exportación, aduana, bancos, certificaciones, financiación, etc.</p>
          <p>Mantenemos un canal de diálogo con las áreas técnicas de la Administración Federal de Ingresos Públicos, la Dirección General de Aduanas, el Ministerio de Desarrollo Productivo, Ministerio de Economía, la Secretaría de Energía, la Comisión Nacional de Comercio Exterior, distintas Cámaras Binacionales y Embajadas Argentinas radicadas en el exterior y Embajadas de países extranjeros radicadas en el país, distintas Asociaciones y Cámaras del quehacer nacional e internacional.</p>
          <p>Hemos constituido como comisiones de trabajo el <strong className="text-[#1A1A1A]">Clúster Eólico Argentino</strong>, el <strong className="text-[#1A1A1A]">Clúster de Industrias y Tecnologías de las Energías Renovables Argentinas</strong>, el <strong className="text-[#1A1A1A]">Clúster Exportador de Plantas Llave en Mano</strong>, el <strong className="text-[#1A1A1A]">Clúster Industrial Minero Argentino</strong> y las áreas de <strong className="text-[#1A1A1A]">Bioeconomía</strong> y <strong className="text-[#1A1A1A]">Transición Energética</strong>, para garantizar el abordaje concreto y específico de estas actividades de alto valor agregado. Asimismo, integramos junto a otras cámaras colegas el <strong className="text-[#1A1A1A]">Observatorio para el Desarrollo Industrial del Petróleo y el Gas Argentino</strong> y la <strong className="text-[#1A1A1A]">Marca Sectorial Maquinaria Argentina para Alimentos</strong>, con el fin de potenciar el alcance y beneficios para los socios mediante el trabajo conjunto.</p>
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
