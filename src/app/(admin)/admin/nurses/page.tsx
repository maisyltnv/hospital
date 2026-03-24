import { mockStaff } from "@/lib/data/staff"
import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"

export default function NursesPage() {
  const list = mockStaff.filter((s) => s.role === "nurse")
  return (
    <div className="space-y-6">
      <PageHeader title="Nurses" description="Nursing assignments pair with ward boards and medication passes." />
      <Card>
        <CardContent className="p-4 text-sm">
          {list.map((n) => (
            <p key={n.id} className="border-b py-2 last:border-0">
              {n.fullName} — {n.departmentId}
            </p>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
