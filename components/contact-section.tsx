import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import SectionTitle from "@/components/section-title"

export default function ContactSection() {
  return (
    <section className="py-12 md:py-24">
      <SectionTitle id="information" title="Information" />
      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>Feel free to reach out through any of these channels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <p>kusumanth.gali@example.com</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <p>San Francisco, CA</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>I'll get back to you as soon as possible</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Input placeholder="Name" />
                </div>
                <div className="space-y-2">
                  <Input type="email" placeholder="Email" />
                </div>
              </div>
              <div className="space-y-2">
                <Input placeholder="Subject" />
              </div>
              <div className="space-y-2">
                <Textarea placeholder="Message" className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
