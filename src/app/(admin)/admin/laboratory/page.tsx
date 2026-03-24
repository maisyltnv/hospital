import Link from "next/link"

import { mockLabRequests } from "@/lib/data"
import { LabStatusBadge } from "@/components/hospital/status-badges"
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

export default function LaboratoryListPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Laboratory requests"
        description="LIS states: requested â†’ collected â†’ in progress â†’ verified â†’ reported."
        actions={
          <>
            <Link className={buttonVariants({ variant: "outline", size: "sm" })} href="/admin/laboratory/catalog">
              Test catalog
            </Link>
            <Link className={buttonVariants({ size: "sm" })} href="/admin/laboratory/new">
              New request
            </Link>
          </>
        }
      />
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Req #</TableHead>
                <TableHead>Test</TableHead>
                <TableHead>Sample</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockLabRequests.map((l) => (
                <TableRow key={l.id}>
                  <TableCell className="font-mono text-xs">{l.id}</TableCell>
                  <TableCell>{l.testType}</TableCell>
                  <TableCell>{l.sampleType}</TableCell>
                  <TableCell>
                    {l.priority === "stat" ? <Badge variant="destructive">STAT</Badge> : "Routine"}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{l.invoiceStatus}</Badge>
                  </TableCell>
                  <TableCell>
                    <LabStatusBadge status={l.status} />
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
