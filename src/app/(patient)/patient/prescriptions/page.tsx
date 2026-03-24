import { mockPrescriptions } from "@/lib/data"
import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"

export default function PatientPrescriptionsPage() {
  const rows = mockPrescriptions.filter((r) => r.patientId === "p1")
  return (
    <div className="space-y-6">
      <PageHeader title="My prescriptions" />
      <Card>
        <CardContent className="p-4 text-sm">
          {rows.map((r) => (
            <div key={r.id} className="border-b py-2 last:border-0">
              {r.id} — {r.status}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
