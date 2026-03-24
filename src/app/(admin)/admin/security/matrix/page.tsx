import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"

export default function PermissionMatrixPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Permission matrix" description="Row/column grid for modules × roles — export for IAM reviews." />
      <Card>
        <CardContent className="text-muted-foreground p-6 text-sm">
          Matrix UI placeholder: Super Admin, Hospital Admin, Doctor, Nurse, Lab, Pharmacy, Reception, Accounts,
          Patient.
        </CardContent>
      </Card>
    </div>
  )
}
