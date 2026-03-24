import { PublicPageHero } from "@/components/public/public-page-hero"
import { HOSPITAL } from "@/lib/constants"
import { publicImages } from "@/lib/public-images"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PublicPageHero
        src={publicImages.facility}
        alt={`${HOSPITAL.shortName} hospital main entrance and reception area`}
        eyebrow="Visit & reach us"
        title="We are here to help patients and families"
      />
      <h1 className="text-3xl font-semibold tracking-tight">Contact & locations</h1>
      <p className="text-muted-foreground mt-3 max-w-2xl text-sm">
        Enterprise switchboard, patient access center, and medical records release workflows can map to this
        form once APIs are connected.
      </p>
      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Reach us</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-3 text-sm">
            <p>
              <span className="text-foreground font-medium">Address</span>
              <br />
              {HOSPITAL.address}
            </p>
            <p>
              <span className="text-foreground font-medium">Main</span>
              <br />
              {HOSPITAL.mainLine}
            </p>
            <p>
              <span className="text-foreground font-medium">Emergency</span>
              <br />
              {HOSPITAL.emergencyLine}
            </p>
            <p>
              <span className="text-foreground font-medium">Email</span>
              <br />
              {HOSPITAL.email}
            </p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Send a message (UI only)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="c-name">Full name</Label>
              <Input id="c-name" placeholder="Your name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="c-email">Email</Label>
              <Input id="c-email" type="email" placeholder="you@example.com" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="c-msg">How can we help?</Label>
              <Textarea id="c-msg" placeholder="Brief description" rows={4} />
            </div>
            <Button type="button">Submit (mock)</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
