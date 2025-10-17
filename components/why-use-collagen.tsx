export default function WhyUseCollagen() {
  return (
    <section className="bg-white py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight text-center">
          Os ativos mais poderosos
          <br />e seguros para os
          <br />
          seus cuidados diários!
        </h2>

        <div className="space-y-8">
          {/* What is Creatina + Morning Shot section */}
          <div className="text-left">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              O que é a Creatina + Morning Shot Renova Be?
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              Suplemento em pó para auxílio na produção de energia com creatina + 10 ingredientes potentes de ação
              estimulante e termogênica, como hibisco, chá-verde, guaraná e guaraná em pó, desenvolvido para dar mais
              ânimo à sua rotina.
            </p>
            <div className="flex justify-center mb-6">
              <img
                src="/o-que-e-creatina.jpg"
                alt="Creatina + Morning Shot com frutas"
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          </div>

          {/* Daily importance section */}
          <div className="text-left">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Importância no seu dia-a-dia?</h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              Oferece os ingredientes essenciais para estimular a disposição e o movimento durante a prática de
              exercícios e atividades do dia a dia.
            </p>
            <div className="flex justify-center mb-6">
              <img
                src="/importancia-no-seu-dia-a-dia.jpg"
                alt="Pessoa segurando Creatina Morning Shot"
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          </div>

          {/* Who is it recommended for section */}
          <div className="text-left">
            <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
              Para quem a Creatina + Morning Shot Renova Be é recomendado?
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
              Indicado para proporcionar uma dose extra de foco e energia na execução de atividades realizadas
              diariamente e durante o desempenho nas atividades físicas.
            </p>
            <div className="flex justify-center">
              <img
                src="/para-quem-e-recomendado.jpg"
                alt="Mãos segurando Creatina Morning Shot"
                className="rounded-lg max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
