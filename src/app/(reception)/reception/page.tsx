import { mockAppointments } from "@/lib/data"
import { KpiCard } from "@/components/hospital/kpi-card"
import { PageHeader } from "@/components/hospital/page-header"

export default function ReceptionDashboardPage() {
  const today = mockAppointments.filter((a) => a.date === "2026-03-24")
  return (
    <div className="space-y-6">
      <PageHeader title="Reception dashboard" description="Registration, check-in, and collections counters." />
      <div className="grid gap-4 sm:grid-cols-4">
        <KpiCard title="Walk-ins" value={6} />
        <KpiCard title="Today’s appts" value={today.length} />
        <KpiCard title="Waiting" value={3} />
        <KpiCard title="Payments pending" value={4} />
      </div>
    </div>
  )
}
