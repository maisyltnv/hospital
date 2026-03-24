import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const beds = [
  { id: "312-B", status: "occupied", patient: "M. Collins" },
  { id: "312-A", status: "clean", patient: "—" },
  { id: "508-A", status: "occupied", patient: "A. Hassan" },
  { id: "508-B", status: "blocked", patient: "Isolation turnover" },
]

export default function WardBoardPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Ward & bed board"
        description="Occupancy visualization — extend with real-time ADT feed from your HIS."
      />
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {beds.map((b) => (
          <Card key={b.id} className="shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{b.id}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <Badge
                variant={
                  b.status === "occupied" ? "default" : b.status === "blocked" ? "destructive" : "secondary"
                }
              >
                {b.status}
              </Badge>
              <p className="text-muted-foreground">{b.patient}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
