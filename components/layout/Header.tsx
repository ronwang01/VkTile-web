import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Diamond, Phone } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-2 rounded-full">
            <Diamond className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-primary">
            <Link href="#">V.K-Tile</Link>
          </span>
        </div>

        <nav className="hidden md:flex gap-6">
          <Link
            href="#features"
            className="text-sm font-medium hover:text-primary transition-colors duration-200 relative group"
          >
            Services
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-primary transition-colors duration-200 relative group"
          >
            Testimonials
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium hover:text-primary transition-colors duration-200 relative group"
          >
            Pricing
            <span className="absolute -bottom-1 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-300"></span>
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4 text-sm font-medium">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" />
              <a href="tel:+14252315857" className="hover:text-primary transition-colors duration-200">(425) 231-5857</a>
            </div>
          </div>
          <a href="mailto:vktilesateverett@gmail.com">
            <Button className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
              Get Started
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}