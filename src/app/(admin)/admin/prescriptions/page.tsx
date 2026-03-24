import Link from "next/link"

import { mockPrescriptions } from "@/lib/data"
import { mockPatients } from "@/lib/data/patients"
import { mockStaff } from "@/lib/data/staff"
import { PageHeader } from "@/components/hospital/page-header"
import { buttonVariants } from "@/components/ui/button-variants"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent } from "@/components/ui/card"

export default function PrescriptionsListPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Prescriptions"
        description="Prescription builder supports inventory checks, batch selection, and billing handoff."
        actions={
          <Link className={buttonVariants({ size: "sm" })} href="/admin/prescriptions/new">
            Create prescription
          </Link>
        }
      />
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rx #</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Prescriber</TableHead>
                <TableHead>Issued</TableHead>
                <TableHead>Lines</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockPrescriptions.map((r) => {
                const p = mockPatients.find((x) => x.id === r.patientId)
                const d = mockStaff.find((x) => x.id === r.doctorId)
                return (
                  <TableRow key={r.id}>
                    <TableCell className="font-mono text-xs">
                      <Link className="text-primary" href={`/admin/prescriptions/${r.id}`}>
                        {r.id}
                      </Link>
                    </TableCell>
                    <TableCell>{p ? `${p.firstName} ${p.lastName}` : r.patientId}</TableCell>
                    <TableCell>{d?.fullName}</TableCell>
                    <TableCell className="text-xs">{r.issuedAt}</TableCell>
                    <TableCell>{r.lines.length}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{r.status}</Badge>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
