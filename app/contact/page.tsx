import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Phone } from "lucide-react"

export default function Contact() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-serif font-bold mb-4">Get in Touch</h1>
        <p className="text-xl">
          I'm always excited to discuss how I can help your business with financial modeling, budgeting, or CFO
          services. Whether you have a specific project in mind or just want to explore possibilities, I'm here to help.
        </p>
      </section>

      <div className="w-full">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5" />
              <a
                href="mailto:hello@carinaedington.com"
                className="underline hover:text-primary"
              >
                hello@carinaedington.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Linkedin className="w-5 h-5" />
              <a
                href="https://www.linkedin.com/in/carina-edington-713ab912b/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                Carina Edington's LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <a
                href="tel:+447949060981"
                className="underline hover:text-primary"
              >
                +44 7949 060981
              </a>
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="text-center">
        <h2 className="text-2xl font-serif font-bold mb-4">Elevate Your Financial Strategy</h2>
        <p className="text-lg mb-6">
          Partner with a seasoned financial expert to realize your business's true potential. From startups seeking
          direction to established firms aiming for financial optimization, I offer tailored solutions to help you
          achieve your objectives.
        </p>
        <Button size="lg">Book Your Complimentary Consultation</Button>
      </section>
    </div>
  )
}

