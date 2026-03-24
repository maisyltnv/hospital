import { PageHeader } from "@/components/hospital/page-header"
import { mockNotifications } from "@/lib/data/operations"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function NotificationsHubPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Notifications & communication"
        description="SMS, email, WhatsApp templates with delivery receipts — integrate Twilio / SendGrid / Meta."
      />
      <Tabs defaultValue="history">
        <TabsList>
          <TabsTrigger value="history">History</TabsTrigger>
          <TabsTrigger value="sms">SMS templates</TabsTrigger>
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="wa">WhatsApp</TabsTrigger>
        </TabsList>
        <TabsContent value="history" className="mt-4 space-y-2">
          {mockNotifications.map((n) => (
            <Card key={n.id}>
              <CardContent className="flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
                <div>
                  <p className="font-medium">{n.title}</p>
                  <p className="text-muted-foreground text-xs">{n.body}</p>
                </div>
                <Badge variant="secondary">{n.channel}</Badge>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="sms" className="text-muted-foreground mt-4 text-sm">
          Template editor with merge fields: {"{{patient_name}}"}, {"{{appointment_time}}"}…
        </TabsContent>
        <TabsContent value="email" className="text-muted-foreground mt-4 text-sm">
          HTML preview pane + subject line A/B placeholders.
        </TabsContent>
        <TabsContent value="wa" className="text-muted-foreground mt-4 text-sm">
          WhatsApp Business template approval IDs and locale variants.
        </TabsContent>
      </Tabs>
    </div>
  )
}
