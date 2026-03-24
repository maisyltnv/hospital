import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Award,
  Building2,
  HeartPulse,
  Microscope,
  Pill,
  Quote,
  ShieldCheck,
  Stethoscope,
} from "lucide-react"

import { DEPARTMENTS, HOSPITAL } from "@/lib/constants"
import { departmentImageById, publicImages } from "@/lib/public-images"
import { mockDoctors } from "@/lib/data/staff"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

const partners = ["BlueCross Premier", "HealthSure HMO", "National Health Partners", "KidsCare Select"]

const news = [
  {
    title: "New cardiac catheterization suite opens at Main Campus",
    date: "Mar 18, 2026",
  },
  {
    title: "Flu vaccination clinic — extended Saturday hours",
    date: "Mar 12, 2026",
  },
]

const testimonials = [
  {
    quote:
      "The care team coordinated my labs, imaging, and follow-up in one portal. It felt like a single accountable team.",
    name: "Margaret C.",
    context: "Cardiology patient",
  },
  {
    quote:
      "As a referring physician, I appreciate structured clinical summaries and timely result notifications.",
    name: "Dr. Luis R.",
    context: "External PCP",
  },
]

const faq = [
  {
    q: "How do I prepare for lab work?",
    a: "Fasting requirements vary by test. Your order will include preparation instructions and a digital checklist in the patient portal.",
  },
  {
    q: "Can I access imaging reports online?",
    a: "Yes — verified reports appear in your portal with audit-friendly access logs. PACS integration hooks are provisioned for enterprise rollout.",
  },
]

export default function HomePage() {
  return (
    <>
      <section className="from-primary/12 via-background to-background relative overflow-hidden bg-gradient-to-b">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:flex lg:items-center lg:gap-12 lg:px-8 lg:py-24">
          <div className="max-w-xl flex-1">
            <Badge variant="secondary" className="mb-4">
              Multi-campus · EMR-ready architecture
            </Badge>
            <h1 className="text-foreground text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Serious hospital operations. Thoughtful digital experience.
            </h1>
            <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
              {HOSPITAL.name} unifies outpatient, inpatient, diagnostics, pharmacy, and revenue cycle on
              one modular platform — designed for HL7/FHIR integrations and real-world clinical governance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book-appointment"
                className={cn(buttonVariants({ size: "lg" }), "inline-flex items-center")}
              >
                Book an appointment
                <ArrowRight className="ml-2 size-4" />
              </Link>
              <Link href="/doctors" className={buttonVariants({ size: "lg", variant: "outline" })}>
                Find a specialist
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="flex items-start gap-2">
                <ShieldCheck className="text-primary mt-0.5 size-5 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Trust & safety</p>
                  <p className="text-muted-foreground text-xs">RBAC-aware UI with PHI callouts</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <HeartPulse className="text-primary mt-0.5 size-5 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Clinical depth</p>
                  <p className="text-muted-foreground text-xs">OPD, IPD, LIS, RIS/PACS hooks</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Award className="text-primary mt-0.5 size-5 shrink-0" />
                <div>
                  <p className="text-sm font-medium">Enterprise UX</p>
                  <p className="text-muted-foreground text-xs">Dashboards tuned by role</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 w-full flex-1 space-y-5 lg:mt-0">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-black/5 dark:ring-white/10">
              <Image
                src={publicImages.heroMain}
                alt="Doctor and patient in a modern hospital consultation — compassionate clinical care"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-tr from-primary/50 via-primary/10 to-transparent"
                aria-hidden
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-background/90 px-4 py-3 text-sm shadow-md backdrop-blur-sm dark:bg-background/80">
                <p className="font-medium text-foreground">24/7 emergency & acute care</p>
                <p className="text-muted-foreground text-xs">Trusted teams · Advanced diagnostics · Patient-first</p>
              </div>
            </div>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle className="text-lg">Find care quickly</CardTitle>
                <CardDescription>Search by physician, specialty, or department.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="text-muted-foreground text-xs font-medium" htmlFor="hero-q">
                      Keyword
                    </label>
                    <Input id="hero-q" placeholder="Doctor name or specialty" className="mt-1" />
                  </div>
                  <div>
                    <label className="text-muted-foreground text-xs font-medium" htmlFor="hero-dept">
                      Department
                    </label>
                    <Input id="hero-dept" placeholder="e.g. Cardiology" className="mt-1" />
                  </div>
                </div>
                <Link href="/doctors" className={cn(buttonVariants(), "w-full justify-center")}>
                  Search directory
                </Link>
                <p className="text-muted-foreground text-center text-xs">
                  Prefer to talk?{" "}
                  <a className="text-primary font-medium" href={`tel:${HOSPITAL.mainLine.replace(/\s/g, "")}`}>
                    {HOSPITAL.mainLine}
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-primary text-center text-sm font-semibold tracking-wide uppercase">
            Hospital · Healing · Hope
          </p>
          <h2 className="mx-auto mt-2 max-w-2xl text-center text-2xl font-semibold tracking-tight">
            A place built for real patients, families, and clinical teams
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                src: publicImages.facility,
                title: "Modern facilities",
                caption: "Safe, bright environments for recovery and treatment",
              },
              {
                src: publicImages.technology,
                title: "Advanced care",
                caption: "Monitoring, imaging, and lab pathways you can trust",
              },
              {
                src: publicImages.patientCare,
                title: "Human-centered care",
                caption: "Nurses and physicians focused on every patient journey",
              },
            ].map((tile) => (
              <div
                key={tile.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-black/5 dark:ring-white/10"
              >
                <Image
                  src={tile.src}
                  alt={tile.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
                  aria-hidden
                />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-lg font-semibold">{tile.title}</p>
                  <p className="mt-1 text-sm text-white/85">{tile.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Clinical departments</h2>
            <p className="text-muted-foreground mt-1 max-w-2xl text-sm">
              Structured for multi-clinic scale — each department can carry isolated schedules, inventory, and
              reporting slices.
            </p>
          </div>
          <Link href="/departments" className={buttonVariants({ variant: "outline" })}>
            View all
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DEPARTMENTS.slice(0, 8).map((d) => (
            <Card key={d.id} className="overflow-hidden shadow-sm transition-shadow hover:shadow-md">
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={departmentImageById[d.id] ?? publicImages.facility}
                  alt={`${d.name} — hospital clinical service`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" aria-hidden />
              </div>
              <CardHeader className="pb-2">
                <div className="text-primary mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Stethoscope className="size-5" />
                </div>
                <CardTitle className="text-base">{d.name}</CardTitle>
                <CardDescription className="text-xs">Head: {d.head}</CardDescription>
              </CardHeader>
              <CardContent>
                <Link className="text-primary text-sm font-medium" href={`/departments#${d.id}`}>
                  Department details
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 border-y">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Featured physicians</h2>
              <p className="text-muted-foreground mt-2 text-sm">
                Directory pages support deep profiles, insurance notes, and booking handoff into the patient
                portal workflow.
              </p>
              <div className="mt-6 space-y-4">
                {mockDoctors.map((doc) => (
                  <Card key={doc.id} className="shadow-sm">
                    <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="font-medium">{doc.fullName}</p>
                        <p className="text-muted-foreground text-sm">{doc.specialty}</p>
                        <p className="text-muted-foreground text-xs">{doc.qualifications}</p>
                      </div>
                      <Link
                        href={`/doctors/${doc.id}`}
                        className={buttonVariants({ variant: "secondary", size: "sm" })}
                      >
                        View profile
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Link href="/doctors" className={cn(buttonVariants({ variant: "outline" }), "mt-6 inline-flex")}>
                Browse full directory
              </Link>
            </div>
            <div className="space-y-6">
              <Card className="overflow-hidden pt-0">
                <div className="relative aspect-[21/9] w-full">
                  <Image
                    src={publicImages.laboratory}
                    alt="Laboratory technician working with medical diagnostics equipment"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" aria-hidden />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Microscope className="size-5" />
                    Laboratory & diagnostics
                  </CardTitle>
                  <CardDescription>
                    CAP-style workflow language with STAT flags, verification, and instrument mapping
                    placeholders.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  <Badge variant="secondary">LIS adapters</Badge>
                  <Badge variant="secondary">Barcode-ready UI</Badge>
                  <Badge variant="secondary">Critical value path</Badge>
                </CardContent>
              </Card>
              <Card className="overflow-hidden pt-0">
                <div className="relative aspect-[21/9] w-full">
                  <Image
                    src={publicImages.pharmacy}
                    alt="Pharmacist reviewing medication in a hospital pharmacy"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" aria-hidden />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Pill className="size-5" />
                    Pharmacy services
                  </CardTitle>
                  <CardDescription>
                    Dispensing queues, batch tracking, and billing sync panels mirror production HIMS
                    expectations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/pharmacy" className={buttonVariants({ variant: "outline", size: "sm" })}>
                    Pharmacy overview
                  </Link>
                </CardContent>
              </Card>
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-lg">Insurance partners</CardTitle>
                  <CardDescription>Representative payers — eligibility & claims UI is pre-wired.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {partners.map((p) => (
                    <Badge key={p} variant="outline">
                      {p}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <h2 className="text-xl font-semibold">News & announcements</h2>
            <ul className="mt-4 space-y-4">
              {news.map((n) => (
                <li key={n.title} className="border-b pb-4 last:border-0">
                  <p className="text-muted-foreground text-xs">{n.date}</p>
                  <p className="mt-1 text-sm font-medium">{n.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold">What patients & partners say</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {testimonials.map((t) => (
                <Card key={t.name} className="shadow-sm">
                  <CardContent className="p-5">
                    <Quote className="text-primary mb-2 size-6 opacity-70" />
                    <p className="text-sm leading-relaxed">{t.quote}</p>
                    <Separator className="my-4" />
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.context}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 border-t">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold">Frequently asked questions</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faq.map((f) => (
              <Card key={f.q} className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">{f.q}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <Building2 className="text-primary mt-1 size-6" />
              <div>
                <p className="font-semibold">Ready for enterprise rollout</p>
                <p className="text-muted-foreground text-sm">
                  Modular routes mirror how a real HIMS maps to services, queues, and integrations.
                </p>
              </div>
            </div>
            <Link href="/contact" className={buttonVariants({ size: "lg" })}>
              Contact hospital administration
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
