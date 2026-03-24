import Link from "next/link"
import { notFound } from "next/navigation"

import { PublicPageHero } from "@/components/public/public-page-hero"
import { DEPARTMENTS, HOSPITAL } from "@/lib/constants"
import { departmentImageById, publicImages } from "@/lib/public-images"
import { mockDoctors } from "@/lib/data/staff"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

type Props = { params: Promise<{ id: string }> }

export default async function DoctorProfilePage({ params }: Props) {
  const { id } = await params
  const doc = mockDoctors.find((d) => d.id === id)
  if (!doc) notFound()

  const dept = DEPARTMENTS.find((d) => d.id === doc.departmentId)

  const heroSrc = departmentImageById[doc.departmentId] ?? publicImages.medicalTeam

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <PublicPageHero
        src={heroSrc}
        alt={`${dept?.name ?? "Clinical"} services at ${HOSPITAL.shortName}`}
        eyebrow={HOSPITAL.shortName}
        title={`${doc.specialty} · Physician profile`}
        aspectClassName="aspect-[2/1] sm:aspect-[21/9]"
      />
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
        <Card className="w-full flex-1 shadow-md lg:max-w-xs">
          <CardContent className="p-6 text-center">
            <div className="bg-primary/10 text-primary mx-auto flex size-24 items-center justify-center rounded-full text-2xl font-semibold">
              {doc.fullName
                .replace("Dr. ", "")
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <h1 className="mt-4 text-xl font-semibold">{doc.fullName}</h1>
            <p className="text-primary text-sm font-medium">{doc.specialty}</p>
            <p className="text-muted-foreground mt-2 text-xs">{doc.qualifications}</p>
            <Separator className="my-4" />
            <p className="text-muted-foreground text-xs">{dept?.name}</p>
            <Badge className="mt-3" variant="outline">
              Accepting new patients (demo)
            </Badge>
            <Link
              href="/book-appointment"
              className={buttonVariants({ className: "mt-6 w-full justify-center" })}
            >
              Schedule appointment
            </Link>
          </CardContent>
        </Card>
        <div className="flex-1 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Clinical focus</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground space-y-3 text-sm leading-relaxed">
              <p>
                Profile pages are structured to sync with provider directories, privileging records, and
                patient-facing education content. Replace this narrative with live data from your credentialing
                system.
              </p>
              <p>
                Internal modules track OPD utilization, procedure mix, and patient satisfaction cohorts by
                department and branch.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Locations & access</CardTitle>
            </CardHeader>
            <CardContent className="text-sm">
              <p className="text-muted-foreground">
                Main consulting suites at {doc.branchId === "hq" ? "Main Campus" : "North Specialty Center"}.
                Telehealth slots can be enabled per service line when video visit adapters are connected.
              </p>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "outline", className: "mt-4 inline-flex" })}
              >
                Contact department coordinator
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
