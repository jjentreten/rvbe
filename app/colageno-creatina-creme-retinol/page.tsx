import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductHero from "@/components/product-hero"
import ColagenoProductInfo from "@/components/colageno-product-info"

export default function CollagenProductPage() {
  const onePotImages = [
    { src: "/combo-product-1.webp", alt: "Kit Colágeno + Creatina + Creme - Conjunto Completo" },
    { src: "/combo-product-2.webp", alt: "Colágeno com Ácido Hialurônico - Frutas Tropicais" },
    { src: "/combo-product-3.webp", alt: "Colágeno com Ácido Hialurônico - Pink Lemonade" },
    { src: "/combo-product-4.webp", alt: "Creatina Morning Shot - Sabor Abacaxi" },
    { src: "/combo-product-5.webp", alt: "Creme Facial com Retinol Hialurônico" },
    { src: "/combo-product-6.webp", alt: "Aplicação do Creme Facial" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductHero
        images={onePotImages}
        title="Kit Colágeno Verisol® + Creatina Morning Shot + Creme Retinol"
        originalPrice="R$ 359,90"
        currentPrice="R$ 169,90"
        installmentPrice="R$ 35,39"
        productType="combo"
        pixPrice="R$ 161,41 no pix"
      />

      <ColagenoProductInfo />

      <Footer />
    </div>
  )
}
