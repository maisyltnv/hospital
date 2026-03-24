import { mockInvoices } from "@/lib/data"
import { PageHeader } from "@/components/hospital/page-header"
import { InvoiceStatusBadge } from "@/components/hospital/status-badges"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PatientBillingPage() {
  const rows = mockInvoices.filter((i) => i.patientId === "p1")
  return (
    <div className="space-y-6">
      <PageHeader title="Billing & payments" description="Payment gateway widget placeholder (PCI scope)." />
      <Card>
        <CardContent className="space-y-3 p-4 text-sm">
          {rows.map((i) => (
            <div key={i.id} className="flex flex-wrap items-center justify-between gap-2 border-b py-2">
              <span className="font-mono text-xs">{i.id}</span>
              <span>${i.amount}</span>
              <InvoiceStatusBadge status={i.status} />
              <Button size="sm" type="button" variant="secondary">
                Pay now (mock)
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
