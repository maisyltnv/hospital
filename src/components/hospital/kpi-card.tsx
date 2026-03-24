import type { LucideIcon } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type KpiCardProps = {
  title: string
  value: string | number
  hint?: string
  icon?: LucideIcon
  trend?: string
  className?: string
}

export function KpiCard({ title, value, hint, icon: Icon, trend, className }: KpiCardProps) {
  return (
    <Card className={cn("shadow-sm", className)}>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <CardTitle className="text-muted-foreground text-sm font-medium">{title}</CardTitle>
        {Icon ? <Icon className="text-primary size-4" aria-hidden /> : null}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold tracking-tight">{value}</div>
        {hint ? <p className="text-muted-foreground mt-1 text-xs">{hint}</p> : null}
        {trend ? <p className="text-muted-foreground mt-2 text-xs">{trend}</p> : null}
      </CardContent>
    </Card>
  )
}
