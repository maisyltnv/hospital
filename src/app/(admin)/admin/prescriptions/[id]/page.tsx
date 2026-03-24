import Link from "next/link"
import { notFound } from "next/navigation"

import { mockPrescriptions } from "@/lib/data"
import { PageHeader } from "@/components/hospital/page-header"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Props = { params: Promise<{ id: string }> }

export default async function PrescriptionDetailPage({ params }: Props) {
  const { id } = await params
  const rx = mockPrescriptions.find((r) => r.id === id)
  if (!rx) notFound()

  return (
    <div className="space-y-6">
      <PageHeader
        title={`Prescription ${rx.id}`}
        description="Printable layout + email modal hook into template service."
        actions={
          <>
            <Button type="button" variant="secondary" size="sm">
              Print
            </Button>
            <Link href="/admin/prescriptions" className={buttonVariants({ variant: "outline", size: "sm" })}>
              Back
            </Link>
          </>
        }
      />
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Medications</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {rx.lines.map((l) => (
            <div key={l.medicine} className="flex flex-wrap justify-between gap-2 rounded-md border p-3 text-sm">
              <div>
                <p className="font-medium">{l.medicine}</p>
                <p className="text-muted-foreground text-xs">{l.generic}</p>
              </div>
              <div className="text-right text-xs">
                <p>
                  {l.dose} · {l.frequency} · {l.duration}
                </p>
                <Badge variant={l.stockOk ? "secondary" : "destructive"}>
                  Stock {l.stockOk ? "OK" : "Low"}
                </Badge>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}
