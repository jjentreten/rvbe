import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function Newsletter() {
  return (
    <section className="text-white p-6 bg-[rgba(26,26,26,1)]">
      <div className="max-w-md mx-auto">
        <div className="bg-pink-500 rounded-2xl p-6 mb-8 relative">
          <div className="flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 mt-1">
              <Image src="/icone-newsletter.svg" alt="Newsletter" width={48} height={48} className="w-12 h-12" />
            </div>
            <div>
              <h2 className="text-white text-lg font-bold leading-tight">
                Assine nossa
                <br />
                newsletter para ficar
                <br />
                por dentro das
                <br />
                novidades.
              </h2>
            </div>
          </div>

          <div className="space-y-3">
            <Input
              type="text"
              placeholder="Nome e sobrenome"
              className="w-full p-3 rounded-lg border-0 bg-white text-gray-800 placeholder-gray-500"
            />
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              className="w-full p-3 rounded-lg border-0 bg-white text-gray-800 placeholder-gray-500"
            />
            <Button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-3 rounded-lg">
              Cadastrar!
            </Button>
          </div>
        </div>

        
      </div>
    </section>
  )
}
