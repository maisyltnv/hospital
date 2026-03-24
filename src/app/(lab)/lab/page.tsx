import { mockLabRequests } from "@/lib/data"
import { KpiCard } from "@/components/hospital/kpi-card"
import { PageHeader } from "@/components/hospital/page-header"

export default function LabDashboardPage() {
  const pending = mockLabRequests.filter((l) => l.status === "Requested" || l.status === "In Progress")
  const stat = mockLabRequests.filter((l) => l.priority === "stat")
  return (
    <div className="space-y-6">
      <PageHeader title="Laboratory dashboard" description="Bench queues, STAT flags, and TAT analytics." />
      <div className="grid gap-4 sm:grid-cols-3">
        <KpiCard title="Pending / in progress" value={pending.length} />
        <KpiCard title="STAT samples" value={stat.length} />
        <KpiCard title="Verified today" value={4} />
      </div>
    </div>
  )
}
