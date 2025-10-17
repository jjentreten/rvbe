import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductHero from "@/components/product-hero"
import ColagenoProductInfo from "@/components/colageno-product-info"

export default function CollagenProductPage() {
  const onePotImages = [
    { src: "/omega3-combo-1.webp", alt: "Kit Colágeno Verisol + Ômega 3 + Creme - Conjunto Completo" },
    { src: "/omega3-combo-2.webp", alt: "Colágeno com Ácido Hialurônico - Frutas Tropicais" },
    { src: "/omega3-combo-3.webp", alt: "Colágeno com Ácido Hialurônico - Pink Lemonade" },
    { src: "/omega3-combo-4.webp", alt: "Mulher com Ômega 3 EPA/DHA + Vita E" },
    { src: "/omega3-combo-5.webp", alt: "Ômega 3 com Alimentos Ricos em Ômega 3" },
    { src: "/omega3-combo-6.webp", alt: "Creme Facial com Retinol Hialurônico" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductHero
        images={onePotImages}
        title="Kit Colágeno Verisol® + Ômega 3 + Creme Retinol"
        originalPrice="R$ 329,90"
        currentPrice="R$ 129,90"
        installmentPrice="R$ 27,06"
        productType="combo"
        pixPrice="R$ 123,41 no pix"
      />

      <ColagenoProductInfo />

      <Footer />
    </div>
  )
}
