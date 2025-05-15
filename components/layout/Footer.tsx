import Link from "next/link"
import Image from "next/image"
import { Diamond, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-full">
                <Diamond className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl text-primary font-bold bg-clip-text">
                V.K-Tile
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Professional tile installation services for the greater Seattle area. Quality craftsmanship guaranteed.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.yelp.com/biz/v-k-tile-everett" target="_blank" className="text-primary hover:text-primary/80 transition-colors duration-200">
                <Image src="/yelp.svg" alt="Yelp" width={10} height={10} className="h-5 w-5" />
                <span className="sr-only">Yelp</span>
              </Link>

              <Link
                href="#"
                className="text-accent-foreground hover:text-accent-foreground/80 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Bathroom Tiling
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Kitchen Backsplashes
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Floor Installation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Custom Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-200">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-secondary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-accent-foreground">
              Areas We Serve
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground hover:text-accent-foreground transition-colors duration-200">
                Seattle, Bellevue, Redmond
              </li>
              <li className="text-muted-foreground hover:text-accent-foreground transition-colors duration-200">
                Marysville, Everett, Lynnwood
              </li>
              <li className="text-muted-foreground hover:text-accent-foreground transition-colors duration-200">

                Widbely island, Mukilteo, Mill Creek
              </li>
              <li className="text-muted-foreground hover:text-accent-foreground transition-colors duration-200">

                Aubrurn, Kent, Renton, and more...
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} V.K-Tile. All rights reserved.
        </div>
      </div>
    </footer>
  )
}