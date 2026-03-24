import Image from "next/image"
import Link from "next/link"

import { PublicPageHero } from "@/components/public/public-page-hero"
import { HOSPITAL } from "@/lib/constants"
import { LABORATORY_DISCIPLINES, publicImages } from "@/lib/public-images"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PublicLaboratoryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PublicPageHero
        src={publicImages.laboratory}
        alt={`Hospital laboratory and diagnostics at ${HOSPITAL.shortName}`}
        eyebrow="Diagnostics"
        title="Accredited lab medicine supporting every clinical pathway"
      />
      <h1 className="text-3xl font-semibold tracking-tight">Laboratory services</h1>
      <p className="text-muted-foreground mt-3 max-w-3xl text-sm leading-relaxed">
        Our LIS-oriented modules support collection, processing, verification, and patient delivery with
        full-chain auditability. Public content highlights capabilities; operational consoles live in the
        technician portal.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {LABORATORY_DISCIPLINES.map((row) => (
          <Card key={row.title} className="overflow-hidden shadow-sm">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={row.image}
                alt={row.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-primary/20" aria-hidden />
            </div>
            <CardHeader>
              <CardTitle className="text-base">{row.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm">
              Turnaround targets, reflex rules, and QC hooks are modeled for instrument middleware.
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-10 flex flex-wrap gap-3">
        <Link className={buttonVariants()} href="/book-appointment">
          Book a collection appointment
        </Link>
        <Link className={buttonVariants({ variant: "outline" })} href="/login/patient">
          View results in portal
        </Link>
      </div>
    </div>
  )
}
