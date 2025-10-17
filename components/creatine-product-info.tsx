import { Flame, Zap, Eye, Target, Shield } from "lucide-react"

export default function CreatineProductInfo() {
  // Creatina-specific content with visual layout
  const creatineBenefits = [
    {
      icon: Flame,
      title: "Proporciona efeito termogênico",
      description:
        "Os ativos da fórmula contribuem com a potencialização da produção de calor, e como consequência, com o aumento da queima de gordura.",
    },
    {
      icon: Zap,
      title: "Colabora com o aumento da disposição",
      description:
        "A fusão dos ingredientes proporciona a elevação da produção de energia no corpo, potencializando o desempenho físico e mental durante a rotina.",
    },
    {
      icon: Eye,
      title: "Promove a aceleração do metabolismo",
      description:
        "Por possuir ingredientes com atributos estimulantes e termogênicos, ajuda a acelerar o metabolismo energético.",
    },
    {
      icon: Target,
      title: "Contribui com a constância do foco",
      description:
        "A fórmula com agentes naturais de ação estimulante combinados, contribui com a elevação e manutenção do foco e energia para as atividades rotineiras.",
    },
    {
      icon: Shield,
      title: "Favorece o aumento da imunidade",
      description:
        "As propriedades imunizantes da união de ativos que fortalecem o sistema imunológico, auxiliam na melhoria das defesas do organismo.",
    },
  ]

  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Main Title */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
            Turbine a sua rotina com a<br />
            Creatina + Morning Shot
            <br />
            Renova Be
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="space-y-8">
          {creatineBenefits.map((benefit, index) => (
            <div key={index} className="text-center">
              {/* Icon Circle */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full border-2 border-yellow-400 flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-gray-700" />
                </div>
              </div>

              {/* Benefit Content */}
              <div className="max-w-md mx-auto">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
