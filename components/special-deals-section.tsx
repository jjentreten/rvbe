"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { Flame } from "lucide-react"

export default function SpecialDealsSection() {
  const router = useRouter()

  const deals = [
    {
      id: 1,
      title: "2x Colágenos Verisol® + 1x Creatina + 3x Séruns",
      image: "/2-col-1-creatina-3-seruns.jpg",
      discount: "60% OFF",
      originalPrice: "R$ 587,20",
      pixPrice: "R$ 189,91",
      installmentPrice: "R$ 41,65",
      route: "/2-colageno-1-creatina",
      badge: "Kit mais vendido",
      description: "Colágeno + Creatina Morning Shot + Creme Retinol Hialurônico",
    },
    {
      id: 2,
      title: "3x Colágenos Verisol® + 1x Espuma + 3x Séruns",
      image: "/3-col-1-espuma-3-seruns.jpg",
      discount: "56% OFF",
      originalPrice: "R$ 617,40",
      pixPrice: "R$ 218,40",
      installmentPrice: "R$ 47,90",
      route: "/3-colageno-1-espuma",
      badge: "Frete Grátis",
      description: "3 Potes + Sérum Facial + Creme Retinol + Espuma de Limpeza",
    },
    {
      id: 3,
      title: "2x Colágenos Verisol® + 2x Séruns Faciais",
      image: "/2-col-2-seruns.jpg",
      discount: "58% OFF",
      originalPrice: "R$ 389,80",
      pixPrice: "R$ 123,41",
      installmentPrice: "R$ 27,06",
      route: "/2-colageno-2-seruns-faciais",
      badge: "Frete Grátis",
      description: "Sabores disponíveis: Cranberry, Limão, Tangerina, Frutas Tropicais e Pink Lemonade",
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-bold mb-3 text-gray-900 text-2xl">Esquenta Black Friday começou!</h2>
          <p className="text-gray-600 text-sm">Aproveite a oportunidade de levar combos especiais</p>
        </div>

        {/* Products Grid - Horizontal scroll on mobile, 3 columns on desktop */}
        <div className="relative">
          {/* Mobile: Horizontal scroll */}
          <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            <div className="flex gap-4 pb-4">
              {deals.map((deal) => (
                <div key={deal.id} className="flex-shrink-0 w-[85vw] snap-center">
                  <DealCard deal={deal} router={router} />
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: 3 column grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <DealCard key={deal.id} deal={deal} router={router} />
            ))}
          </div>
        </div>

        {/* Scroll indicator for mobile */}
        <div className="md:hidden flex justify-center gap-2 mt-4">
          {deals.map((_, index) => (
            <div key={index} className="w-2 h-2 rounded-full bg-pink-300" />
          ))}
        </div>
      </div>
    </section>
  )
}

function DealCard({ deal, router }: { deal: any; router: any }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-100 h-full flex flex-col"
      onClick={() => router.push(deal.route)}
    >
      {/* Image and Badges Container */}
      <div className="relative p-4 bg-gradient-to-br from-gray-50 to-white">
        {/* Oferta 10.10 Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="relative">
            {deal.id === 1 ? (
              // Black Friday themed badge for first product
              <div className="bg-gradient-to-br from-black via-pink-600 to-orange-500 text-white py-2.5 px-4 rounded-xl shadow-lg animate-pulse">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-400" fill="currentColor" />
                  <div>
                    <div className="leading-tight text-white text-xs font-bold">ESQUENTA BLACK</div>
                    <div className="text-pink-100 text-[10px] leading-tight font-normal">APENAS HOJE!</div>
                  </div>
                </div>
              </div>
            ) : (
              // Original badge for other products
              <div className="bg-gradient-to-br from-black via-pink-600 to-orange-500 text-white py-2.5 px-4 rounded-xl shadow-lg animate-pulse">
                <div className="flex items-center gap-2">
                  <Flame className="w-5 h-5 text-orange-400" fill="currentColor" />
                  <div>
                    <div className="leading-tight text-white text-xs font-bold">ESQUENTA BLACK</div>
                    <div className="text-pink-100 text-[10px] leading-tight font-normal">APENAS HOJE!</div>
                  </div>
                </div>
              </div>
            )}
            <div
              className={`absolute -top-1 -right-1 w-3 h-3 rounded-full animate-ping ${deal.id === 1 ? "bg-orange-500" : "bg-yellow-400"}`}
            ></div>
          </div>
        </div>

        {/* Discount Badge */}
        <div className="absolute top-4 right-4 bg-yellow-400 text-black text-sm font-bold py-2 px-3 rounded-lg shadow-md z-10">
          {deal.discount}
        </div>

        {/* Product Image */}
        <img src={deal.image || "/placeholder.svg"} alt={deal.title} className="w-full h-56 md:h-64 object-contain" />

        {/* Additional Badge */}
        {deal.badge && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs font-semibold py-1.5 px-4 rounded-full shadow-md">
            {deal.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-base md:text-lg mb-2 text-gray-900 min-h-[3rem]">{deal.title}</h3>

        <p className="text-xs text-gray-600 mb-4 line-clamp-2">{deal.description}</p>

        {/* Pricing */}
        <div className="mt-auto">
          <p className="text-xs text-gray-500 line-through mb-1">de: {deal.originalPrice} por:</p>
          <p className="text-2xl md:text-3xl font-bold text-green-600 mb-1">
            {deal.pixPrice} <span className="text-sm font-normal">no pix</span>
          </p>
          <p className="text-xs text-gray-600 mb-4">ou até 6x {deal.installmentPrice}*</p>

          {/* CTA Button */}
          <Button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg w-full text-base shadow-md hover:shadow-lg transition-all duration-200"
            onClick={(e) => {
              e.stopPropagation()
              router.push(deal.route)
            }}
          >
            Comprar agora
          </Button>

          <p className="text-center text-xs text-gray-500 mt-3">✓ Oferta exclusiva! Por tempo limitado</p>
        </div>
      </div>
    </div>
  )
}
