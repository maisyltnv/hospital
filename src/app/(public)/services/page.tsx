import Image from "next/image"
import { Ambulance, Bone, Brain, HeartPulse, Pill, Scan } from "lucide-react"

import { PublicPageHero } from "@/components/public/public-page-hero"
import { HOSPITAL } from "@/lib/constants"
import { departmentImageById, publicImages } from "@/lib/public-images"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    title: "Emergency & critical care",
    desc: "Tiered triage, trauma pathways, and rapid diagnostics orchestration.",
    icon: Ambulance,
    image: publicImages.emergencyTriage,
    imageAlt: "Emergency department triage and acute hospital care",
  },
  {
    title: "Cardiovascular institute",
    desc: "Structural heart, cath lab, and remote monitoring readiness.",
    icon: HeartPulse,
    image: publicImages.cardiologyCare,
    imageAlt: "Cardiac monitoring and cardiovascular care in a hospital",
  },
  {
    title: "Neurosciences",
    desc: "Stroke center workflows with imaging escalation and neurology consults.",
    icon: Brain,
    image: publicImages.neurologyClinical,
    imageAlt: "Neurology consultation and brain health in a clinical setting",
  },
  {
    title: "Orthopedics & sports medicine",
    desc: "Surgical booking, PT handoffs, and implant tracking placeholders.",
    icon: Bone,
    image: departmentImageById.ortho,
    imageAlt: "Orthopedics and movement — rehabilitation and sports medicine context",
  },
  {
    title: "Advanced imaging",
    desc: "RIS/PACS integration settings with modality-aware scheduling language.",
    icon: Scan,
    image: publicImages.technology,
    imageAlt: "Medical imaging and diagnostic technology in a hospital",
  },
  {
    title: "Infusion & specialty pharmacy",
    desc: "Cold-chain batch management and medication therapy management panels.",
    icon: Pill,
    image: publicImages.pharmacy,
    imageAlt: "Hospital pharmacy and safe medication handling",
  },
] as const

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PublicPageHero
        src={publicImages.laboratory}
        alt={`Diagnostics and clinical services supporting care at ${HOSPITAL.shortName}`}
        eyebrow={HOSPITAL.shortName}
        title="Full-spectrum clinical services"
      />
      <h1 className="text-3xl font-semibold tracking-tight">Clinical services</h1>
      <p className="text-muted-foreground mt-3 max-w-3xl text-sm">
        Service catalog entries align with how charges, authorizations, and clinical documentation will attach
        in a connected EMR — each item is a candidate FHIR `HealthcareService` mapping.
      </p>
      <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title} className="overflow-hidden shadow-sm">
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={s.image}
                alt={s.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent"
                aria-hidden
              />
            </div>
            <CardHeader>
              <s.icon className="text-primary mb-2 size-8" />
              <CardTitle className="text-lg">{s.title}</CardTitle>
              <CardDescription>{s.desc}</CardDescription>
            </CardHeader>
            <CardContent />
          </Card>
        ))}
      </div>
    </div>
  )
}
