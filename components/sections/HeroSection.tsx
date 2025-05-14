import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Construction } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-white via-muted to-white overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] relative">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-sm font-medium text-accent-foreground mb-4 w-fit">
              <span className="mr-1">✨</span> Professional Tile Installation
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                Beautiful Tiles for Your Home
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Quality craftsmanship, attention to detail, and exceptional customer service for all your tiling
                needs. Fully bonded and insured for your peace of mind.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <a href="/#contact">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 text-white"
                >
                  Get Free Quote <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </a>
              <div className="relative">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 py-6 border-2 hover:bg-accent/10 transition-all duration-300"
                >
                  View Our Work
                </Button>
                <div className="absolute -top-2 -right-2 bg-yellow-500/90 text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                  <Construction className="h-3 w-3" />
                  <span>Under Construction</span>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 blur-2xl rounded-full transform -rotate-6"></div>
            <Image
              src="/hero.jpg"
              width={600}
              height={904}
              alt="Hero Image"
              className="mx-auto aspect-video overflow-hidden rounded-3xl object-cover sm:w-full lg:order-last blob-shape shadow-xl relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}