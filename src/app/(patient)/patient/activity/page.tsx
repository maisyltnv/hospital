import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"

export default function PatientActivityPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="My account activity" />
      <Card>
        <CardContent className="text-muted-foreground p-6 text-sm">Portal login history — connect to IdP.</CardContent>
      </Card>
    </div>
  )
}
