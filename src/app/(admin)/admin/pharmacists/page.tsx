import { mockStaff } from "@/lib/data/staff"
import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"

export default function PharmacistsPage() {
  const list = mockStaff.filter((s) => s.role === "pharmacist")
  return (
    <div className="space-y-6">
      <PageHeader title="Pharmacists" description="Clinical pharmacy coverage &amp; verification queues." />
      <Card>
        <CardContent className="p-4 text-sm">
          {list.map((p) => (
            <p key={p.id} className="py-2">
              {p.fullName}
            </p>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
