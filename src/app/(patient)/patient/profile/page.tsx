import { mockPatients } from "@/lib/data/patients"
import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"

const p = mockPatients[0]!

export default function PatientProfilePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="My profile" description="Update demographics and notification preferences." />
      <Card>
        <CardContent className="grid gap-2 p-6 text-sm">
          <p>
            <span className="text-muted-foreground">Name</span>
            <br />
            {p.firstName} {p.lastName}
          </p>
          <p>
            <span className="text-muted-foreground">MRN</span>
            <br />
            {p.mrn}
          </p>
          <p>
            <span className="text-muted-foreground">Phone / Email</span>
            <br />
            {p.phone} · {p.email}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
