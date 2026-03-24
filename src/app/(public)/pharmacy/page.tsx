import Image from "next/image"
import Link from "next/link"

import { PublicPageHero } from "@/components/public/public-page-hero"
import { HOSPITAL } from "@/lib/constants"
import { publicImages } from "@/lib/public-images"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PublicPharmacyPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PublicPageHero
        src={publicImages.heroMain}
        alt={`${HOSPITAL.shortName} — hospital care connected to pharmacy services`}
        eyebrow="Medication safety"
        title="Pharmacy integrated with inpatient and outpatient care"
      />
      <h1 className="text-3xl font-semibold tracking-tight">Pharmacy services</h1>
      <p className="text-muted-foreground mt-3 max-w-3xl text-sm">
        Inpatient, outpatient, and specialty pharmacy workflows share a unified inventory backbone with
        dispensing checkpoints, interaction alerts (UI placeholders), and billing synchronization panels.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card className="overflow-hidden shadow-sm">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={publicImages.patientCare}
              alt="Pharmacist counseling a patient at discharge"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" aria-hidden />
          </div>
          <CardHeader>
            <CardTitle>Retail & discharge counseling</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Queue-based dispensing with label preview, signature capture hooks, and education leaflets.
          </CardContent>
        </Card>
        <Card className="overflow-hidden shadow-sm">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={publicImages.technology}
              alt="Pharmacy operations, inventory systems, and compliance monitoring"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" aria-hidden />
          </div>
          <CardHeader>
            <CardTitle>340B & compliance aware</CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm">
            Program carve-outs and audit trails can bind to the same SKU master used across branches.
          </CardContent>
        </Card>
      </div>
      <Link className={buttonVariants({ className: "mt-8 inline-flex" })} href="/login/patient">
        Patient prescription center
      </Link>
    </div>
  )
}
