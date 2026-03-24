import { mockAppointments, mockAdmissions, mockLabRequests, mockPrescriptions } from "@/lib/data"
import { KpiCard } from "@/components/hospital/kpi-card"
import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BedDouble, ClipboardList, FlaskConical, Pill } from "lucide-react"

const did = "d1"

export default function DoctorDashboardPage() {
  const today = mockAppointments.filter((a) => a.doctorId === did && a.date === "2026-03-24")
  const pendingLabs = mockLabRequests.filter((l) => l.doctorId === did && l.status !== "Verified")
  const rx = mockPrescriptions.filter((r) => r.doctorId === did)
  const ipd = mockAdmissions.filter((a) => a.attendingDoctorId === did)

  return (
    <div className="space-y-6">
      <PageHeader title="Physician dashboard" description="Today’s schedule, inpatient roster, and inbox work." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard title="Today’s schedule" value={today.length} />
        <KpiCard title="Inpatients" value={ipd.length} icon={BedDouble} />
        <KpiCard title="Pending Rx" value={rx.length} icon={Pill} />
        <KpiCard title="Labs to review" value={pendingLabs.length} icon={FlaskConical} />
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <ClipboardList className="size-4" />
            Follow-up reminders
          </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          Task list + inbox integration — hook to care coordination APIs.
        </CardContent>
      </Card>
    </div>
  )
}
