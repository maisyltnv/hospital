import Link from "next/link"

import { mockAppointments, mockLabRequests, mockPrescriptions } from "@/lib/data"
import { mockInvoices, mockNotifications } from "@/lib/data"
import { KpiCard } from "@/components/hospital/kpi-card"
import { PageHeader } from "@/components/hospital/page-header"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarRange, CreditCard, FlaskConical, Pill } from "lucide-react"

const pid = "p1"

export default function PatientDashboardPage() {
  const appts = mockAppointments.filter((a) => a.patientId === pid)
  const rx = mockPrescriptions.filter((r) => r.patientId === pid)
  const labs = mockLabRequests.filter((l) => l.patientId === pid)
  const inv = mockInvoices.filter((i) => i.patientId === pid)

  return (
    <div className="space-y-6">
      <PageHeader
        title="My care dashboard"
        description="Self-service portal â€” appointments, results, billing, and secure messaging."
        actions={
          <Link className={buttonVariants({ size: "sm" })} href="/book-appointment">
            Book follow-up
          </Link>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard title="Upcoming visits" value={appts.length} icon={CalendarRange} />
        <KpiCard title="Active Rx" value={rx.filter((r) => r.status === "active").length} icon={Pill} />
        <KpiCard title="Lab reports" value={labs.length} icon={FlaskConical} />
        <KpiCard title="Open invoices" value={inv.length} icon={CreditCard} />
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Notifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            {mockNotifications.slice(0, 3).map((n) => (
              <p key={n.id} className="border-b pb-2 last:border-0">
                {n.title}
              </p>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Download center</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Verified PDFs for labs & imaging with watermarking hooks.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
