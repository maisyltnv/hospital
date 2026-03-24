"use client"

import Link from "next/link"
import { useQuery } from "@tanstack/react-query"
import { Plus } from "lucide-react"

import { mockPatients } from "@/lib/data/patients"
import { PageHeader } from "@/components/hospital/page-header"
import { buttonVariants } from "@/components/ui/button-variants"
import { Input } from "@/components/ui/input"
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
async function fetchPatients() {
  await new Promise((r) => setTimeout(r, 200))
  return mockPatients
}

export default function PatientsListPage() {
  const { data = mockPatients, isFetching } = useQuery({
    queryKey: ["patients"],
    queryFn: fetchPatients,
  })

  return (
    <div className="space-y-6">
      <PageHeader
        title="Patient registry"
        description="Advanced table with TanStack Query â€” swap queryFn for your EMR search API."
        badge={isFetching ? "Syncing" : "PHI"}
        actions={
          <Link href="/admin/patients/new" className={buttonVariants({ size: "sm" })}>
            <Plus className="mr-2 size-4" />
            Add patient
          </Link>
        }
      />
      <Card className="shadow-sm">
        <CardContent className="flex flex-col gap-4 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Input placeholder="Search name, MRN, phoneâ€¦" className="max-w-md" />
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Column toggle</Badge>
              <Badge variant="outline">Filters</Badge>
              <Badge variant="outline">Export CSV</Badge>
            </div>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>MRN</TableHead>
                <TableHead>Patient</TableHead>
                <TableHead>DOB</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((p) => (
                  <TableRow key={p.id}>
                    <TableCell className="font-mono text-xs">{p.mrn}</TableCell>
                    <TableCell className="font-medium">
                      {p.firstName} {p.lastName}
                    </TableCell>
                    <TableCell>{p.dob}</TableCell>
                    <TableCell>{p.phone}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{p.status}</Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Link
                        href={`/admin/patients/${p.id}`}
                        className={buttonVariants({ variant: "ghost", size: "sm" })}
                      >
                        Open
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
