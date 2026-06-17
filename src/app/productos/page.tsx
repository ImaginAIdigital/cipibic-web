const categories = [
  {
    title: "Plantas llave en mano",
    desc: "Ing. básica de proceso, de control, de detalle, fabricación de equipos, montaje y puesta en marcha de plantas completas entregadas en la modalidad llave en mano. Para diversas áreas de la industria tales como:",
    items: ["Producción Láctea", "producción de cerveza", "clasificación de frutas", "tratamiento de gas natural", "procesos farmacéuticos", "químicos y petroquímicos", "producción de acido sulfúrico", "generación de energía hidráulica, eólica y térmica", "procesos de refinación de crudo"],
  },
  {
    title: "Equipos para la industria del Petróleo, Gas y Energía",
    items: ["Plantas de Glicol", "Plantas de Biodiesel", "Plantas piloto", "Tratadores térmicos y/o electrostáticos", "Hornos tubulares de fuego directo", "Trampas de Scrapper", "Puentes de medición para gas y petróleo", "Tanques de Almacenaje", "Colectores para baterías", "Tanques para almacenamiento de petróleo según API 650", "Plantas paquete para tratamiento de gases", "Lavadores de gases", "Secadero Spray", "Granulación", "Secaderos en lechos fluidizados", "Molinos de martillos para minería no metálica", "Filtros de manga lavables", "Filtración de combustibles y otros líquidos"],
  },
  {
    title: "Equipos de proceso químico y petroquímico",
    items: ["Cañerías de gran diámetro, conductos, gasoductos", "Torres de proceso, destilación, fraccionadoras, separadores, flares", "Calentadores de Gas y Petróleo", "Intercambiadores de calor", "Calderas", "Generadores de vapor acuotubulares y humotubulares", "Recipientes a presión según normas ASME y AD en acero al carbono e inoxidable", "Aeroenfriadores", "Coalescedores", "Endulzamiento de gas", "Extracción de azufre", "Recuperación de LPG y NGL", "Torres de absorción y lavado", "Prefabricados de cañerías standard y ebonitadas"],
  },
  {
    title: "Plantas para almacenaje y fraccionamiento de GLP",
    items: ["Tanques y Garrafones para GLP a granel", "Tanques para distribución domiciliaria e industrial GLP", "Tanques semirremolques", "Vaporizadores a fuego directo e indirecto", "Plantas Vaporizadoras", "Estaciones compresoras, reguladoras y de medición de gas natural", "Equipo para transporte de gas natural presurizado", "Tanques API verticales y horizontales", "Torres de Tratamiento", "Filtros Separadores de Gas y Líquido", "Plantas de Tratamiento de Punto de Rocío"],
  },
  {
    title: "Equipos Especiales",
    items: ["Equipos de Cobaltoterapia y prótesis para uso médico", "Radares (primarios, secundarios, meteorológicos)", "Plantas de producción de Radioisótopos", "Satélites de observación de la tierra y de comunicaciones", "Parques Eólicos, aerogeneradores"],
  },
  {
    title: "Componentes para instalaciones nucleares",
    items: ["Centrales Nucleares", "Aleaciones especiales: Acero inoxidable, Circonio, Titanio, Níquel"],
  },
  {
    title: "Equipos de centrales hidroeléctricas",
    items: ["Centrales hidroeléctricas", "Turbinas y generadores para equipos eólicos de alta potencia"],
  },
  {
    title: "Compresores y grupos electrógenos",
    items: ["Electro compresores rotativos a tornillo (eléctricos)", "Moto compresores rotativos a tornillo (diesel)", "Herramientas neumáticas: martillo rompe pavimento, martillo picador, perforadora de roca", "Grupos electrógenos (20 kva. a 5000 kva.), insonorizados, transportables", "Torres de iluminación"],
  },
  {
    title: "Plantas para procesamiento de residuos",
    items: ["Hornos para incineración de residuos", "Plantas para el reciclado de arenas de fundición", "Plantas para el tratamiento de lodos de pintura, residuos de petróleo, PCB, suelos contaminados con crudos", "Plantas para el tratamiento de residuos con metales pesados", "Plantas para la gasificación de maderas contaminadas"],
  },
  {
    title: "Maquinaria para la industria plástica, de embalaje y llenadoras",
    items: ["Sopladoras para cuerpos huecos", "Lavadoras de envases", "Estampilladoras", "Etiquetadoras", "Dosificadoras a pistón lineales", "Envolvedoras de paletas", "Encajonadoras", "Desencajonadoras", "Robot de paletizado", "Despaletizadoras", "Envolvedoras y túneles de termo contracción"],
  },
  {
    title: "Transformadores de distribución y transmisión",
    items: ["Transformadores de llenado Integral (sin cámara de N2)", "Herméticos Integrados y sumergibles (de pozo)", "Encapsulados en resina epoxi", "Subestaciones eléctricas compactas y móviles (hasta 220 KV)", "Autotransformadores de potencia", "Transformadores de Media Potencia y Potencia (hasta 500 KV)", "Transformadores Secos Ventilados clase \"F\" y \"C\"", "Centro Integrado de Transformación"],
  },
  {
    title: "Equipos para transporte, izaje y movimiento de materiales",
    items: ["Cadenas a rodillos y cadenas transportadoras", "Engranajes y ruedas dentadas en hierro, fundición y acero inoxidable", "Reductores de velocidad, variadores, acoplamientos, poleas", "Cintas transportadoras en malla de acero", "Cables de acero inoxidable, galvanizado o negro", "Eslingas de cables de acero, de cadenas y de cinta de nylon o poliéster", "Aparejos de cable y a cadenas (manuales y eléctricas)", "Malacates y cabrestantes (manuales y eléctricos)", "Arneses de seguridad para trabajos de altura y sistemas salva caída", "Puentes Grúa y Grúas Pórtico", "Prensas hidráulicas de hasta 800 ton"],
  },
  {
    title: "Equipos y maquinarias para la industria alimenticia",
    items: ["Maquinarias para la elaboración y conservación de cremas heladas", "Fabricadoras discontinuas y continuas de helados", "Envasadoras automáticas de palitos", "Equipamiento para procesamiento de leche", "Paila para elaboración de dulce de leche", "Madurador de fermento láctico", "Prensas verticales neumáticas para queso", "Tinas queseras", "Líneas de procesamiento para frutas, verduras y hortalizas", "Sistemas de transporte por vacío de polvos y granulados", "Fermentadores", "Secadores rotativos", "Tanques mezcladores", "Silos para almacenamiento de cereales o polvos", "Filtros pulidores para gaseosas, aguas y jugos", "Pasteurizadores", "Llenadoras lineales, por depresión, por gravedad, rotativas a pistón"],
  },
  {
    title: "Plantas y equipos de liofilización",
    items: [],
  },
  {
    title: "Diseño, Implantación y Bioseguridad de Granja y Galpones de cerdos y aves",
    items: [],
  },
];

export default function ProductosPage() {
  return (
    <>
      <section className="bg-[#465FCB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-[#6EC1E4] text-sm font-semibold uppercase tracking-widest mb-3">Catálogo sectorial</p>
          <h1 className="text-4xl font-bold mb-4">Productos de las Empresas asociadas a CIPIBIC</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="border border-gray-200 rounded-xl p-6 hover:border-[#6EC1E4] transition-colors">
              <h2 className="text-base font-bold text-[#1A1A1A] mb-3 pb-3 border-b border-gray-100">
                {cat.title}
              </h2>
              {cat.desc && (
                <p className="text-[#7A7A7A] text-sm mb-3 leading-relaxed">{cat.desc}</p>
              )}
              {cat.items.length > 0 && (
                <ul className="space-y-1.5">
                  {cat.items.map((item) => (
                    <li key={item} className="flex gap-2 text-[#7A7A7A] text-sm">
                      <span className="text-[#6EC1E4] shrink-0 mt-0.5">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
