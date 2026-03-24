import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const claims = [
  { id: "CLM-8891", patient: "D. Nguyen", payer: "HealthSure", status: "Pended", amount: "$1,850" },
  { id: "CLM-8892", patient: "M. Collins", payer: "BlueCross", status: "Approved", amount: "$420" },
]

export default function InsurancePage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Insurance claims" description="837/835 ingestion surfaces — status mirrors clearinghouse events." />
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Claim</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Payer</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {claims.map((c) => (
                <TableRow key={c.id}>
                  <TableCell className="font-mono text-xs">{c.id}</TableCell>
                  <TableCell>{c.patient}</TableCell>
                  <TableCell>{c.payer}</TableCell>
                  <TableCell>{c.amount}</TableCell>
                  <TableCell>{c.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
