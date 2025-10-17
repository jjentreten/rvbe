import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductHero from "@/components/product-hero"
import ColagenoProductInfo from "@/components/colageno-product-info"

export default function CollagenProductPage() {
  const sixPotImages = [
    { src: "/product-1.webp", alt: "Colágeno 6 Potes Kit Premium" },
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
        images={sixPotImages}
        title="Colágeno Verisol® com Ácido Hialurônico - Kit Premium 6 Potes + Skincare Completo"
        originalPrice="R$ 1.037,70"
        currentPrice="R$ 469,90"
        installmentPrice="R$ 97,89"
        productType="collagen"
        pixPrice="R$ 446,41 no pix"
      />
      <ColagenoProductInfo />
      <Footer />
    </div>
  )
}
