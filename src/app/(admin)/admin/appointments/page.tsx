import Link from "next/link"

import { mockAppointments } from "@/lib/data"
import { mockPatients } from "@/lib/data/patients"
import { mockStaff } from "@/lib/data/staff"
import { AppointmentStatusBadge } from "@/components/hospital/status-badges"
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

export default function AppointmentsListPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Appointments"
        description="List, filter, reschedule, and check-in â€” statuses align with front-desk and physician consoles."
        actions={
          <>
            <Link className={buttonVariants({ variant: "outline", size: "sm" })} href="/admin/appointments/calendar">
              Calendar view
            </Link>
            <Link className={buttonVariants({ size: "sm" })} href="/admin/appointments/new">
              New appointment
            </Link>
          </>
        }
      />
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>Clinician</TableHead>
                <TableHead>When</TableHead>
                <TableHead>Visit</TableHead>
                <TableHead>Payment</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAppointments.map((a) => {
                const p = mockPatients.find((x) => x.id === a.patientId)
                const d = mockStaff.find((x) => x.id === a.doctorId)
                return (
                  <TableRow key={a.id}>
                    <TableCell className="font-mono text-xs">{a.id}</TableCell>
                    <TableCell>
                      {p ? `${p.firstName} ${p.lastName}` : a.patientId}
                    </TableCell>
                    <TableCell>{d?.fullName ?? a.doctorId}</TableCell>
                    <TableCell className="whitespace-nowrap">
                      {a.date} {a.time}
                    </TableCell>
                    <TableCell>{a.visitType}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{a.paymentStatus}</Badge>
                    </TableCell>
                    <TableCell>
                      <AppointmentStatusBadge status={a.status} />
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
