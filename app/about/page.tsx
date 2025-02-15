import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const skills = [
    "Financial Modeling & Analysis",
    "Stakeholder Management",
    "Financial Leadership",
    "Strategic Decision-Making",
    "Cash Flow Management",
    "Budgeting & Forecasting",
    "Venture Building",
    "SaaS Metrics",
    "Fundraising",
    "Risk Management",
  ]

  const timeline = [
    { year: 2024, event: "Completed Y Combinator's Startup School" },
    { year: 2023, event: "Appointed Group CFO at iXperience LTD" },
    { year: 2021, event: "Started as Fractional CFO for multiple startups" },
    { year: 2021, event: "Completed MBA at University of Stellenbosch Business School" },
    { year: 2017, event: "Obtained Post Graduate Diploma - CIMA CTMA" },
    { year: 2015, event: "Completed BCom in Management Accounting" },
  ]

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-serif font-bold mb-4">About Me</h1>
        <p className="text-xl">
          As a dynamic finance leader with extensive experience across SaaS, eCommerce, and FMCG, I bring a unique blend
          of strategic insight and hands-on expertise to every project. My passion lies in scaling businesses,
          implementing robust financial controls, and driving data-driven decision-making.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-serif font-bold mb-4">My Approach</h2>
        <p className="text-lg mb-4">
          I believe in a collaborative, hands-on approach to financial management. By combining strong analytical skills
          with a deep understanding of business operations, I help companies:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Gain clarity on their financial position and future prospects</li>
          <li>Make informed, data-driven decisions</li>
          <li>Optimize cash flow and resource allocation</li>
          <li>Develop scalable financial systems and processes</li>
          <li>Navigate complex financial challenges and opportunities</li>
        </ul>
      </section>

      <section>
        <h2 className="text-3xl font-serif font-bold mb-4">Key Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge key={index} variant="secondary">
              {skill}
            </Badge>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-serif font-bold mb-4">Professional Journey</h2>
        <Card>
          <CardContent className="pt-6">
            {timeline.map((item, index) => (
              <div key={index} className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0">
                <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-primary" />
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">{item.year}</p>
                  <p className="text-sm text-muted-foreground">{item.event}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

