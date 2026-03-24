import Link from "next/link"

import { mockInvoices } from "@/lib/data"
import { mockPatients } from "@/lib/data/patients"
import { InvoiceStatusBadge } from "@/components/hospital/status-badges"
import { PageHeader } from "@/components/hospital/page-header"
import { buttonVariants } from "@/components/ui/button-variants"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Invoices"
        description="Sources: consultation, prescription, lab, IPD charges â€” payment gateway UI ready."
      />
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Due</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockInvoices.map((inv) => {
                const p = mockPatients.find((x) => x.id === inv.patientId)
                return (
                  <TableRow key={inv.id}>
                    <TableCell className="font-mono text-xs">
                      <Link className="text-primary" href={`/admin/invoices/${inv.id}`}>
                        {inv.id}
                      </Link>
                    </TableCell>
                    <TableCell>{p ? `${p.firstName} ${p.lastName}` : inv.patientId}</TableCell>
                    <TableCell>{inv.sourceType}</TableCell>
                    <TableCell>${inv.amount.toLocaleString()}</TableCell>
                    <TableCell>{inv.dueDate}</TableCell>
                    <TableCell>
                      <InvoiceStatusBadge status={inv.status} />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Link className={buttonVariants({ variant: "outline" })} href="/admin/payments">
        Payment tracking dashboard
      </Link>
    </div>
  )
}
