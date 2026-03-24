import { mockAppointments } from "@/lib/data"
import { PageHeader } from "@/components/hospital/page-header"
import { AppointmentStatusBadge } from "@/components/hospital/status-badges"
import { Card, CardContent } from "@/components/ui/card"

export default function PatientAppointmentsPage() {
  const rows = mockAppointments.filter((a) => a.patientId === "p1")
  return (
    <div className="space-y-6">
      <PageHeader title="My appointments" />
      <Card>
        <CardContent className="divide-y p-0">
          {rows.map((a) => (
            <div key={a.id} className="flex flex-wrap justify-between gap-2 px-4 py-3 text-sm">
              <span>
                {a.date} {a.time} — {a.visitType}
              </span>
              <AppointmentStatusBadge status={a.status} />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
