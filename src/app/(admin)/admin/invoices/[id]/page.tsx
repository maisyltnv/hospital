import { notFound } from "next/navigation"

import { mockInvoices } from "@/lib/data"
import { InvoiceStatusBadge } from "@/components/hospital/status-badges"
import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Props = { params: Promise<{ id: string }> }

export default async function InvoiceDetailPage({ params }: Props) {
  const { id } = await params
  const inv = mockInvoices.find((i) => i.id === id)
  if (!inv) notFound()

  return (
    <div className="space-y-6">
      <PageHeader title={`Invoice ${inv.id}`} description="Printable invoice + payment timeline." />
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p>Source: {inv.sourceType}</p>
          <p>Amount: ${inv.amount.toLocaleString()}</p>
          <p>Tax: ${inv.tax}</p>
          <p>Insurance coverage: ${inv.insuranceCoverage}</p>
          <InvoiceStatusBadge status={inv.status} />
          <div className="flex gap-2 pt-4">
            <Button type="button">Collect payment (mock)</Button>
            <Button type="button" variant="outline">
              Print
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
