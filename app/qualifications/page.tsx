import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Qualifications() {
  const qualifications = [
    {
      year: "2024",
      institution: "Y Combinator",
      location: "Online",
      qualification: "Startup School",
    },
    {
      year: "2021",
      institution: "Esade Business School Barcelona",
      location: "Online",
      qualification: "Entrepreneurship & Innovation (MBA ISM)",
    },
    {
      year: "2021",
      institution: "University of Stellenbosch Business School",
      location: "Stellenbosch, South Africa",
      qualification: "Master Of Business Administration (MBA)",
    },
    {
      year: "2017",
      institution: "University of South Africa",
      location: "Online",
      qualification: "Post Graduate Diploma - CIMA CTMA",
    },
    {
      year: "2015",
      institution: "University of South Africa",
      location: "Online",
      qualification: "BCom Management Accounting",
    },
    {
      year: "2010",
      institution: "University of South Africa",
      location: "Online",
      qualification: "HSACCA, Financial Accounting",
    },
  ]

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-serif font-bold mb-4">Qualifications</h1>
        <p className="text-xl">
          My educational journey has equipped me with a strong foundation in finance, accounting, and business
          management. Here's a timeline of my key qualifications:
        </p>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle>Educational Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            {qualifications.map((qual, index) => (
              <div key={index} className="mb-4 grid grid-cols-[1fr_4fr] gap-4 items-start">
                <div className="text-right font-bold">{qual.year}</div>
                <div>
                  <h3 className="font-semibold">{qual.qualification}</h3>
                  <p>{qual.institution}</p>
                  <p className="text-sm text-gray-500">{qual.location}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-serif font-bold mb-4">Key Skills</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Proactive and Hands-On Approach</li>
          <li>Analytical & Detail-Oriented</li>
          <li>Strong Systems Skills</li>
          <li>Leadership & Communication</li>
          <li>Stakeholder Management</li>
          <li>Resilience Under Pressure</li>
        </ul>
      </section>
    </div>
  )
}

