import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductHero from "@/components/product-hero"
import ColagenoProductInfo from "@/components/colageno-product-info"

export default function CollagenProductPage() {
  const onePotImages = [
    { src: "/verisol-combo-1.webp", alt: "Kit Colágeno Verisol + Colágeno Tipo 2 + Creme - Conjunto Completo" },
    { src: "/verisol-combo-2.webp", alt: "Colágeno com Ácido Hialurônico - Frutas Tropicais" },
    { src: "/verisol-combo-3.webp", alt: "Colágeno com Ácido Hialurônico - Pink Lemonade" },
    { src: "/verisol-combo-4.webp", alt: "Mulher com Colágeno Tipo 2 Active Plus" },
    { src: "/verisol-combo-5.webp", alt: "Colágeno Tipo 2 Active Plus - Comprimidos" },
    { src: "/verisol-combo-6.webp", alt: "Creme Facial com Retinol Hialurônico" },
    { src: "/verisol-combo-7.webp", alt: "Aplicação do Creme Facial" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductHero
        images={onePotImages}
        title="Kit Colágeno Verisol® + Colágeno Tipo 2 + Creme Retinol"
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
