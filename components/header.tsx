import { Menu, Search, ShoppingCart } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex items-center justify-between">
      <Menu className="w-6 h-6" />
      <Link href="/" className="flex items-center cursor-pointer hover:opacity-80 transition-opacity">
        <img src="/renovabe-logo.svg" alt="RenovaBE" className="h-8" />
      </Link>
      <div className="flex items-center gap-4">
        <Search className="w-6 h-6" />
        <ShoppingCart className="w-6 h-6" />
      </div>
    </header>
  )
}
