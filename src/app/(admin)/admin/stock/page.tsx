import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function StockPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Inventory overview"
        description="Transfers, valuation, audits, replenishment — each becomes a TanStack Query slice."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Medical supplies</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={72} />
            <p className="text-muted-foreground mt-2 text-xs">72% of par level (demo)</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Pharmacy</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={54} />
            <p className="text-muted-foreground mt-2 text-xs">Batch expiry risk in 2 SKUs</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">OR consumables</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={88} />
            <p className="text-muted-foreground mt-2 text-xs">Threshold visual indicators</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
