import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductHero from "@/components/product-hero"
import ColagenoProductInfo from "@/components/colageno-product-info"
import CountdownTimer from "@/components/countdown-timer"

export default function CollagenProductPage() {
  const twoPotImages = [
    {
      src: "/colageno-verisol-cranberry-creatina-kit-2-potes.jpg",
      alt: "2x Colágenos Verisol Cranberry + Frutas Tropicais + 2x Séruns Faciais",
    },
    { src: "/product-2.webp", alt: "Colágeno Cranberry" },
    { src: "/product-3.webp", alt: "Colágeno Frutas Tropicais" },
    { src: "/product-4.webp", alt: "Colágeno Limão" },
    { src: "/product-5.webp", alt: "Colágeno Pink Lemonade" },
    { src: "/product-6.webp", alt: "Colágeno Tangerina" },
  ]

  const customFlavorOptions = [
    {
      value: "cranberry-creatina",
      label: "2x Colágenos Verisol Cranberry + 1x Creatina + 3x Séruns",
    },
    {
      value: "cranberry-frutas-tropicais-creatina",
      label: "2x Colágenos Verisol Cranberry + Frutas Tropicais + 1x Creatina + 3x Séruns",
    },
    {
      value: "frutas-tropicais-creatina",
      label: "2x Colágenos Verisol Frutas Tropicais + 1x Creatina + 3x Séruns",
    },
    {
      value: "limao-creatina",
      label: "2x Colágenos Verisol Limão + 1x Creatina + 3x Séruns",
    },
    {
      value: "limao-tangerina-creatina",
      label: "2x Colágenos Verisol Limão + Tangerina + 1x Creatina + 3x Séruns",
    },
    {
      value: "pink-lemonade-cranberry-creatina",
      label: "2x Colágenos Verisol Pink Lemonade + Cranberry + 1x Creatina + 3x Séruns",
    },
    {
      value: "pink-lemonade-creatina",
      label: "2x Colágenos Verisol Pink Lemonade + 1x Creatina + 3x Séruns",
    },
    {
      value: "pink-lemonade-frutas-tropicais-creatina",
      label: "2x Colágenos Verisol Pink Lemonade + Frutas Tropicais + 1x Creatina + 3x Séruns",
    },
    {
      value: "tangerina-creatina",
      label: "2x Colágenos Verisol Tangerina + 1x Creatina + 3x Séruns",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 pt-8">
        <CountdownTimer />
      </div>

      <ProductHero
        images={twoPotImages}
        title="2x Colágenos Verisol®+ 1x Creatina + 3x Séruns"
        originalPrice="R$ 389,80"
        currentPrice="R$ 199,90"
        installmentPrice="R$ 41,65"
        productType="collagen"
        pixPrice="R$ 189,91 no pix"
        customFlavorOptions={customFlavorOptions}
      />

      <ColagenoProductInfo />

      <Footer />
    </div>
  )
}
