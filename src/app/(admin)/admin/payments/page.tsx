import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PaymentsPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Payment tracking"
        description="Payment gateway tokens, partial captures, and refunds — PCI scope aware UI."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Card</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-xs">Stripe / Adyen placeholders</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">ACH</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-xs">Bank transfer reconciliation</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Wallet</CardTitle>
          </CardHeader>
          <CardContent>
            <Badge>Apple / Google Pay ready</Badge>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
