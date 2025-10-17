import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CustomerFeedback() {
  const testimonials = [
    {
      name: "Fer souza",
      rating: 5,
      text: "Os meus chegam na data certinha super amando 😍😍",
    },
    {
      name: "Barbara Oliveira Santos",
      rating: 5,
      text: "Maravilhoso cumpre o que promete, sinto que diminuiu as olheiras",
    },
    {
      name: "Lari Pereira",
      rating: 5,
      text: "Meus pais estão gostando demais do produto, foi uma ótima indicação 😍😍😍",
    },
    {
      name: "Ana Paula Gama",
      rating: 5,
      text: "Maravilhoso! Recebi de brinde por ter comprado o colágeno e estou amando. Textura suave e cheirinho agradável. Resultado visível em pouquíssimos dias.",
    },
    {
      name: "Mirian Soares",
      rating: 5,
      text: "Comprei e estou amando os resultados!!! Sem contar q é delicioso ❤️❤️❤️",
    },
    {
      name: "Ana Ferreira",
      rating: 4,
      text: "O meu chegou 😍 e já comecei a tomar. Simplesmente ameiiii 😍 delicioso 😍 Obrigada por me manter informada, chegou certinho 😍😍 'Me preparar para as próximas compras.' 🛒🛒",
    },
    {
      name: "Ana Cristina",
      rating: 5,
      text: "Estou gostando muito do colágeno, tenho sentido minha pele com aparência ótima, estava me sentindo mal com algumas rugas no olho e já não vejo mais tantas marcas de envelhecimento rsrs está acabando e preciso comprar outro já.",
    },
    {
      name: "Zildete Dantas Henrique",
      rating: 5,
      text: "Muito bom tou amando chegar rápido Ótimo atendimento parabéns para renovar 😍😍😍😍",
    },
    {
      name: "Lilian Rosária de Souza",
      rating: 5,
      text: "Muito bom! Tem feito Maravilha pela minha pele,cabelo e unha além de delicioso!",
    },
    {
      name: "Letícia Oliveira da Silva",
      rating: 5,
      text: "Vale super a pena comprar , o produto chegou muito rápido e a qualidade é ótima , o gosto é maravilhoso, super recomendo ❤️❤️",
    },
    {
      name: "Josiane Lopes de Santana Melo",
      rating: 5,
      text: "Super recomendo, chegou tudo certinho, a entrega demorou um pouco mas chegou e eu amei, com certeza comprarei novamente.",
    },
    {
      name: "Pri Dibuono",
      rating: 5,
      text: "Unhas e cabelos mais fortes, minha pele melhorou extraordinariamente muito, indico pra todo mundo ! Amando demais os resultados. Há anos minhas unhas não cresciam fortes como agora, sempre quebrava em camadas... pelo firme... esse colágeno é demais 😍",
    },
    {
      name: "Ana Paula Gama",
      rating: 5,
      text: "Recebi de brinde por ter comprado o colágeno e estou amando. Textura maravilhosa e cheirinho super agradável. Resultado visível em pouquíssimo tempo.",
    },
    {
      name: "Alexandrina Moreira",
      rating: 5,
      text: "Super recomendo o site Renovabe ( produtos de credibilidade) entregue em tempo hábil... Uso o colágeno verisol, e realmente o resultado é satisfatório qto ao crescimento do cabelo / unhas e textura da pele. Todos os sabores são ótimos... o meu preferido é de limão.",
    },
  ]

  return (
    <section className="p-6 bg-gray-50">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">O que nossos clientes estão</h2>
        <h3 className="text-2xl font-bold mb-4 text-gray-800">dizendo sobre nós</h3>

        <div className="flex items-center justify-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-pink-500 text-pink-500" />
          ))}
        </div>
        <p className="text-sm text-gray-600 mb-4">(240.219 avaliações)</p>

        

        <Button className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg mb-8">
          FAZER AVALIAÇÃO
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-4 rounded-lg">
            <div className="mb-3">
              <h4 className="font-bold text-gray-800 mb-2">{testimonial.name}</h4>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating ? "fill-pink-500 text-pink-500" : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
