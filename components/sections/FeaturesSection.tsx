import { CheckCircle } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary text-sm font-medium text-white mb-4">
            <span className="mr-1">🛠️</span> Our Services
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Expert Tiling Services
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              We provide comprehensive tiling solutions for bathrooms, kitchens, floors, and more.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-8 py-12 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="rounded-3xl border-2 border-primary/10 bg-white p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Bathroom Remodeling</h3>
            <p className="text-muted-foreground">
              Complete bathroom tiling solutions including showers, floors, and decorative accents.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="rounded-3xl border-2 border-secondary/10 bg-white p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10">
              <CheckCircle className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Kitchen Backsplashes</h3>
            <p className="text-muted-foreground">
              Beautiful, functional backsplashes that protect your walls and enhance your kitchen's style.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="rounded-3xl border-2 border-accent/10 bg-white p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
              <CheckCircle className="h-7 w-7 text-accent-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Floor Installation</h3>
            <p className="text-muted-foreground">
              Durable, beautiful tile flooring for entryways, kitchens, bathrooms, and living spaces.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}