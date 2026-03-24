import { KpiCard } from "@/components/hospital/kpi-card"
import { PageHeader } from "@/components/hospital/page-header"

export default function AccountsDashboardPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Accounts dashboard" description="Cash posting, payer mix, and tax summaries." />
      <div className="grid gap-4 sm:grid-cols-4">
        <KpiCard title="Daily revenue" value="$48.2k" />
        <KpiCard title="Invoices issued" value={126} />
        <KpiCard title="Unpaid" value={38} />
        <KpiCard title="Claims in flight" value={14} />
      </div>
    </div>
  )
}
