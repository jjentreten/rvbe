import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductHero from "@/components/product-hero"
import CreatineProductInfo from "@/components/creatine-product-info"

export default function CollagenProductPage() {
  const onePotImages = [
    {
      src: "/creatine-collagen-1.webp",
      alt: "Kit Creatina Morning Shot + Colágeno Tipo 2 + Alívio Flex - Conjunto Completo",
    },
    { src: "/creatine-collagen-2.webp", alt: "Creatina + Morning Shot em Pó - Detalhes do Produto" },
    { src: "/creatine-collagen-3.webp", alt: "Homem com Creatina + Morning Shot Sabor Abacaxi" },
    { src: "/creatine-collagen-4.webp", alt: "Mulher com Colágeno Tipo 2 Active Plus" },
    { src: "/creatine-collagen-5.webp", alt: "Aplicação do Alívio Flex Active Plus nas Pernas" },
    { src: "/creatine-collagen-6.webp", alt: "Creme Alívio Flex Active Plus - Aplicação no Braço" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductHero
        images={onePotImages}
        title="Kit Creatina Morning Shot + Colágeno Tipo 2 + Balm de Dores"
        originalPrice="R$ 369,90"
        currentPrice="R$ 179,90"
        installmentPrice="R$ 37,47"
        productType="combo"
        pixPrice="R$ 170,91 no pix"
      />

      <CreatineProductInfo />

      <Footer />
    </div>
  )
}
