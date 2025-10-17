"use client"

import { Button } from "@/components/ui/button"
import { Star, Check } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

interface ProductImage {
  src: string
  alt: string
}

interface FlavorOption {
  value: string
  label: string
}

interface ProductHeroProps {
  images?: ProductImage[]
  title?: string
  originalPrice?: string
  currentPrice?: string
  installmentPrice?: string
  productType?: "collagen" | "creatine" | "tipo2" | "combo"
  pixPrice?: string
  customFlavorOptions?: FlavorOption[]
}

export default function ProductHero({
  images,
  title = "Creatina Morning Shot",
  originalPrice = "R$ 150,00",
  currentPrice = "R$ 99,90",
  installmentPrice = "R$ 20,00",
  productType = "creatine",
  pixPrice,
  customFlavorOptions,
}: ProductHeroProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedFlavor, setSelectedFlavor] = useState("")
  const pathname = usePathname()

  const getCheckoutUrl = () => {
    const checkoutUrls: { [key: string]: string } = {
      "/colageno-1-pote": "https://checkout.vendeagora.com/api/public/shopify?product=932073528582&store=9320",
      "/colageno-2-potes": "https://checkout.vendeagora.com/api/public/shopify?product=932011632526&store=9320",
      "/colageno-3-potes": "https://checkout.vendeagora.com/api/public/shopify?product=932089361789&store=9320",
      "/colageno-6-potes": "https://checkout.vendeagora.com/api/public/shopify?product=932097153661&store=9320",
      "/creatina-morning-shot": "https://checkout.vendeagora.com/api/public/shopify?product=932069642624&store=9320",
      "/creatina-balm-de-dores": "https://checkout.vendeagora.com/api/public/shopify?product=932099785772&store=9320",
      "/creatina-2-potes": "https://seguro.meurenovabe.shop/api/public/shopify?product=932048794962&store=9320",
      "/creatina-4-potes": "https://checkout.vendeagora.com/api/public/shopify?product=932039627439&store=9320",
      "/colageno-creatina-creme-retinol":
        "https://checkout.vendeagora.com/api/public/shopify?product=932057853875&store=9320",
      "/colageno-verisol-col-tipo-2":
        "https://checkout.vendeagora.com/api/public/shopify?product=932036745876&store=9320",
      "/colageno-verisol-omega-3": "https://checkout.vendeagora.com/api/public/shopify?product=932038482387&store=9320",
      "/creatina-colageno-tipo-2": "https://checkout.vendeagora.com/api/public/shopify?product=932034812987&store=9320",
      "/colageno-tipo-2-active-plus":
        "https://seguro.meurenovabe.shop/api/public/shopify?product=932074118495&store=9320",
      "/colageno-tipo-2-balm-de-dores": "https://seguro.meurenovabe.shop/checkout/Z-118VU10T2C25?",
      "/colageno-tipo-2-active-plus-2-potes":
        "https://checkout.vendeagora.com/api/public/shopify?product=932043962338&store=9320",
      "/colageno-tipo-2-active-plus-4-potes":
        "https://checkout.vendeagora.com/api/public/shopify?product=932076118495&store=9320",
      "/2-colageno-1-creatina": "https://seguro.meurenovabe.shop/api/public/shopify?product=932039618215&store=9320",
      "/3-colageno-1-espuma": "https://seguro.meurenovabe.shop/api/public/shopify?product=932076376257&store=9320",
      "/2-colageno-2-seruns-faciais":
        "https://seguro.meurenovabe.shop/api/public/shopify?product=932045681514&store=9320",
    }
    console.log("[v0] Current pathname:", pathname)
    console.log("[v0] Checkout URL for this page:", checkoutUrls[pathname])
    return checkoutUrls[pathname] || "#"
  }

  const handleCheckoutClick = () => {
    const checkoutUrl = getCheckoutUrl()
    if (checkoutUrl !== "#") {
      window.open(checkoutUrl, "_blank")
    }
  }

  const imageOptions = {
    collagen: [
      { src: "/collagen-verisol-bottle.png", alt: "Colágeno Verisol" },
      { src: "/collagen-verisol-two-bottles.png", alt: "Colágeno Verisol - 2 potes" },
      { src: "/collagen-complete-kit.png", alt: "Kit completo Colágeno" },
    ],
    creatine: [
      { src: "/creatina-new-1.webp", alt: "Creatina Morning Shot com Alívio Flex" },
      { src: "/creatina-new-2.webp", alt: "Creatina Morning Shot nas mãos" },
      { src: "/creatina-new-3.webp", alt: "Creatina Morning Shot com bebida preparada" },
    ],
    tipo2: [
      { src: "/collagen-type2-1.webp", alt: "Colágeno Tipo II Active Plus" },
      { src: "/collagen-type2-2.webp", alt: "Colágeno Tipo II com Alívio Flex" },
      { src: "/collagen-type2-3.webp", alt: "Aplicação do Alívio Flex" },
      { src: "/collagen-type2-4.webp", alt: "Colágeno Tipo II - comprimidos" },
      { src: "/collagen-type2-5.webp", alt: "Colágeno Tipo II - frasco limpo" },
      { src: "/collagen-type2-6.webp", alt: "Colágeno Tipo II nas mãos" },
    ],
    combo: [
      { src: "/combo-product-1.webp", alt: "Kit Combo Completo" },
      { src: "/combo-product-2.webp", alt: "Kit Combo com frutas" },
      { src: "/combo-product-3.webp", alt: "Kit Combo lifestyle" },
    ],
  }

  const flavorOptions = {
    collagen: [
      { value: "cranberry", label: "Cranberry" },
      { value: "limao", label: "Limão" },
      { value: "tangerina", label: "Tangerina" },
      { value: "frutas-tropicais", label: "Frutas Tropicais" },
      { value: "pink-lemonade", label: "Pink Lemonade" },
    ],
    creatine: [
      { value: "abacaxi", label: "1x Creatina Abacaxi" },
      { value: "laranja", label: "1x Creatina Laranja" },
      { value: "limao-morango", label: "1x Creatina Limão com morango" },
    ],
    tipo2: [{ value: "natural", label: "Natural" }],
    combo: [
      { value: "cranberry", label: "Cranberry" },
      { value: "limao", label: "Limão" },
      { value: "tangerina", label: "Tangerina" },
      { value: "frutas-tropicais", label: "Frutas Tropicais" },
      { value: "pink-lemonade", label: "Pink Lemonade" },
    ],
  }

  const benefitsOptions = {
    collagen: [
      "Colágeno Verisol®",
      "Ácido hialurônico Haplex® Plus",
      "Contribui com uma pele mais jovem e hidratada",
      "Auxilia as unhas e fios a ficarem mais fortes",
    ],
    creatine: [
      "Promove ação termogênica",
      "Contribui com o aumento da disposição",
      "Ajuda a acelerar o metabolismo",
      "Auxilia na manutenção do foco",
    ],
    tipo2: [
      "Contribui com a melhora da saúde articular",
      "Ajuda no fortalecimento dos ossos e cartilagens",
      "Auxilia no aumento da flexibilidade",
      "Colabora com a redução das dores nas articulações",
    ],
    combo: ["Autocuidado diário", "Pele jovem", "Saúde e disposição", "Ajuda na redução de dores"],
  }

  const productImages = images || imageOptions[productType]

  const displayFlavorOptions = customFlavorOptions || flavorOptions[productType]

  return (
    <section className="bg-white py-4">
      <div className="px-4">
        <div className="flex flex-col gap-6 items-center">
          {/* Product Images */}
          <div className="w-full space-y-4">
            <div className="bg-gray-50 rounded-lg p-4 flex justify-center">
              <img
                src={productImages[selectedImageIndex].src || "/placeholder.svg"}
                alt={productImages[selectedImageIndex].alt}
                className="w-64 h-64 object-contain"
              />
            </div>
            <div className="flex gap-1 justify-center overflow-x-auto">
              {productImages.map((image, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImageIndex(i)}
                  className={`flex-shrink-0 w-12 h-12 bg-gray-100 rounded border-2 cursor-pointer transition-colors ${
                    selectedImageIndex === i ? "border-pink-500" : "border-transparent hover:border-pink-300"
                  }`}
                >
                  <img
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs text-gray-600">(Avalie agora!)</span>
            </div>

            <h1 className="text-xl font-bold text-gray-900 text-left leading-tight">{title}</h1>

            {/* Benefits */}
            <div className="space-y-2">
              {benefitsOptions[productType].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-sm text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 text-left">
              <div className="text-sm text-gray-500 line-through">{originalPrice}</div>
              <div className="flex items-center gap-3">
                <div className="text-2xl font-bold text-gray-900">{currentPrice}</div>
                <div className="relative"></div>
              </div>
              <div className="text-xs text-gray-600 space-y-1">
                {pixPrice && <div className="text-sm text-green-600 font-medium">{pixPrice}</div>}
                <div className="flex items-center gap-2">
                  <img src="/card-icon.svg" alt="Cartão" className="w-4 h-4" />
                  <span>em até 6x de {installmentPrice}* </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-700 block text-left">Escolha o sabor:</label>
              <select
                className="w-full p-3 border border-gray-300 rounded-lg bg-white text-sm"
                value={selectedFlavor}
                onChange={(e) => setSelectedFlavor(e.target.value)}
              >
                <option value="">Sabor</option>
                {displayFlavorOptions.map((flavor) => (
                  <option key={flavor.value} value={flavor.value}>
                    {flavor.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Buy Button */}
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-base font-semibold"
              onClick={handleCheckoutClick}
            >
              COMPRE AGORA
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
