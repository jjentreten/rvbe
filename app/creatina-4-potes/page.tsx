import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductHero from "@/components/product-hero"
import ProductInfo from "@/components/product-info"
import NutritionalInfo from "@/components/nutritional-info"
import ActiveIngredients from "@/components/active-ingredients"
import WhyUseCollagen from "@/components/why-use-collagen"

export default function CreatineMorningShotPage() {
  const creatineImages = [
    { src: "/creatina-4potes-1.webp", alt: "Kit 4 Creatina Morning Shot + Alívio Flex + Creatine Flex" },
    { src: "/creatina-new-2.webp", alt: "Creatina Morning Shot nas mãos" },
    { src: "/creatina-new-3.webp", alt: "Creatina Morning Shot com bebida preparada" },
    { src: "/creatina-new-4.webp", alt: "Três sabores de Creatina Morning Shot" },
    { src: "/creatina-new-5.webp", alt: "Creatina sabor laranja e limão com morango" },
    { src: "/creatina-new-6.webp", alt: "Creatina Morning Shot com garrafa de água" },
  ]

  const creatineInfo = [
    "Turbine a sua rotina com a Creatina + Morning Shot Renova Be! Os ativos mais poderosos e seguros para os seus cuidados diários. Suplemento em pó para auxílio na produção de energia com creatina + 10 ingredientes potentes de ação estimulante e termogênica, como hibisco, chá-verde, guaraná e guaraná em pó, desenvolvido para dar mais ânimo à sua rotina.",

    "Proporciona efeito termogênico: Os ativos da fórmula contribuem com a potencialização da produção de calor, e como consequência, com o aumento da queima de gordura. Colabora com o aumento da disposição: A fusão dos ingredientes proporciona a elevação da produção de energia no corpo, potencializando o desempenho físico e mental durante a rotina.",

    "Promove a aceleração do metabolismo: Por possuir ingredientes com atributos estimulantes e termogênicos, ajuda a acelerar o metabolismo energético. Contribui com a constância do foco: A fórmula com agentes naturais de ação estimulante combinados, contribui com a elevação e manutenção do foco e energia para as atividades rotineiras.",

    "Favorece o aumento da imunidade: As propriedades imunizantes da união de ativos que fortalecem o sistema imunológico, auxiliam na melhoria das defesas do organismo. A combinação ideal para um dia mais produtivo e ativo. Disponível nos sabores laranja e limão com morango.",

    "Importância no seu dia-a-dia: Oferece os ingredientes essenciais para estimular a disposição e o movimento durante a prática de exercícios e atividades do dia a dia. Indicado para proporcionar uma dose extra de foco e energia na execução de atividades realizadas diariamente e durante o desempenho nas atividades físicas.",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductHero
        images={creatineImages}
        title="4 Creatinas + Morning Shot + 1 Balm de Dores"
        originalPrice="R$ 607,70"
        currentPrice="R$ 249,80"
        installmentPrice="R$ 52,04"
        pixPrice="R$ 237,31 no pix"
      />
      <ProductInfo paragraphs={creatineInfo} />
      <WhyUseCollagen />
      <NutritionalInfo />
      <ActiveIngredients />
      <Footer />
    </div>
  )
}
