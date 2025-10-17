import { CreditCard, Zap, Truck, Gift } from "lucide-react"

export default function BenefitsSection() {
  return (
    <div className="bg-white py-6 px-4">
      <div className="max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-4">
          {/* Parcelamento */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-2">
              <CreditCard className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs text-gray-700 font-medium leading-tight">
              PARCELAMENTO
              <br />
              EM ATÉ 6X
            </p>
          </div>

          {/* PIX */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-2">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs text-gray-700 font-medium leading-tight">
              PAGAMENTO NO PIX
              <br />+ 5% DE DESCONTO
            </p>
          </div>

          {/* Envio */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-2">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs text-gray-700 font-medium leading-tight">
              ENVIO EM ATÉ 24H
              <br />
              PARA SÃO PAULO
            </p>
          </div>

          {/* Frete Grátis */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-2">
              <Gift className="w-6 h-6 text-white" />
            </div>
            <p className="text-xs text-gray-700 font-medium leading-tight">
              FRETE GRÁTIS
              <br />
              PARA TODO O BRASIL
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
