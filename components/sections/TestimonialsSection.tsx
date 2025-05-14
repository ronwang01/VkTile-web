import Image from "next/image"

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white via-accent/5 to-white"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-sm font-medium text-accent-foreground mb-4">
            <span className="mr-1">💬</span> Client Stories
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Hear from homeowners throughout the Seattle area who love their new tile work.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="rounded-3xl border-2 border-primary/10 bg-white p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-sm"></div>
                <Image
                  src="/johnson.jpg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="Customer"
                  className="rounded-full relative z-10"
                />
              </div>
              <div>
                <h3 className="font-bold">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground">Bellevue, WA</p>
              </div>
            </div>
            <div className="mt-4 text-muted-foreground relative">
              <span className="absolute -top-2 -left-2 text-4xl text-primary/20">❝</span>
              <p className="relative z-10 pl-4">
                &quot;VK Tile transformed our outdated bathroom into a spa-like retreat. The attention to detail was
                impressive, and they finished on time and on budget.&quot;
              </p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-3xl border-2 border-secondary/10 bg-white p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 rounded-full blur-sm"></div>
                <Image
                  src="/chen.jpg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="Customer"
                  className="rounded-full relative z-10"
                />
              </div>
              <div>
                <h3 className="font-bold">Michael Chen</h3>
                <p className="text-sm text-muted-foreground">Seattle, WA</p>
              </div>
            </div>
            <div className="mt-4 text-muted-foreground relative">
              <span className="absolute -top-2 -left-2 text-4xl text-secondary/20">❝</span>
              <p className="relative z-10 pl-4">
                &quot;The kitchen backsplash Vadim installed is the highlight of our remodel. Their team was
                professional, clean, and highly skilled.&quot;
              </p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-3xl border-2 border-accent/10 bg-white p-8 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-sm"></div>
                <Image
                  src="/rodriguez.jpg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="Customer"
                  className="rounded-full relative z-10"
                />
              </div>
              <div>
                <h3 className="font-bold">Emily Rodriguez</h3>
                <p className="text-sm text-muted-foreground">Redmond, WA</p>
              </div>
            </div>
            <div className="mt-4 text-muted-foreground relative">
              <span className="absolute -top-2 -left-2 text-4xl text-accent/20">❝</span>
              <p className="relative z-10 pl-4">
                &quot;We had tile installed throughout our main floor, and the results are stunning. Their
                craftsmanship is exceptional, and they were a pleasure to work with.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}