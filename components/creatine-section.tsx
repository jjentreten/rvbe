"use client"
import { useRouter } from "next/navigation"
import { Flame } from "lucide-react"

export default function CreatineSection() {
  const router = useRouter()

  const handleMorningShotClick = () => {
    router.push("/creatina-morning-shot")
  }

  const handleBalmClick = () => {
    router.push("/creatina-balm-de-dores")
  }

  const handle2PotesClick = () => {
    router.push("/creatina-2-potes")
  }

  const handle4PotesClick = () => {
    router.push("/creatina-4-potes")
  }

  // const handleCheckoutMorningShot = () => {
  //   window.open("https://checkout.vendeagora.com/api/public/shopify?product=932069642624&store=9320", "_blank")
  // }

  // const handleCheckoutBalm = () => {
  //   window.open("https://checkout.vendeagora.com/api/public/shopify?product=932099785772&store=9320", "_blank")
  // }

  // const handleCheckout2Potes = () => {
  //   window.open("https://checkout.vendeagora.com/api/public/shopify?product=932036495768&store=9320", "_blank")
  // }

  // const handleCheckout4Potes = () => {
  //   window.open("https://checkout.vendeagora.com/api/public/shopify?product=932039627439&store=9320", "_blank")
  // }

  return (
    <section className="p-6 bg-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Turbine a sua rotina com a</h2>
        <h3 className="text-xl font-semibold mb-2">Creatina + Morning Shot Renova Be</h3>
        <p className="text-gray-600">Os ativos mais poderosos e seguros</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Product 1 - Single Creatina Morning Shot - NO DISCOUNT */}
        <div
          className="text-center cursor-pointer hover:shadow-lg transition-shadow duration-200 p-2 rounded-lg"
          onClick={handleMorningShotClick}
        >
          <img src="/creatina-new-1.webp" alt="1 Creatina Morning Shot" className="w-full h-40 object-contain mb-2" />
          <h4 className="font-bold text-sm mb-2">1 Creatina Morning Shot</h4>
          <p className="text-xs text-gray-600 mb-2">Disponível no sabor abacaxi</p>
          <p className="text-xs text-gray-500 line-through">de: R$ 167,70 por:</p>
          <p className="text-lg font-bold text-green-600">
            R$ 104,41 <span className="text-xs">no pix</span>
          </p>
          <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 22,89*</p>
          <div
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-sm w-full cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              handleMorningShotClick()
            }}
          >
            COMPRE AGORA
          </div>
        </div>

        {/* Product 2 - Creatina + Balm - NO DISCOUNT */}
        <div
          className="text-center cursor-pointer hover:shadow-lg transition-shadow duration-200 p-2 rounded-lg"
          onClick={handleBalmClick}
        >
          <img
            src="/creatina-1-pote-balm.jpeg"
            alt="1 Creatina Morning Shot + 1 Balm de Dores"
            className="w-full h-40 object-contain mb-2"
          />
          <h4 className="font-bold text-sm mb-2">1 Creatina Morning Shot + 1 Balm de Dores</h4>
          <p className="text-xs text-gray-600 mb-2">Disponível no sabor abacaxi</p>
          <p className="text-xs text-gray-500 line-through">de: R$ 187,70 por:</p>
          <p className="text-lg font-bold text-green-600">
            R$ 109,16 <span className="text-xs">no pix</span>
          </p>
          <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 23,93*</p>
          <div
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-sm w-full cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              handleBalmClick()
            }}
          >
            COMPRE AGORA
          </div>
        </div>

        {/* Product 3 - 2 Creatinas + Balm - WITH BLACK FRIDAY BADGE */}
        <div
          className="text-center relative cursor-pointer hover:shadow-lg transition-shadow duration-200 p-2 rounded-lg"
          onClick={handle2PotesClick}
        >
          <div className="absolute top-2 left-2 z-10">
            <div className="relative">
              <div className="bg-gradient-to-r from-black via-pink-600 to-orange-500 text-white text-xs font-bold py-2 px-3 rounded-lg shadow-lg animate-pulse">
                <div className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-orange-400 fill-orange-400" />
                  <div className="text-left">
                    <div className="text-[11px] leading-tight font-bold">ESQUENTA BLACK</div>
                    <div className="text-[9px] leading-tight font-normal text-pink-100">LEVE 2, PAGUE 1! </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
            </div>
          </div>
          <img
            src="/creatina-2potes-1.webp"
            alt="2 Creatinas Morning Shot + 1 Balm de Dores"
            className="w-full h-40 object-contain mb-2"
          />
          <h4 className="font-bold text-sm mb-2">2 Creatinas Morning Shot + 1 Balm de Dores</h4>
          <p className="text-xs text-gray-600 mb-2">Disponível no sabor abacaxi</p>
          <p className="text-xs text-gray-500 line-through">de: R$ 329,90 por:</p>
          <p className="text-lg font-bold text-green-600">
            R$ 109,16 <span className="text-xs">no pix</span>
          </p>
          <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 23,93*</p>
          <div
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-sm w-full cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              handle2PotesClick()
            }}
          >
            COMPRE AGORA
          </div>
        </div>

        {/* Product 4 - 4 Creatinas + Balm + Creme - WITH 50% OFF BADGE */}
        <div
          className="text-center relative cursor-pointer hover:shadow-lg transition-shadow duration-200 p-2 rounded-lg"
          onClick={handle4PotesClick}
        >
          <div className="absolute top-0 left-0 bg-yellow-400 text-black text-xs font-bold py-1 px-2 rounded z-10">
            50% OFF
          </div>
          <img
            src="/creatina-4potes-1.webp"
            alt="4 Creatinas + 1 Balm de Dores + 1 Creme Retinol"
            className="w-full h-40 object-contain mb-2"
          />
          <h4 className="font-bold text-sm mb-2">4 Creatinas + 1 Balm de Dores + 1 Creme Retinol</h4>
          <p className="text-xs text-gray-600 mb-2">Disponível no sabor abacaxi</p>
          <p className="text-xs text-gray-500 line-through">de: R$ 607,70 por:</p>
          <p className="text-lg font-bold text-green-600">
            R$ 237,31 <span className="text-xs">no pix</span>
          </p>
          <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 52,04*</p>
          <div
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg text-sm w-full cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              handle4PotesClick()
            }}
          >
            COMPRE AGORA
          </div>
        </div>
      </div>
    </section>
  )
}
