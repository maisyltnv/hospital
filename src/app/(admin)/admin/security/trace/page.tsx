import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"

export default function DataAccessTracePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Data access trace" description="Who touched which record, from which device, when." />
      <Card>
        <CardContent className="text-muted-foreground p-6 text-sm">
          Connect to SIEM / database audit triggers. This route demonstrates UX for compliance officers.
        </CardContent>
      </Card>
    </div>
  )
}
