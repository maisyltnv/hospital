import { BRANCHES } from "@/lib/constants"
import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BranchesPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Branches & clinics"
        description="Switching context updates dashboards, inventory, calendars, and reporting scope."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {BRANCHES.map((b) => (
          <Card key={b.id}>
            <CardHeader>
              <CardTitle className="text-base">{b.name}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-2 text-sm">
              <Badge variant="outline" className="font-mono">
                {b.code}
              </Badge>
              <p>Isolated inventory & scheduling namespaces.</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
