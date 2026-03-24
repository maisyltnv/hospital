import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const items = [
  { name: "EMR / EHR", proto: "FHIR R4 + SMART", status: "Configured (mock)" },
  { name: "LIS", proto: "HL7 v2 ORU/ORM", status: "Listening" },
  { name: "RIS / PACS", proto: "DICOMweb + HL7", status: "Idle" },
  { name: "Pharmacy vendor", proto: "REST + NCPDP", status: "Planned" },
  { name: "Payment gateway", proto: "REST webhooks", status: "Sandbox" },
]

export default function IntegrationsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Integration control center"
        description="API endpoints, auth modes, mapping rules, sync status, and retry queues."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {items.map((i) => (
          <Card key={i.name} className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">{i.name}</CardTitle>
              <Badge variant="outline">{i.status}</Badge>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2 text-xs">
              <p>Protocol: {i.proto}</p>
              <p>Last sync: 2026-03-24T07:12:00Z (illustrative)</p>
              <Button size="sm" variant="secondary" type="button">
                Open mapping rules
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
