import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ApiKeysPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="API keys & webhooks"
        description="Rotate secrets, scope by environment, and inspect delivery logs — never commit real keys."
      />
      <Card>
        <CardContent className="space-y-4 p-6">
          <div className="grid gap-2">
            <Label htmlFor="endpoint">FHIR base URL</Label>
            <Input id="endpoint" placeholder="https://api.hospital.example/fhir/r4" readOnly />
          </div>
          <div className="grid gap-2">
            <Label>Webhook signing secret</Label>
            <Input type="password" value="••••••••••••" readOnly />
          </div>
          <Button type="button" variant="secondary">
            Rotate key (mock)
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
