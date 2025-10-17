export default function ActiveIngredients() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl mb-8 text-center">
          Veja como é fácil ter um dia com mais disposição
        </h2>

        <div className="space-y-12">
          {/* How to consume section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Como consumir a Creatina + Morning Shot Renova Be?</h3>

            <p className="text-gray-700 leading-relaxed mb-8">
              Basta misturar uma dose de Creatina + Morning Shot Renova Be em 200mL de água gelada
            </p>

            {/* Dosage diagram */}
            <div className="flex items-center justify-center mb-8 bg-gray-50 py-8 rounded-lg">
              <img
                src="/images/design-mode/doses.jpg%281%29%281%29(1).jpeg"
                alt="1 scoop + 200mL de água gelada = Dose ideal de disposição e saúde"
                className="max-w-full h-auto"
              />
            </div>

            {/* Product preparation image */}
            <div className="mb-8">
              <img
                src="/images/design-mode/1.jpg%281%29%281%29(1).jpeg"
                alt="Creatina + Morning Shot sendo preparada com suco"
                className="w-full rounded-lg shadow-sm"
              />
            </div>
          </div>

          {/* Best time to consume section */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Qual é o melhor horário para consumir?</h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Como o nome sugere, tomar a Creatina + Morning Shot pela manhã é a opção mais recomendada. A creatina é
              mais eficaz quando consumida consistentemente, e tomar pela manhã pode ajudar a incorporar isso na sua
              rotina diária.
            </p>

            <p className="text-gray-700 leading-relaxed mb-8">
              Ou pode ser consumida como pré-treino para aproveitar seus benefícios durante o exercício. A creatina pode
              ajudar a aumentar a força e a resistência nas atividades.
            </p>

            {/* Product in hands image */}
            <div className="mb-6">
              <img
                src="/images/design-mode/2.jpg%281%29%281%29(1).jpeg"
                alt="Mulher segurando o pote de Creatina + Morning Shot"
                className="w-full rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
