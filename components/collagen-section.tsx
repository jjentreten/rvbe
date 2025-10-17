"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CollagenSection() {
  const router = useRouter()

  const handleCollagenClick = () => {
    router.push("/colageno-1-pote")
  }

  const handle2PotesClick = () => {
    router.push("/colageno-2-potes")
  }

  const handle3PotesClick = () => {
    router.push("/colageno-3-potes")
  }

  const handle6PotesClick = () => {
    router.push("/colageno-6-potes")
  }

  return (
    <section className="p-6 bg-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Colágeno Verisol®</h2>
        <h3 className="text-xl font-semibold mb-2">anti-idade para o corpo</h3>
        <p className="text-gray-600 text-sm">Ingredientes da mais alta tecnologia e qualidade do mercado</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          className="text-center relative cursor-pointer hover:shadow-lg transition-shadow duration-200"
          onClick={handleCollagenClick}
        >
          <img
            src="/colageno-1-pote-kit.jpeg"
            alt="1 Pote Colágeno Verisol"
            className="w-full h-40 object-contain mb-2"
          />
          <h4 className="font-bold text-sm mb-2">1 Pote Colágeno Verisol® + 1 Creme Facial</h4>
          <p className="text-xs text-gray-600 mb-2">
            Sabores disponíveis do colágeno: Cranberry, Limão, Tangerina e Frutas Tropicais
          </p>
          <p className="text-xs text-gray-500 line-through mb-1">de: R$ 139,90 por:</p>
          <p className="text-lg font-bold text-green-600 mb-1">
            R$ 104,41 <span className="text-xs font-normal">no pix</span>
          </p>
          <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 22,89*</p>
          <Button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full text-sm"
            onClick={(e) => {
              e.stopPropagation()
              handleCollagenClick()
            }}
          >
            COMPRE AGORA
          </Button>
        </div>

        <div
          className="text-center relative cursor-pointer hover:shadow-lg transition-shadow duration-200"
          onClick={handle2PotesClick}
        >
          <div className="absolute top-2 left-2 z-10">
            <div className="relative">
              <div className="bg-gradient-to-r from-pink-500 to-rose-400 text-white text-xs font-bold py-2 px-3 rounded-lg shadow-lg animate-pulse">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <span className="text-yellow-300 text-[10px] font-bold">%</span>
                  </div>
                  <div className="text-center">
                    <div className="text-[10px] leading-tight">OFERTA 10.10</div>
                    <div className="text-[9px] leading-tight font-normal">LEVE 2, PAGUE 1</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
          </div>
          <img
            src="/colageno-2-potes-kit.jpeg"
            alt="2 Potes Colágeno Kit"
            className="w-full h-40 object-contain mb-2"
          />
          <h4 className="font-bold text-sm mb-2">2 Potes Colágeno Verisol® + 1 Creme Facial</h4>
          <p className="text-xs text-gray-600 mb-2">
            Sabores disponíveis do colágeno: Cranberry, Limão, Tangerina e Frutas Tropicais
          </p>
          <p className="text-xs text-gray-500 line-through mb-1">de: R$ 307,60 por:</p>
          <p className="text-lg font-bold text-green-600 mb-1">
            R$ 104,41 <span className="text-xs font-normal">no pix</span>
          </p>
          <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 22,89*</p>
          <Button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full text-sm"
            onClick={(e) => {
              e.stopPropagation()
              handle2PotesClick()
            }}
          >
            COMPRE AGORA
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div
          className="text-center relative cursor-pointer hover:shadow-lg transition-shadow duration-200"
          onClick={handle3PotesClick}
        >
          <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold py-1 px-2 rounded z-10">
            40% OFF
          </div>
          <img
            src="/colageno-3-potes-kit.jpeg"
            alt="3 Potes Colágeno Kit"
            className="w-full h-36 object-contain mb-2"
          />
          <h4 className="font-bold text-sm mb-2">3 Potes Colágeno Verisol® + 1 Sérum Facial + 1 Creme Retinol</h4>
          <p className="text-xs text-gray-600 mb-2">
            Sabores disponíveis do colágeno: Cranberry, Limão, Tangerina e Frutas Tropicais
          </p>
          <p className="text-xs text-gray-500 line-through mb-1">de: R$ 490,00 por:</p>
          <p className="text-lg font-bold text-green-600 mb-1">
            R$ 237,41 <span className="text-xs font-normal">no pix</span>
          </p>
          <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 52,06*</p>
          <Button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full text-sm"
            onClick={(e) => {
              e.stopPropagation()
              handle3PotesClick()
            }}
          >
            COMPRE AGORA
          </Button>
        </div>

        <div
          className="text-center relative cursor-pointer hover:shadow-lg transition-shadow duration-200"
          onClick={handle6PotesClick}
        >
          <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold py-1 px-2 rounded z-10">
            50% OFF
          </div>
          <img
            src="/colageno-6-potes-kit.jpeg"
            alt="6 Potes Colágeno Kit"
            className="w-full h-36 object-contain mb-2"
          />
          <h4 className="font-bold text-sm mb-2">6 Potes Colágeno Verisol® + 1 Sérum + 1 Retinol + 1 Hial. Labial</h4>
          <p className="text-xs text-gray-600 mb-2">
            Sabores disponíveis do colágeno: Cranberry, Limão, Tangerina e Frutas Tropicais
          </p>
          <p className="text-xs text-gray-500 line-through mb-1">de: R$ 1.037,70 por:</p>
          <p className="text-lg font-bold text-green-600 mb-1">
            R$ 446,41 <span className="text-xs font-normal">no pix</span>
          </p>
          <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 60,39*</p>
          <Button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full text-sm"
            onClick={(e) => {
              e.stopPropagation()
              handle6PotesClick()
            }}
          >
            COMPRE AGORA
          </Button>
        </div>
      </div>
    </section>
  )
}
