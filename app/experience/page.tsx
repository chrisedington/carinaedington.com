import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  const experiences = [
    {
      title: "Group CFO",
      company: "iXperience LTD",
      location: "Cape Town, South Africa",
      period: "Dec 2023 - Present",
      description:
        "Led financial operations for a funded edtech venture, managing budgeting, financial planning, cash flow, and reporting. Resolved critical financial system issues, re-audited three years of statements, and streamlined the data room for due diligence. Developed daily cash flow systems to navigate challenges and partnered with the CEO to deliver strategic financial insights.",
      achievements: [
        "Restructured financial systems for accuracy and efficiency.",
        "Stabilized cash flow during critical periods.",
        "Enhanced financial infrastructure to attract investments.",
      ],
      skills: ["Financial Planning", "Cash Flow Management", "Investor Relations"],
    },
    {
      title: "Fractional Director - FP & A",
      company: "Abra VMSD",
      location: "Dubai, UAE",
      period: "Oct 2023 - Jul 2024",
      description:
        "Established a robust financial system for a leading luxury shopfitting and bespoke joinery manufacturer in the Middle East and Africa. Developed comprehensive annual budgets, integrating HR reporting, KPIs, and bonus structures to align performance with strategic goals.",
      achievements: [
        "Developed comprehensive annual budgets integrating HR reporting and KPIs",
        "Implemented bonus structures aligned with strategic goals",
        "Streamlined financial reporting processes for better decision-making",
      ],
      skills: ["Budgeting", "Performance Management", "Financial Systems"],
    },
    {
      title: "Fractional CFO",
      company: "Shopstar Pty Ltd",
      location: "Cape Town, RSA",
      period: "Oct 2021 - Dec 2024",
      description:
        "Provided strategic financial leadership for a private equity-backed eCommerce platform supporting SMEs. Developed financial models that shaped the go-to-market strategy and secured funding.",
      achievements: [
        "Developed financial models that shaped the go-to-market strategy",
        "Secured additional funding through robust financial planning",
        "Optimized pricing strategies to improve profit margins",
      ],
      skills: ["Strategic Planning", "Financial Modeling", "Fundraising"],
    },
    {
      title: "Head of Finance & Operations",
      company: "The Schuyler Group Pty Ltd",
      location: "Cape Town, RSA",
      period: "Feb 2020 - Jun 2022",
      description:
        "Led finance and operations for a growing company, implementing financial controls and optimizing operational efficiency.",
      achievements: [
        "Implemented robust financial controls",
        "Optimized operational processes",
        "Drove cost savings initiatives",
      ],
      skills: ["Financial Controls", "Operational Efficiency", "Cost Management"],
    },
    {
      title: "Financial Manager",
      company: "The Jonas Family Trust & Subsidiaries",
      location: "Paarl, RSA",
      period: "Jan 2016 - Feb 2020",
      description:
        "Managed financial operations for a family trust and its subsidiaries, ensuring compliance and optimizing investment strategies.",
      achievements: [
        "Improved investment portfolio performance",
        "Ensured compliance with tax regulations",
        "Streamlined financial reporting across subsidiaries",
      ],
      skills: ["Investment Management", "Tax Planning", "Financial Reporting"],
    },
    {
      title: "Regional Financial Manager",
      company: "Tsebo Facilities Group Pty Ltd",
      location: "Stellenbosch, RSA",
      period: "May 2011 - Dec 2015",
      description: "Oversaw financial operations for a regional division of a facilities management company.",
      achievements: [
        "Implemented cost-saving measures across regional operations",
        "Improved financial reporting accuracy and timeliness",
        "Developed financial strategies to support regional growth",
      ],
      skills: ["Regional Financial Management", "Cost Optimization", "Growth Strategy"],
    },
    {
      title: "Financial Manager",
      company: "Zorgvliet Group Pty Ltd",
      location: "Stellenbosch, RSA",
      period: "Apr 2008 - May 2011",
      description:
        "Managed financial operations for a diversified group of companies in the hospitality and wine industry.",
      achievements: [
        "Streamlined financial processes across multiple business units",
        "Improved cash flow management",
        "Implemented new accounting software to enhance reporting capabilities",
      ],
      skills: ["Multi-entity Accounting", "Cash Flow Management", "Systems Implementation"],
    },
    {
      title: "Assistant Accountant",
      company: "Hutchison Whampoa Europe Ltd",
      location: "London, UK",
      period: "Jan 2007 - Mar 2008",
      description: "Assisted in financial operations for a major multinational conglomerate's European division.",
      achievements: [
        "Supported month-end closing processes",
        "Prepared financial reports for management review",
        "Assisted in budgeting and forecasting activities",
      ],
      skills: ["Financial Reporting", "Budgeting", "Multinational Operations"],
    },
    {
      title: "Inventory Analyst",
      company: "GlaxoSmithKline Ltd",
      location: "London, UK",
      period: "Jan 2006 - Dec 2006",
      description: "Analyzed and managed inventory for a global pharmaceutical company.",
      achievements: [
        "Optimized inventory levels to reduce carrying costs",
        "Improved forecasting accuracy for key product lines",
        "Collaborated with supply chain teams to enhance efficiency",
      ],
      skills: ["Inventory Management", "Forecasting", "Supply Chain Analysis"],
    },
  ]

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-serif font-bold mb-4">Professional Experience</h1>
        <p className="text-xl">
          With a diverse background spanning SaaS, eCommerce, FMCG, and multinational corporations, I've helped numerous
          businesses optimize their financial operations and drive growth. Here's a comprehensive overview of my
          professional journey:
        </p>
      </section>

      <section className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>
                {exp.company} | {exp.location} | {exp.period}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{exp.description}</p>
              <h4 className="font-semibold mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside mb-4">
                {exp.achievements.map((achievement, aIndex) => (
                  <li key={aIndex}>{achievement}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, sIndex) => (
                  <Badge key={sIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}

