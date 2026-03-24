import { mockLabRequests } from "@/lib/data"
import { PageHeader } from "@/components/hospital/page-header"
import { LabStatusBadge } from "@/components/hospital/status-badges"
import { Card, CardContent } from "@/components/ui/card"

export default function PatientLabsPage() {
  const rows = mockLabRequests.filter((l) => l.patientId === "p1")
  return (
    <div className="space-y-6">
      <PageHeader title="Lab reports" />
      <Card>
        <CardContent className="space-y-3 p-4 text-sm">
          {rows.map((l) => (
            <div key={l.id} className="flex justify-between gap-2">
              <span>{l.testType}</span>
              <LabStatusBadge status={l.status} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
