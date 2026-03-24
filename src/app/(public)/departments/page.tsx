import Image from "next/image"
import Link from "next/link"

import { PublicPageHero } from "@/components/public/public-page-hero"
import { DEPARTMENTS, HOSPITAL } from "@/lib/constants"
import { departmentImageById, publicImages } from "@/lib/public-images"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DepartmentsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PublicPageHero
        src={publicImages.heroMain}
        alt={`Clinical teams and hospital departments at ${HOSPITAL.shortName}`}
        eyebrow="Clinical structure"
        title="Departments built for coordinated hospital care"
      />
      <h1 className="text-3xl font-semibold tracking-tight">Departments & centers of excellence</h1>
      <p className="text-muted-foreground mt-3 max-w-3xl text-sm">
        Each department can be scoped to a branch for scheduling, inventory, and financial reporting. Select a
        department to view public-facing highlights — detailed operational views live in the staff portal.
      </p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {DEPARTMENTS.map((d) => (
          <Card key={d.id} id={d.id} className="scroll-mt-24 overflow-hidden shadow-sm">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={departmentImageById[d.id] ?? publicImages.facility}
                alt={`${d.name} — clinical department at ${HOSPITAL.shortName}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"
                aria-hidden
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <CardTitle className="text-lg">{d.name}</CardTitle>
                <Badge variant="outline" className="font-mono text-[10px]">
                  {d.id.toUpperCase()}
                </Badge>
              </div>
              <CardDescription>Department head: {d.head}</CardDescription>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3 text-sm">
              <p>
                Clinical workflows include triage templates, order sets, and cross-department handoffs modeled
                for future EMR integration.
              </p>
              <Link className="text-primary text-sm font-medium" href="/book-appointment">
                Request an appointment in this service line
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
