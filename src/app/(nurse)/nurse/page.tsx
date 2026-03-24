import { KpiCard } from "@/components/hospital/kpi-card"
import { PageHeader } from "@/components/hospital/page-header"
import { BedDouble, Pill, Syringe } from "lucide-react"

export default function NurseDashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Nursing dashboard" description="Ward assignment, MAR, and handover readiness." />
      <div className="grid gap-4 sm:grid-cols-3">
        <KpiCard title="Bed occupancy" value="92%" icon={BedDouble} />
        <KpiCard title="Medication passes due" value={8} icon={Pill} />
        <KpiCard title="Nursing tasks" value={5} icon={Syringe} />
      </div>
    </div>
  )
}
