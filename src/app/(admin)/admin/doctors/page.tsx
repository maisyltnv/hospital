import { mockStaff } from "@/lib/data/staff"
import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"

export default function DoctorsPage() {
  const list = mockStaff.filter((s) => s.role === "doctor")
  return (
    <div className="space-y-6">
      <PageHeader title="Doctors" description="Filtered staff view — availability &amp; fee schedules live in profile depth." />
      <Card>
        <CardContent className="divide-y p-0 text-sm">
          {list.map((d) => (
            <div key={d.id} className="flex flex-wrap justify-between gap-2 px-4 py-3">
              <span className="font-medium">{d.fullName}</span>
              <span className="text-muted-foreground">{d.specialty}</span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
