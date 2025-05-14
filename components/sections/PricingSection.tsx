import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function PricingSection() {
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-sm font-medium text-white mb-4">
            <span className="mr-1">💰</span> Our Packages
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Our Service Packages
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Choose the service that fits your needs. All packages include free consultation and estimates.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-3">
          {/* Free Consultation */}
          <div className="rounded-3xl border-2 border-primary/10 bg-white p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-primary">Free Consultation</h3>
              <p className="text-muted-foreground">Expert advice for your project</p>
            </div>
            <div className="mb-4">
              <span className="text-4xl font-bold">$0</span>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <span>In-home consultation</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <span>Project assessment</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <span>Material recommendations</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                <span>Free estimate</span>
              </li>
            </ul>
            <a href="/#contact">
              <Button className="w-full rounded-full bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300">
                Book Appointment
              </Button>
            </a>
          </div>

          {/* Standard Plan */}
          <div className="rounded-3xl border-2 border-secondary/10 bg-white p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            {/* <div className="absolute -top-5 left-0 right-0 mx-auto w-fit rounded-full bg-secondary px-4 py-1 text-sm font-medium text-white">
              Most Popular
            </div> */}
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-secondary">Full Bathroom</h3>
              <p className="text-muted-foreground">Complete bathroom renovation</p>
            </div>
            <div className="mb-4">
              <span className="text-4xl font-bold">$3,500+</span>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-secondary" />
                <span>Shower walls and floor</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-secondary" />
                <span>Bathroom floor tiling</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-secondary" />
                <span>Custom design options</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-secondary" />
                <span>3-year warranty</span>
              </li>
            </ul>
            <a href="/#contact">
              <Button className="w-full rounded-full bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/20 hover:shadow-secondary/40 transition-all duration-300">
                Get Quote
              </Button>
            </a>
          </div>

          {/* Premium Plan */}
          <div className="rounded-3xl border-2 border-accent/10 bg-white p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-accent-foreground">Whole Home</h3>
              <p className="text-muted-foreground">Multiple room installation</p>
            </div>
            <div className="mb-4">
              <span className="text-4xl font-bold">$7,000+</span>
            </div>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-accent-foreground" />
                <span>Multiple rooms or areas</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-accent-foreground" />
                <span>Premium tile selection</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-accent-foreground" />
                <span>Complex patterns available</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 h-5 w-5 text-accent-foreground" />
                <span>5-year warranty</span>
              </li>
            </ul>
            <a href="/#contact">
              <Button className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-all duration-300">
                Get Quote
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}