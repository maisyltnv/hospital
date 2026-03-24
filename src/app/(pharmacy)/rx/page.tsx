import { mockMedicines, mockPrescriptions } from "@/lib/data"
import { KpiCard } from "@/components/hospital/kpi-card"
import { PageHeader } from "@/components/hospital/page-header"

export default function PharmacistDashboardPage() {
  const low = mockMedicines.filter((m) => m.stock < m.reorderLevel)
  const pending = mockPrescriptions.filter((r) => r.status === "active")
  return (
    <div className="space-y-6">
      <PageHeader title="Pharmacy dashboard" description="Dispensing, inventory, and billing sync." />
      <div className="grid gap-4 sm:grid-cols-3">
        <KpiCard title="Dispensing queue" value={pending.length} />
        <KpiCard title="Low stock SKUs" value={low.length} />
        <KpiCard title="Expiry alerts (30d)" value={1} />
      </div>
    </div>
  )
}
