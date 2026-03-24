import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"

export function PortalPlaceholder({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <div className="space-y-6">
      <PageHeader title={title} description={description} />
      <Card>
        <CardContent className="text-muted-foreground p-6 text-sm">
          Role-scoped module — replace with TanStack Query + your service layer.
        </CardContent>
      </Card>
    </div>
  )
}
