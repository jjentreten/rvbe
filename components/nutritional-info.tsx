export default function NutritionalInfo() {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="font-bold text-center mb-9 text-xl leading-7">
          A combinação ideal para um dia mais produtivo e ativo
        </h2>

        <div className="bg-white text-black rounded-lg p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-center mb-6">INFORMAÇÃO NUTRICIONAL</h3>

          <div className="text-sm mb-4">
            <p>Porções por embalagem: 18 porções</p>
            <p>Porção: 8g (1 medidor)</p>
          </div>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2"></th>
                <th className="text-center py-2">8 g</th>
                <th className="text-center py-2">%VD(*)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="py-2">Valor energético (kcal)</td>
                <td className="text-center py-2">8</td>
                <td className="text-center py-2">0</td>
              </tr>
              <tr>
                <td className="py-2">Carboidratos (g)</td>
                <td className="text-center py-2">2</td>
                <td className="text-center py-2">1</td>
              </tr>
              <tr>
                <td className="py-2">Açúcares totais (g)</td>
                <td className="text-center py-2">1</td>
                <td className="text-center py-2">-</td>
              </tr>
              <tr>
                <td className="py-2">Vitamina C (mg)</td>
                <td className="text-center py-2">45</td>
                <td className="text-center py-2">45</td>
              </tr>
              <tr>
                <td className="py-2">Cafeína (mg)</td>
                <td className="text-center py-2">75</td>
                <td className="text-center py-2">-</td>
              </tr>
              <tr>
                <td className="py-2">Ácido Ascórbico (mg)</td>
                <td className="text-center py-2">50</td>
                <td className="text-center py-2">-</td>
              </tr>
              <tr>
                <td className="py-2">Antocianinas (mg)</td>
                <td className="text-center py-2">0,5</td>
                <td className="text-center py-2">-</td>
              </tr>
              <tr>
                <td className="py-2">Creatina (g)</td>
                <td className="text-center py-2">3</td>
                <td className="text-center py-2">-</td>
              </tr>
            </tbody>
          </table>

          <div className="text-xs mt-4 space-y-2">
            <p>
              Não contém quantidades significativas de açúcares adicionados, proteínas, gorduras totais, gorduras
              saturadas, gorduras trans, fibras alimentares e sódio.
            </p>
            <p>*Percentual de valores diários fornecidos pela porção</p>
          </div>
        </div>
      </div>
    </section>
  )
}
