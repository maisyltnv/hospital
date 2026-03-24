import { PageHeader } from "@/components/hospital/page-header"
import { KpiCard } from "@/components/hospital/kpi-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart3, Download } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Reporting & analytics"
        description="Custom report builder, saved views, and scheduled exports — connect OLAP or warehouse."
        actions={
          <>
            <Button variant="outline" size="sm">
              <Download className="mr-2 size-4" />
              Export PDF
            </Button>
            <Button variant="outline" size="sm">
              Export Excel
            </Button>
          </>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard title="Patient volume (30d)" value="12,480" icon={BarChart3} />
        <KpiCard title="No-show rate" value="4.2%" trend="By department filter" />
        <KpiCard title="AR days" value="38" />
        <KpiCard title="Lab TAT median" value="6.4h" />
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Saved reports</CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-sm">
          Monthly revenue by branch · OR utilization · Antibiotic stewardship · Sepsis bundle compliance
        </CardContent>
      </Card>
    </div>
  )
}
