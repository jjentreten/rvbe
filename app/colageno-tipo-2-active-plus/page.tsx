import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductHero from "@/components/product-hero"
import ColagenoProductInfo from "@/components/colageno-product-info"

export default function CollagenProductPage() {
  const onePotImages = [
    { src: "/collagen-type2-2.webp", alt: "Colágeno Tipo 2 com Alívio Flex" }, // Originally 1.webp
    { src: "/collagen-type2-5.webp", alt: "Colágeno Tipo 2 fundo branco" }, // Originally 2.webp
    { src: "/collagen-type2-4.webp", alt: "Colágeno Tipo 2 frasco completo" }, // Originally 3.webp
    { src: "/collagen-type2-1.webp", alt: "Colágeno Tipo 2 Active Plus" }, // Originally 4.webp
    { src: "/collagen-type2-6.webp", alt: "Colágeno Tipo 2 nas mãos" }, // Originally 5.webp
    { src: "/collagen-type2-3.webp", alt: "Colágeno Tipo 2 com comprimidos" }, // Originally 6.webp
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductHero
        images={onePotImages}
        title="1 Pote de Colágeno Tipo 2 Active Plus"
        originalPrice="R$ 149,90"
        currentPrice="R$ 109,90"
        installmentPrice="R$ 22,89"
        productType="tipo2"
        pixPrice="R$ 104,41 no pix"
      />

      <ColagenoProductInfo productType="tipo2" />

      <Footer />
    </div>
  )
}
