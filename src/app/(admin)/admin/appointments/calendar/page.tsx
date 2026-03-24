import { PageHeader } from "@/components/hospital/page-header"
import { Card, CardContent } from "@/components/ui/card"

export default function AppointmentCalendarPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Appointment calendar"
        description="Swap this canvas for FullCalendar, react-big-calendar, or your scheduling service embed. Resource columns = rooms & physicians."
      />
      <Card className="shadow-sm">
        <CardContent className="text-muted-foreground flex min-h-[420px] items-center justify-center text-sm">
          Calendar grid placeholder — wire to `/api/v1/slots` and ICS exports.
        </CardContent>
      </Card>
    </div>
  )
}
