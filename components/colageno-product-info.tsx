interface ColagenoProductInfoProps {
  productType?: "tipo1" | "tipo2"
  imageUrl?: string
  altText?: string
}

export default function ColagenoProductInfo({ productType = "tipo1", imageUrl, altText }: ColagenoProductInfoProps) {
  const getProductImage = () => {
    if (imageUrl) return imageUrl

    switch (productType) {
      case "tipo2":
        return "/collagen-type-2-description.png"
      case "tipo1":
      default:
        return "/collagen-description.png"
    }
  }

  const getAltText = () => {
    if (altText) return altText

    switch (productType) {
      case "tipo2":
        return "Descrição completa do Colágeno Tipo 2 Renova Be"
      case "tipo1":
      default:
        return "Descrição completa do Colágeno Renova Be"
    }
  }

  console.log("[v0] ColagenoProductInfo - productType:", productType)
  console.log("[v0] ColagenoProductInfo - imageUrl:", getProductImage())

  return (
    <section className="bg-white py-8">
      <div className="w-full">
        <img
          src={getProductImage() || "/placeholder.svg"}
          alt={getAltText()}
          className="w-full h-auto object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>
    </section>
  )
}
