import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const appointmentStyles: Record<string, string> = {
  Scheduled: "bg-slate-500/10 text-slate-800 dark:text-slate-200",
  "Checked In": "bg-sky-500/15 text-sky-900 dark:text-sky-100",
  "In Consultation": "bg-violet-500/15 text-violet-900 dark:text-violet-100",
  Completed: "bg-emerald-500/15 text-emerald-900 dark:text-emerald-100",
  Cancelled: "bg-zinc-500/15 text-zinc-800 dark:text-zinc-200",
  "No Show": "bg-rose-500/15 text-rose-900 dark:text-rose-100",
  Rescheduled: "bg-amber-500/15 text-amber-900 dark:text-amber-100",
}

const invoiceStyles: Record<string, string> = {
  Draft: "bg-zinc-500/10",
  Issued: "bg-sky-500/15",
  "Partially Paid": "bg-amber-500/15",
  Paid: "bg-emerald-500/15",
  Overdue: "bg-rose-500/15",
  Cancelled: "bg-zinc-500/10",
}

const labStyles: Record<string, string> = {
  Requested: "bg-slate-500/10",
  "Sample Collected": "bg-sky-500/15",
  "In Progress": "bg-violet-500/15",
  Verified: "bg-emerald-500/15",
  Reported: "bg-teal-500/15",
  Cancelled: "bg-zinc-500/10",
}

export function AppointmentStatusBadge({ status }: { status: string }) {
  return (
    <Badge
      variant="secondary"
      className={cn("font-normal", appointmentStyles[status] ?? "bg-muted")}
    >
      {status}
    </Badge>
  )
}

export function InvoiceStatusBadge({ status }: { status: string }) {
  return (
    <Badge variant="secondary" className={cn("font-normal", invoiceStyles[status] ?? "bg-muted")}>
      {status}
    </Badge>
  )
}

export function LabStatusBadge({ status }: { status: string }) {
  return (
    <Badge variant="secondary" className={cn("font-normal", labStyles[status] ?? "bg-muted")}>
      {status}
    </Badge>
  )
}
