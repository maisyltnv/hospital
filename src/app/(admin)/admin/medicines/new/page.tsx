import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"

export default function NewMedicinePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Add medicine" description="Form mirrors master data needed for dispensing &amp; inventory." />
      <Card>
        <CardContent className="text-muted-foreground p-6 text-sm">
          Reuse the same field schema as the bulk import pipeline — connect React Hook Form + Zod here.
        </CardContent>
      </Card>
    </div>
  )
}
