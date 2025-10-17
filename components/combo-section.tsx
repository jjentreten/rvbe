"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ComboSection() {
  return (
    <section className="p-6 bg-white">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">{"Os melhores combos para sua\nrotina"}</h2>

        <p className="text-gray-600 text-sm">Produtos para sua beleza, saúde e bem-estar</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Link href="/colageno-creatina-creme-retinol" className="text-center relative block">
          <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold py-1 px-2 rounded z-10">
            40% OFF
          </div>
          <img
            src="/kit-colageno-creatina-serum.jpeg"
            alt="Kit Colágeno Verisol + Creatina + Serum"
            className="w-full h-40 object-contain mb-2"
          />
          <h4 className="font-bold text-sm mb-2">Kit Colágeno Verisol® + Creatina Morning Shot + Creme Retinol</h4>
          <p className="text-xs text-gray-600 mb-2">
            Sabores disponíveis do colágeno: Cranberry, Limão, Tangerina, Frutas Tropicais e Pink Lemonade
          </p>
          <p className="text-xs text-gray-500 line-through mb-1">de: R$ 369,90 por:</p>
          <p className="text-lg font-bold text-green-600 mb-1">
            R$ 161,41 <span className="text-xs font-normal">no pix</span>
          </p>
          <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 35,39*</p>
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full text-sm">
            COMPRE AGORA
          </Button>
        </Link>

        <Link href="/colageno-verisol-col-tipo-2" className="text-center relative block">
          <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold py-1 px-2 rounded z-10">
            39% OFF
          </div>
          <img
            src="/kit-colageno-tipo2-serum.jpeg"
            alt="Kit Colágeno Verisol + Colágeno Tipo 2"
            className="w-full h-40 object-contain mb-2"
          />
          <h4 className="font-bold text-sm mb-2">Kit Colágeno Verisol® + Colágeno Tipo 2 + Creme Retinol</h4>
          <p className="text-xs text-gray-600 mb-2">
            Sabores disponíveis do colágeno: Cranberry, Limão, Tangerina, Frutas Tropicais e Pink Lemonade
          </p>
          <p className="text-xs text-gray-500 line-through mb-1">de: R$ 329,90 por:</p>
          <p className="text-lg font-bold text-green-600 mb-1">
            R$ 123,41 <span className="text-xs font-normal">no pix</span>
          </p>
          <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 27,06*</p>
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full text-sm">
            COMPRE AGORA
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Link href="/colageno-verisol-omega-3" className="text-center relative block">
          <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold py-1 px-2 rounded z-10">
            39% OFF
          </div>
          <img
            src="/kit-colageno-omega3-serum.jpeg"
            alt="Kit Colágeno Verisol + Omega 3"
            className="w-full h-36 object-contain mb-2"
          />
          <h4 className="font-bold text-sm mb-2">Kit Colágeno Verisol® + Ômega 3 Meg-3 + Creme Retinol</h4>
          <p className="text-xs text-gray-600 mb-2">
            Sabores disponíveis do colágeno: Cranberry, Limão, Tangerina, Frutas Tropicais e Pink Lemonade
          </p>
          <p className="text-xs text-gray-500 line-through mb-1">de: R$ 329,90 por:</p>
          <p className="text-lg font-bold text-green-600 mb-1">
            R$ 123,41 <span className="text-xs font-normal">no pix</span>
          </p>
          <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 27,06*</p>
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full text-sm">
            COMPRE AGORA
          </Button>
        </Link>

        <Link href="/creatina-colageno-tipo-2" className="text-center relative block">
          <div className="absolute top-2 left-2 bg-yellow-400 text-black text-xs font-bold py-1 px-2 rounded z-10">
            39% OFF
          </div>
          <img
            src="/kit-creatina-colageno-balm.jpeg"
            alt="Kit Creatina + Colágeno Tipo 2"
            className="w-full h-36 object-contain mb-2"
          />
          <h4 className="font-bold text-sm mb-2">Kit Creatina Morning Shot + Colágeno Tipo 2 + Balm de Dores</h4>
          <p className="text-xs text-gray-600 mb-2">
            Sabores disponíveis da Creatina: Abacaxi, Laranja e Limão com Morango
          </p>
          <p className="text-xs text-gray-500 line-through mb-1">de: R$ 369,90 por:</p>
          <p className="text-lg font-bold text-green-600 mb-1">
            R$ 170,91 <span className="text-xs font-normal">no pix</span>
          </p>
          <p className="text-xs text-gray-600 mb-3">Ou até 6x R$ 37,47*</p>
          <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full text-sm">
            COMPRE AGORA
          </Button>
        </Link>
      </div>
    </section>
  )
}
