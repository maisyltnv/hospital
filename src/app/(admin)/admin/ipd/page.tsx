import Link from "next/link"

import { mockAdmissions } from "@/lib/data"
import { mockPatients } from "@/lib/data/patients"
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

export default function IpdListPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Inpatient admissions"
        description="Admission â†’ discharge workflow with ward board, diet orders, and auto-bill summaries."
        actions={
          <>
            <Link className={buttonVariants({ variant: "outline", size: "sm" })} href="/admin/ipd/wards">
              Ward board
            </Link>
            <Link className={buttonVariants({ size: "sm" })} href="/admin/ipd/new">
              New admission
            </Link>
          </>
        }
      />
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Admission #</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Diagnosis</TableHead>
                <TableHead>Diet</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAdmissions.map((a) => {
                const p = mockPatients.find((x) => x.id === a.patientId)
                return (
                  <TableRow key={a.id}>
                    <TableCell className="font-mono text-xs">{a.id}</TableCell>
                    <TableCell>{p ? `${p.firstName} ${p.lastName}` : a.patientId}</TableCell>
                    <TableCell>
                      {a.ward} {a.room}-{a.bed}
                    </TableCell>
                    <TableCell className="max-w-xs truncate text-xs">{a.diagnosis}</TableCell>
                    <TableCell>{a.diet}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{a.status}</Badge>
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
