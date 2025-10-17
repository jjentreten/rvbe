import { Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="text-white p-6" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="mb-6">
        <div className="flex items-center mb-4">
          <img src="/renovabe-logo.svg" alt="RenovaBE" className="h-10" />
        </div>
        <p className="text-sm text-gray-400 mb-4">© 2025 VITA BE COSMÉTICOS LTDA.</p>

        <div className="text-sm text-gray-400 mb-4">
          <p>Av Onze de Agosto, 1451</p>
          <p>Sala 707 Edif Eliopar - Jardim Ribeiro</p>
          <p>CEP: 13.270-190 - Valinhos, SP - Brasil</p>
        </div>

        <p className="text-sm text-gray-400 mb-6">CNPJ: 14.144.597/0001-52</p>

        <div className="mb-6">
          <p className="text-lg font-bold mb-4">Segue a gente lá</p>
          <div className="flex gap-4">
            <Facebook className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
            <Youtube className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 text-sm">
        <div>
          <h4 className="font-bold mb-3">Links Úteis</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Atendimento</li>
            <li>Rastreio</li>
            <li>Meus Pedidos</li>
            <li>Perguntas Frequentes</li>
            <li>Políticas de Privacidade</li>
            <li>Termos e Condições</li>
            <li>Quem Somos</li>
            <li>Trabalhe Conosco</li>
            <li>Blog Renova Be</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Relacionamento</h4>
          <div className="text-gray-400 space-y-2">
            <div className="text-xs">
              <p className="font-bold">Horário de atendimento:</p>
              <p>De segunda a quinta</p>
              <p>das 9h00 às 18h00.</p>
              <p>Sexta-feira, das 9h00 às</p>
              <p>17h00.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-800">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <img src="/ra1000-certificate.png" alt="ReclameAqui RA1000" className="h-10" />
          </div>
          <div className="flex items-center gap-2">
            <img src="/google-safe-browsing.png" alt="Google Safe Browsing" className="h-10" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center gap-2">
            <img src="/cruelty-free-certificate.png" alt="Cruelty Free" className="h-10" />
          </div>
          <div className="flex items-center gap-2">
            <img src="/ssl-certificate.png" alt="Site Protegido SSL" className="h-10" />
          </div>
        </div>
      </div>
    </footer>
  )
}
