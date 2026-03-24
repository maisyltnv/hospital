import Link from "next/link"

import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SessionExpiredPage() {
  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Session expired</CardTitle>
        <CardDescription>
          For HIPAA-oriented deployments, surface idle timeout reasons without leaking sensitive context.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        <p className="text-muted-foreground text-sm">
          Your secure session ended after a period of inactivity. Clinical drafts are autosaved server-side
          when connected to your backend.
        </p>
        <Link className={buttonVariants()} href="/login/staff">
          Sign in again
        </Link>
        <Link className={buttonVariants({ variant: "outline" })} href="/">
          Return to public site
        </Link>
      </CardContent>
    </Card>
  )
}
