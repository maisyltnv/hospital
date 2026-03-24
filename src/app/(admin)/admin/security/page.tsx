import Link from "next/link"

import { PageHeader } from "@/components/hospital/page-header"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SecurityPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Security, privacy & audit"
        description="Role-based access, session analytics, and PHI access traces."
        badge="Sensitive"
      />
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Compliance badges</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            <Badge>TLS 1.3</Badge>
            <Badge variant="secondary">AES-256 at rest</Badge>
            <Badge variant="outline">SOC2 controls (planned)</Badge>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Tools</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm">
            <Link className={buttonVariants({ variant: "outline", size: "sm" })} href="/admin/security/matrix">
              Permission matrix
            </Link>
            <Link className={buttonVariants({ variant: "outline", size: "sm" })} href="/admin/security/trace">
              Data access trace
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
