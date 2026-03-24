import { Building2, HeartHandshake, Microscope, Users } from "lucide-react"

import { PublicPageHero } from "@/components/public/public-page-hero"
import { HOSPITAL } from "@/lib/constants"
import { publicImages } from "@/lib/public-images"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PublicPageHero
        src={publicImages.medicalTeam}
        alt="Surgical and clinical team in a hospital operating environment"
        eyebrow="Academic medicine"
        title="Healing backed by research & training"
        priority
      />
      <h1 className="text-3xl font-semibold tracking-tight">About {HOSPITAL.name}</h1>
      <p className="text-muted-foreground mt-3 max-w-3xl text-sm leading-relaxed">
        We are a multi-campus academic health system delivering coordinated acute, specialty, and ambulatory
        care. Our digital platform is engineered for regulated environments: strict access controls, rich
        audit surfaces, and integration pathways for EMR/EHR, LIS, RIS/PACS, pharmacy, and revenue systems.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Building2 className="text-primary size-5" />
              Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm leading-relaxed">
            Improve outcomes through evidence-based protocols, transparent communication, and technology that
            amplifies — not replaces — clinical judgment.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Users className="text-primary size-5" />
              People
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm leading-relaxed">
            Interdisciplinary teams spanning nursing, laboratory medicine, radiology, pharmacy, and revenue
            cycle collaborate on shared operational dashboards.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Microscope className="text-primary size-5" />
              Innovation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm leading-relaxed">
            FHIR-first integration panels, webhook visibility, and API key governance prepare you for
            enterprise interoperability programs.
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <HeartHandshake className="text-primary size-5" />
              Community
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground text-sm leading-relaxed">
            Population health initiatives, school nursing partnerships, and charity care reporting are
            supported through modular analytics slices.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
