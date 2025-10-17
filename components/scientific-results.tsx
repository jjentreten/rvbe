"use client"

export default function ScientificResults() {
  const handleCheckout = () => {
    window.open("https://checkout.vendeagora.com/api/public/shopify?product=932073528582&store=9320", "_blank")
  }

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-gray-700 leading-relaxed mb-8">
            Os colágenos Renova Be passaram por testes e estudos científicos para comprovação de eficácia, veja alguns
            resultados:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Aumento da</div>
                <div className="bg-pink-500 text-white px-4 py-2 rounded font-bold inline-block mb-2">elasticidade</div>
                <div className="text-sm text-gray-600 mb-2">da pele em</div>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-pink-500">10%</span>
                  <div className="ml-2">
                    <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14l5-5 5 5z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Redução do</div>
                <div className="bg-pink-500 text-white px-4 py-2 rounded font-bold inline-block mb-2">volume dos</div>
                <div className="bg-pink-500 text-white px-4 py-2 rounded font-bold inline-block mb-2">pés-de-</div>
                <div className="bg-pink-500 text-white px-4 py-2 rounded font-bold inline-block mb-2">galinha</div>
                <div className="text-sm text-gray-600 mb-2">em</div>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-pink-500">32%</span>
                  <div className="ml-2">
                    <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="text-center">
                <div className="text-sm text-gray-600 mb-2">Aumento da</div>
                <div className="bg-pink-500 text-white px-4 py-2 rounded font-bold inline-block mb-2">densidade</div>
                <div className="text-sm text-gray-600 mb-2">da pele em</div>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-pink-500">9%</span>
                  <div className="ml-2">
                    <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14l5-5 5 5z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-pink-500 text-white px-4 py-2 rounded font-bold inline-block mb-2">Redução</div>
                <div className="text-sm text-gray-600 mb-2">das celulites</div>
                <div className="text-sm text-gray-600 mb-2">de até</div>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-pink-500">11%</span>
                  <div className="ml-2">
                    <svg className="w-8 h-8 text-pink-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 10l5 5 5-5z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white text-center py-8 rounded-lg">
          <h3 className="text-xl font-bold mb-4">
            Sabores deliciosos para
            <br />
            aproveitar o poder do colágeno
          </h3>
          <button
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-bold text-lg"
            onClick={handleCheckout}
          >
            COMPRE AGORA
          </button>
        </div>
      </div>
    </section>
  )
}
