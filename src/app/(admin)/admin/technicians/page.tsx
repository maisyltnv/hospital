import { mockStaff } from "@/lib/data/staff"
import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"

export default function TechniciansPage() {
  const list = mockStaff.filter((s) => s.role === "lab_tech")
  return (
    <div className="space-y-6">
      <PageHeader title="Laboratory technicians" description="Workload widgets tie to open bench queues." />
      <Card>
        <CardContent className="p-4 text-sm">
          {list.map((t) => (
            <p key={t.id} className="py-2">
              {t.fullName}
            </p>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
