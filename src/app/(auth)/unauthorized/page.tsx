import Link from "next/link"

import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function UnauthorizedPage() {
  return (
    <Card className="border-destructive/30 shadow-md">
      <CardHeader>
        <CardTitle>Unauthorized</CardTitle>
        <CardDescription>
          You attempted to access a module outside your assigned role. Events like this should be written to
          the security audit stream.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p className="text-muted-foreground text-sm">
          Requested resource: <span className="text-foreground font-mono text-xs">/admin/security/matrix</span>
        </p>
        <Link className={buttonVariants()} href="/admin">
          Back to your dashboard
        </Link>
        <Link className={buttonVariants({ variant: "outline" })} href="/unauthorized">
          Request access (mock)
        </Link>
      </CardContent>
    </Card>
  )
}
