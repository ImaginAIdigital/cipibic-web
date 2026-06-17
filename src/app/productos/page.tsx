const categories = [
  {
    title: "Plantas llave en mano",
    items: [
      "Plantas de proceso completas para industria química y petroquímica",
      "Plantas de tratamiento de agua y efluentes",
      "Plantas de generación de energía",
      "Instalaciones industriales para alimentación y bebidas",
    ],
  },
  {
    title: "Equipos para petróleo, gas y energía",
    items: [
      "Recipientes a presión y equipos de intercambio térmico",
      "Torres de destilación y columnas de proceso",
      "Sistemas de bombeo y compresión",
      "Equipos para exploración y producción",
    ],
  },
  {
    title: "Maquinaria para la industria alimenticia",
    items: [
      "Equipos para procesamiento de lácteos",
      "Líneas de envasado y packaging",
      "Sistemas de pasteurización y esterilización",
      "Maquinaria para frigoríficos y mataderos",
    ],
  },
  {
    title: "Transformadores eléctricos y equipos de potencia",
    items: [
      "Transformadores de distribución y de potencia",
      "Tableros eléctricos y celdas de media tensión",
      "Sistemas de protección y control",
      "Equipos para generación renovable",
    ],
  },
  {
    title: "Equipos de izaje y transporte industrial",
    items: [
      "Puentes grúa y grúas pórtico",
      "Sistemas de transporte de materiales",
      "Elevadores industriales",
      "Monorraíles y sistemas de manipuleo",
    ],
  },
  {
    title: "Maquinaria para minería",
    items: [
      "Equipos de trituración y molienda",
      "Sistemas de clasificación y separación",
      "Bombas para minería y metalurgia",
      "Equipos de ventilación subterránea",
    ],
  },
];

export default function ProductosPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#465FCB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <p className="text-[#6EC1E4] text-sm font-semibold uppercase tracking-widest mb-3">Catálogo sectorial</p>
          <h1 className="text-4xl font-bold mb-4">Productos</h1>
          <p className="text-blue-100 max-w-2xl">
            Nuestras empresas asociadas fabrican una amplia gama de bienes de capital especiales para los principales sectores industriales del país.
          </p>
        </div>
      </section>

      {/* Categorías */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="border border-gray-200 rounded-xl p-6 hover:border-[#6EC1E4] transition-colors">
              <h2 className="text-lg font-bold text-[#1A1A1A] mb-4 pb-3 border-b border-gray-100">
                {cat.title}
              </h2>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item} className="flex gap-3 text-[#7A7A7A] text-sm">
                    <span className="text-[#6EC1E4] mt-0.5 shrink-0">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
