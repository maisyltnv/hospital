import Link from "next/link"

import { mockMedicines } from "@/lib/data/operations"
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

export default function MedicinesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Medicine master"
        description="SKU, batch, expiry, pricing, and stock â€” pharmacy sync panel surfaces downstream billing."
        actions={
          <Link className={buttonVariants({ size: "sm" })} href="/admin/medicines/new">
            Add medicine
          </Link>
        }
      />
      <Card className="shadow-sm">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>SKU</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Batch</TableHead>
                <TableHead>Expiry</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Reorder</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockMedicines.map((m) => (
                <TableRow key={m.sku}>
                  <TableCell className="font-mono text-xs">{m.sku}</TableCell>
                  <TableCell>{m.name}</TableCell>
                  <TableCell>{m.batch}</TableCell>
                  <TableCell>{m.expiry}</TableCell>
                  <TableCell>
                    {m.stock}
                    {m.stock < m.reorderLevel ? (
                      <Badge className="ml-2" variant="destructive">
                        Low
                      </Badge>
                    ) : null}
                  </TableCell>
                  <TableCell>{m.reorderLevel}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{m.status}</Badge>
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
