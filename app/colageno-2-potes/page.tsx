import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductHero from "@/components/product-hero"
import ColagenoProductInfo from "@/components/colageno-product-info"
import CountdownTimer from "@/components/countdown-timer"

export default function CollagenProductPage() {
  const twoPotImages = [
    { src: "/colageno-2-potes-kit.jpeg", alt: "Colágeno 2 Potes Cranberry Kit" },
    { src: "/product-2.webp", alt: "Colágeno Cranberry" },
    { src: "/product-3.webp", alt: "Colágeno Frutas Tropicais" },
    { src: "/product-4.webp", alt: "Colágeno Limão" },
    { src: "/product-5.webp", alt: "Colágeno Pink Lemonade" },
    { src: "/product-6.webp", alt: "Colágeno Tangerina" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 pt-8">
        <CountdownTimer />
      </div>

      <ProductHero
        images={twoPotImages}
        title="Colágeno Verisol® com Ácido Hialurônico - Kit 2 Potes + 1 Creme Facial"
        originalPrice="R$ 307,60"
        currentPrice="R$ 109,90"     
        installmentPrice="R$ 22,89"
        productType="collagen"
        pixPrice="R$ 104,41 no pix"
      />

      <ColagenoProductInfo />

      <Footer />
    </div>
  )
}
