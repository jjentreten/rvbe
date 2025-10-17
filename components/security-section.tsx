import Image from "next/image"

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: <Image src="/imgi_61_Icone-Dados-Pessoais.svg" alt="Dados Pessoais" width={48} height={48} />,
      title: "Dados Pessoais",
      description: "São totalmente sigilosos e não são compartilhados.",
    },
    {
      icon: <Image src="/imgi_62_Icone-Site-Confiavel.svg" alt="Site Confiável" width={48} height={48} />,
      title: "Site Confiável",
      description: "Monitorado todo o tempo por empresas de segurança digital.",
    },
    {
      icon: <Image src="/imgi_63_Icone-Dados-Financeiros.svg" alt="Dados Financeiros" width={48} height={48} />,
      title: "Dados Financeiros",
      description: "Gravados em ambiente 100% seguro.",
    },
    {
      icon: <Image src="/imgi_64_Icone-Entrega-Garantida.svg" alt="Entrega Garantida" width={48} height={48} />,
      title: "Entrega Garantida",
      description: "Logística eficaz com entregas feitas no prazo combinado.",
    },
  ]

  return (
    <section className="p-6 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Aqui sua compra é</h2>
        <h3 className="text-2xl font-bold text-gray-800">100% segura</h3>
      </div>

      <div className="space-y-4 max-w-md mx-auto">
        {securityFeatures.map((feature, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-pink-200 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center text-gray-700 flex-shrink-0">{feature.icon}</div>
            <div>
              <h4 className="font-bold text-pink-500 mb-1 text-base">{feature.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
