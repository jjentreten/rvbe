import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductHero from "@/components/product-hero"
import ColagenoProductInfo from "@/components/colageno-product-info"

export default function CollagenProductPage() {
  const threePotImages = [
    { src: "/colageno-3-potes-kit.jpeg", alt: "Colágeno 3 Potes Kit Completo" },
    { src: "/product-2.webp", alt: "Colágeno Cranberry" },
    { src: "/product-3.webp", alt: "Colágeno Frutas Tropicais" },
    { src: "/product-4.webp", alt: "Colágeno Limão" },
    { src: "/product-5.webp", alt: "Colágeno Pink Lemonade" },
    { src: "/product-6.webp", alt: "Colágeno Tangerina" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductHero
        images={threePotImages}
        title="Colágeno Verisol® com Ácido Hialurônico - Kit 3 Potes + Skincare Completo"
        originalPrice="R$ 490,00"
        currentPrice="R$ 249,90"
        installmentPrice="R$ 52,06"
        productType="collagen"
        pixPrice="R$ 237,41 no pix"
      />
      <ColagenoProductInfo />
      <Footer />
    </div>
  )
}
