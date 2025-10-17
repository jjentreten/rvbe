"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function JointCollagenSection() {
  return (
    <section className="p-6 bg-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Colágeno para articulações,</h2>
        <h3 className="text-xl font-semibold mb-2">cartilagens e inflamações</h3>
        <p className="text-gray-600">Completo e perfeito para suas dores com a qualidade Renova Be</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Produto 1: 1 Pote - SEM badge */}
        <Link href="/colageno-tipo-2-active-plus" className="block">
          <div className="text-center cursor-pointer hover:shadow-lg transition-shadow">
            <img
              src="/colageno-tipo2-1-pote.jpeg"
              alt="1 Pote de Colágeno Tipo 2 Active Plus"
              className="w-full h-40 object-contain mb-2"
            />
            <h4 className="font-bold text-sm mb-2">1 Pote de Colágeno Tipo 2 Active Plus</h4>
            <p className="text-xs text-gray-600 mb-2">Suplemento alimentar em comprimido</p>
            <p className="text-xs text-gray-500 line-through">de: R$ 149,90 por:</p>
            <p className="text-lg font-bold text-green-600">
              R$ 104,41 <span className="text-xs">no pix</span>
            </p>
            <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 22,89*</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full">
              COMPRE AGORA
            </Button>
          </div>
        </Link>

        {/* Produto 2: 1 Pote + Balm - SEM badge */}
        <Link href="/colageno-tipo-2-balm-de-dores" className="block">
          <div className="text-center cursor-pointer hover:shadow-lg transition-shadow">
            <img
              src="/colageno-tipo2-1-pote-balm.jpeg"
              alt="1 Pote de Colágeno Tipo 2 + 1 Balm de Dores"
              className="w-full h-40 object-contain mb-2"
            />
            <h4 className="font-bold text-sm mb-2">1 Pote de Colágeno Tipo 2 + 1 Balm de Dores</h4>
            <p className="text-xs text-gray-600 mb-2">Suplemento alimentar em comprimido</p>
            <p className="text-xs text-gray-500 line-through">de: R$ 187,70 por:</p>
            <p className="text-lg font-bold text-green-600">
              R$ 123,41 <span className="text-xs">no pix</span>
            </p>
            <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 20,81*</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full">
              COMPRE AGORA
            </Button>
          </div>
        </Link>

        {/* Produto 3: 2 Potes + Balm - Replaced 40% OFF badge with Oferta 10.10 badge */}
        <Link href="/colageno-tipo-2-active-plus-2-potes" className="block">
          <div className="text-center relative cursor-pointer hover:shadow-lg transition-shadow">
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
              src="/colageno-tipo2-2-potes-balm.jpeg"
              alt="2 Potes de Tipo 2 + 1 Balm de Dores"
              className="w-full h-40 object-contain mb-2"
            />
            <h4 className="font-bold text-sm mb-2">2 Potes de Colágeno Tipo 2 + 1 Balm de Dores</h4>
            <p className="text-xs text-gray-600 mb-2">Suplemento alimentar em comprimido</p>
            <p className="text-xs text-gray-500 line-through">de: R$ 329,00 por:</p>
            <p className="text-lg font-bold text-green-600">
              R$ 123,41 <span className="text-xs">no pix</span>
            </p>
            <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 27,06*</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full">
              COMPRE AGORA
            </Button>
          </div>
        </Link>

        {/* Produto 4: 4 Potes + 2 Balm - COM badge 51% OFF */}
        <Link href="/colageno-tipo-2-active-plus-4-potes" className="block">
          <div className="text-center relative cursor-pointer hover:shadow-lg transition-shadow">
            <div className="absolute top-0 left-0 bg-yellow-400 text-black text-xs font-bold py-1 px-2 rounded z-10">
              51% OFF
            </div>
            <img
              src="/colageno-tipo2-4-potes-balm.jpeg"
              alt="4 Potes de Colágeno Tipo 2 + 2 Balm de Dores"
              className="w-full h-40 object-contain mb-2"
            />
            <h4 className="font-bold text-sm mb-2">4 Potes de Colágeno Tipo 2 + 2 Balm de Dores</h4>
            <p className="text-xs text-gray-600 mb-2">Suplemento alimentar em comprimido</p>
            <p className="text-xs text-gray-500 line-through">de: R$ 717,70 por:</p>
            <p className="text-lg font-bold text-green-600">
              R$ 227,91 <span className="text-xs">no pix</span>
            </p>
            <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 49,97*</p>
            <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full">
              COMPRE AGORA
            </Button>
          </div>
        </Link>
      </div>
    </section>
  )
}
