import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductHero from "@/components/product-hero"
import ColagenoProductInfo from "@/components/colageno-product-info"
import CountdownTimer from "@/components/countdown-timer"

export default function CollagenProductPage() {
  const twoPotImages = [
    {
      src: "/colageno-3-potes-espuma-seruns-kit.png",
      alt: "3x Colágenos Verisol Cranberry + 1x Espuma + 3x Séruns Faciais",
    },
    { src: "/product-2.webp", alt: "Colágeno Cranberry" },
    { src: "/product-3.webp", alt: "Colágeno Frutas Tropicais" },
    { src: "/product-4.webp", alt: "Colágeno Limão" },
    { src: "/product-5.webp", alt: "Colágeno Pink Lemonade" },
    { src: "/product-6.webp", alt: "Colágeno Tangerina" },
  ]

  const customFlavorOptions = [
    {
      value: "cranberry",
      label: "3x Colágenos Verisol Cranberry + 1x Espuma + 3x Séruns",
    },
    {
      value: "frutas-tropicais",
      label: "3x Colágenos Verisol Frutas Tropicais + 1x Espuma + 3x Séruns",
    },
    {
      value: "limao",
      label: "3x Colágenos Verisol Limão + 1x Espuma + 3x Séruns",
    },
    {
      value: "limao-cranberry-tangerina",
      label: "3x Colágenos Verisol Limão + Cranberry + Tangerina + 1x Espuma + 3x Séruns",
    },
    {
      value: "frutas-tropicais-cranberry-tangerina",
      label: "3x Colágenos Verisol Frutas Tropicais + Cranberry + Tangerina + 1x Espuma + 3x Séruns",
    },
    {
      value: "frutas-tropicais-cranberry-pink-lemonade",
      label: "3x Colágenos Verisol Frutas Tropicais + Cranberry + Pink Lemonade + 1x Espuma + 3x Séruns",
    },
    {
      value: "pink-lemonade",
      label: "3x Colágenos Verisol Pink Lemonade + 1x Espuma + 3x Séruns",
    },
    {
      value: "tangerina",
      label: "3x Colágenos Verisol Tangerina + 1x Espuma + 3x Séruns",
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
        title="3x Colágenos Verisol®+ 1x Espuma + 3x Séruns"
        originalPrice="R$ 617,40"
        currentPrice="R$ 229,90"
        installmentPrice="R$ 47,90"
        productType="collagen"
        pixPrice="R$ 218,40 no pix"
        customFlavorOptions={customFlavorOptions}
      />

      <ColagenoProductInfo />

      <Footer />
    </div>
  )
}
