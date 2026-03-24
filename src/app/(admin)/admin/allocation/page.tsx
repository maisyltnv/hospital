import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { mockStaff } from "@/lib/data/staff"
import { Badge } from "@/components/ui/badge"

export default function AllocationPage() {
  const doctors = mockStaff.filter((s) => s.role === "doctor")
  return (
    <div className="space-y-6">
      <PageHeader
        title="Doctor allocation board"
        description="Drag-and-drop assignment — integrate @dnd-kit or react-dnd. Department filters drive OPD/IPD tiles."
      />
      <div className="grid gap-3 md:grid-cols-2">
        {doctors.map((d) => (
          <Card key={d.id} className="shadow-sm">
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="font-medium">{d.fullName}</p>
                <p className="text-muted-foreground text-xs">{d.specialty}</p>
              </div>
              <Badge>Utilization 82%</Badge>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
