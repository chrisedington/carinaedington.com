import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, BarChart2, PieChart, TrendingUp, DollarSign, FileText, Users } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Financial Modelling",
      description:
        "Develop comprehensive financial models to forecast and analyze your business's financial performance.",
      icon: BarChart2,
      features: [
        "Custom-built models tailored to your business",
        "Scenario analysis and sensitivity testing",
        "Clear visualizations and dashboards",
      ],
    },
    {
      title: "Zero-Based Budgets",
      description: "Create efficient budgets from the ground up, ensuring every dollar is accounted for and justified.",
      icon: PieChart,
      features: [
        "Detailed cost analysis and optimization",
        "Resource allocation strategies",
        "Regular budget reviews and adjustments",
      ],
    },
    {
      title: "Fractional CFO Services",
      description: "Get the expertise of a seasoned CFO without the full-time commitment.",
      icon: Users,
      features: [
        "Strategic financial planning and execution",
        "Board and investor relations management",
        "Financial team leadership and mentoring",
      ],
    },
    {
      title: "Pricing Models",
      description: "Develop optimal pricing strategies to maximize revenue and market penetration.",
      icon: DollarSign,
      features: ["Competitive pricing analysis", "Value-based pricing strategies", "Price elasticity studies"],
    },
    {
      title: "Scenario Analysis",
      description: "Prepare for various future outcomes with detailed scenario planning.",
      icon: TrendingUp,
      features: [
        "Best-case, worst-case, and expected-case scenarios",
        "Risk assessment and mitigation strategies",
        "Decision support tools",
      ],
    },
    {
      title: "Funding & Finance",
      description: "Navigate the complexities of fundraising and financial structuring.",
      icon: FileText,
      features: ["Investor pitch deck creation", "Due diligence preparation", "Capital structure optimization"],
    },
  ]

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-serif font-bold mb-4">Services</h1>
        <p className="text-xl">
          I offer a comprehensive suite of financial services tailored to the unique needs of SaaS companies and
          startups. My expertise helps businesses gain clarity, make informed decisions, and drive sustainable growth.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center space-x-2">
                <service.icon className="w-6 h-6" />
                <CardTitle>{service.title}</CardTitle>
              </div>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}

