"use client"

import Link from "next/link"

import { buttonVariants } from "@/components/ui/button-variants"
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Activity, Download, FileSpreadsheet, FlaskConical, Pill, Users } from "lucide-react"
import { useQuery } from "@tanstack/react-query"

import { adminKpis, mockAdmissions, mockAuditLog, mockInvoices, mockLabRequests } from "@/lib/data"
import { KpiCard } from "@/components/hospital/kpi-card"
import { PageHeader } from "@/components/hospital/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { LabStatusBadge } from "@/components/hospital/status-badges"
import { InvoiceStatusBadge } from "@/components/hospital/status-badges"

const revenueBars = [
  { name: "Mon", opd: 42000, ipd: 28000, lab: 12000 },
  { name: "Tue", opd: 38000, ipd: 31000, lab: 14000 },
  { name: "Wed", opd: 45000, ipd: 26000, lab: 11000 },
  { name: "Thu", opd: 47000, ipd: 33000, lab: 15000 },
  { name: "Fri", opd: 51000, ipd: 36000, lab: 16000 },
]

async function fetchDashboardKpis() {
  await new Promise((r) => setTimeout(r, 280))
  return adminKpis()
}

export function HospitalAdminDashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["admin-kpis"],
    queryFn: fetchDashboardKpis,
  })

  const k = data ?? adminKpis()

  return (
    <div className="space-y-8">
      <PageHeader
        title="Hospital administrator dashboard"
        description="Operational snapshot across branches â€” designed for drill-down into patients, encounters, diagnostics, and revenue."
        badge={isLoading ? "Refreshingâ€¦" : "Live (mock query)"}
        actions={
          <>
            <Button variant="outline" size="sm">
              <Download className="mr-2 size-4" />
              Export PDF
            </Button>
            <Button variant="outline" size="sm">
              <FileSpreadsheet className="mr-2 size-4" />
              Export Excel
            </Button>
          </>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard title="Total patients (active)" value={k.totalPatients} icon={Users} hint="De-duplicated by MRN" />
        <KpiCard title="Todayâ€™s appointments" value={k.todayAppointments} icon={Activity} trend="Across selected branch" />
        <KpiCard title="Admitted (IPD)" value={k.admitted} hint="Non-ICU & ICU combined" />
        <KpiCard title="Pending lab work" value={k.pendingLabs} icon={FlaskConical} />
        <KpiCard title="Pharmacy stock alerts" value={k.lowStock} icon={Pill} trend="Below reorder threshold" />
        <KpiCard
          title="Revenue (MTD)"
          value={`$${(k.revenueMtd / 1000).toFixed(0)}k`}
          trend="Accrual basis â€” demo"
        />
        <KpiCard title="Open AR invoices" value={k.unpaidInvoices} />
        <KpiCard title="Insurance claims (open)" value={12} trend="Pre-auth + adjudication" />
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 shadow-sm">
          <CardHeader>
            <CardTitle>Revenue mix (sample week)</CardTitle>
            <CardDescription>Stacked bars ready for department & payer filters.</CardDescription>
          </CardHeader>
          <CardContent className="h-[280px] min-w-0">
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={revenueBars}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis
                  tick={{ fontSize: 12 }}
                  tickFormatter={(v) => (typeof v === "number" ? `$${v / 1000}k` : "")}
                />
                <Tooltip
                  formatter={(value) =>
                    typeof value === "number" ? `$${value.toLocaleString()}` : String(value ?? "")
                  }
                />
                <Bar dataKey="opd" stackId="a" fill="#0ea5e9" name="OPD" radius={[4, 4, 0, 0]} />
                <Bar dataKey="ipd" stackId="a" fill="#6366f1" name="IPD" />
                <Bar dataKey="lab" stackId="a" fill="#22c55e" name="Lab" radius={[0, 0, 4, 4]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Payment status</CardTitle>
            <CardDescription>Breakdown by aging bucket (illustrative).</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">0â€“30 days</span>
              <span className="font-medium">68%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">31â€“60</span>
              <span className="font-medium">19%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">61+</span>
              <span className="font-medium">13%</span>
            </div>
            <Link
              href="/admin/payments"
              className={buttonVariants({ variant: "secondary", size: "sm", className: "mt-4 w-full justify-center" })}
            >
              Open payment tracking
            </Link>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Recent admissions</CardTitle>
            <CardDescription>Direct feed from IPD module.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Admission</TableHead>
                  <TableHead>Ward</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockAdmissions.map((a) => (
                  <TableRow key={a.id}>
                    <TableCell className="font-mono text-xs">{a.id}</TableCell>
                    <TableCell>
                      {a.ward} Â· {a.room}-{a.bed}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{a.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardHeader>
            <CardTitle>Lab pipeline</CardTitle>
            <CardDescription>STAT-aware operational list.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request</TableHead>
                  <TableHead>Test</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockLabRequests.map((l) => (
                  <TableRow key={l.id}>
                    <TableCell className="font-mono text-xs">{l.id}</TableCell>
                    <TableCell>{l.testType}</TableCell>
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
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Billing summary</CardTitle>
          <CardDescription>Invoice sources: consultation, prescription, lab, IPD.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockInvoices.map((inv) => (
                <TableRow key={inv.id}>
                  <TableCell className="font-mono text-xs">{inv.id}</TableCell>
                  <TableCell>{inv.sourceType}</TableCell>
                  <TableCell>${inv.amount.toLocaleString()}</TableCell>
                  <TableCell>
                    <InvoiceStatusBadge status={inv.status} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
      <Card className="shadow-sm">
        <CardHeader>
          <CardTitle>Recent activity (audit-aware)</CardTitle>
          <CardDescription>Immutable audit log projection â€” PHI access highlighted.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>When</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>Resource</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {mockAuditLog.map((row) => (
                <TableRow key={row.id}>
                  <TableCell className="whitespace-nowrap text-xs">{row.at}</TableCell>
                  <TableCell>{row.user}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{row.action}</Badge>
                  </TableCell>
                  <TableCell className="max-w-xs truncate text-xs">{row.resource}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
