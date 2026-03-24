import type { ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

type PageHeaderProps = {
  title: string
  description?: string
  badge?: string
  actions?: ReactNode
  className?: string
}

export function PageHeader({ title, description, badge, actions, className }: PageHeaderProps) {
  return (
    <div className={cn("flex flex-col gap-4 md:flex-row md:items-start md:justify-between", className)}>
      <div className="min-w-0 space-y-1">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-foreground text-2xl font-semibold tracking-tight">{title}</h1>
          {badge ? (
            <Badge variant="secondary" className="font-normal">
              {badge}
            </Badge>
          ) : null}
        </div>
        {description ? (
          <p className="text-muted-foreground max-w-3xl text-sm leading-relaxed">{description}</p>
        ) : null}
      </div>
      {actions ? <div className="flex shrink-0 flex-wrap items-center gap-2">{actions}</div> : null}
      <Separator className="md:hidden" />
    </div>
  )
}
