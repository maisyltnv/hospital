import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"

export default function PatientMessagesPage() {
  return (
    <div className="space-y-6">
      <PageHeader title="Messages" description="Asynchronous provider messaging with read receipts." />
      <Card>
        <CardContent className="text-muted-foreground p-6 text-sm">Inbox empty (demo).</CardContent>
      </Card>
    </div>
  )
}
