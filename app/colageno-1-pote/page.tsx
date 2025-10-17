import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductHero from "@/components/product-hero"
import ColagenoProductInfo from "@/components/colageno-product-info"

export default function CollagenProductPage() {
  const onePotImages = [
    { src: "/colageno-1-pote-single.jpeg", alt: "Colágeno 1 Pote Cranberry Kit" },
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
        images={onePotImages}
        title="Colágeno Verisol® com Ácido Hialurônico + 1 Creme Facial"
        originalPrice="R$ 139,90"
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
