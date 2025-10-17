import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductHero from "@/components/product-hero"
import ColagenoProductInfo from "@/components/colageno-product-info"
import CountdownTimer from "@/components/countdown-timer"

export default function CollagenProductPage() {
  const twoPotImages = [
    {
      src: "/colageno-cranberry-frutas-tropicais-kit.png",
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
      value: "cranberry-frutas-tropicais",
      label: "2x Colágenos Verisol Cranberry + Frutas Tropicais + 2x Séruns Faciais",
    },
    { value: "cranberry", label: "2x Colágenos Verisol Cranberry + 2x Séruns Faciais" },
    { value: "pink-lemonade-cranberry", label: "2x Colágenos Verisol Pink Lemonade + Cranberry + 2x Séruns Faciais" },
    { value: "frutas-tropicais", label: "2x Colágenos Verisol Frutas Tropicais + 2x Séruns Faciais" },
    { value: "limao", label: "2x Colágenos Verisol Limão + 2x Séruns Faciais" },
    { value: "tangerina-limao", label: "2x Colágenos Verisol Tangerina + Limão + 2x Séruns Faciais" },
    {
      value: "pink-lemonade-frutas-tropicais",
      label: "2x Colágenos Verisol Pink Lemonade + Frutas Tropicais + 2x Séruns Faciais",
    },
    { value: "pink-lemonade", label: "2x Colágenos Verisol Pink Lemonade + 2x Séruns Faciais" },
    { value: "tangerina", label: "2x Colágenos Verisol Tangerina + 2x Séruns Faciais" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 pt-8">
        <CountdownTimer />
      </div>

      <ProductHero
        images={twoPotImages}
        title="2x Colágenos Verisol®+ 2x Séruns Faciais"
        originalPrice="R$ 587,20"
        currentPrice="R$ 129,90"
        installmentPrice="R$ 27,06"
        productType="collagen"
        pixPrice="R$ 123,41 no pix"
        customFlavorOptions={customFlavorOptions}
      />

      <ColagenoProductInfo />

      <Footer />
    </div>
  )
}
