import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart, PieChart, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-serif font-bold">
          Empowering SaaS and Startups with Strategic Financial Insights
        </h1>
        <p className="text-xl">
          Hi, I'm Carina Edington, a seasoned financial modeller based in London. I specialize in helping companies
          plan, model, budget, and optimize their internal financial operations.
        </p>
        <p className="text-xl">
          With a track record of assisting clients worldwide, I bring clarity to complex financial landscapes, enabling
          businesses to make informed decisions and drive sustainable growth.
        </p>
      </section>
      <div className="flex space-x-4">
        <Button asChild>
          <Link href="/contact">Get in Touch</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/services">Explore Services</Link>
        </Button>
      </div>
      <section className="mt-16">
        <h2 className="text-3xl font-serif font-bold mb-8">How I Can Help Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Financial Modeling</CardTitle>
              <CardDescription>Gain clarity on your financial future</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChart className="w-12 h-12 mb-4" />
              <p>
                Develop comprehensive financial models tailored to your business needs, enabling accurate forecasting
                and strategic decision-making.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Budgeting & Planning</CardTitle>
              <CardDescription>Optimize resource allocation</CardDescription>
            </CardHeader>
            <CardContent>
              <PieChart className="w-12 h-12 mb-4" />
              <p>
                Create detailed budgets and financial plans that align with your business goals, ensuring efficient use
                of resources and maximizing ROI.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Growth Strategy</CardTitle>
              <CardDescription>Scale your business effectively</CardDescription>
            </CardHeader>
            <CardContent>
              <TrendingUp className="w-12 h-12 mb-4" />
              <p>
                Develop and implement growth strategies backed by solid financial analysis, helping your business scale
                sustainably in competitive markets.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className="mt-16 text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">Ready to Transform Your Financial Strategy?</h2>
        <p className="text-xl mb-8">Let's collaborate to unlock your business's full potential.</p>
      </section>
    </div>
  )
}

