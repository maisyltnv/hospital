import Image from "next/image"
import Link from "next/link"
import { Search } from "lucide-react"

import { PublicPageHero } from "@/components/public/public-page-hero"
import { DEPARTMENTS, HOSPITAL } from "@/lib/constants"
import { departmentImageById, publicImages } from "@/lib/public-images"
import { mockDoctors } from "@/lib/data/staff"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function DoctorsDirectoryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <PublicPageHero
        src={publicImages.medicalTeam}
        alt={`Specialist physicians and care teams at ${HOSPITAL.shortName}`}
        eyebrow="Find care"
        title="Board-certified doctors across our hospital network"
      />
      <h1 className="text-3xl font-semibold tracking-tight">Find a doctor</h1>
      <p className="text-muted-foreground mt-3 max-w-2xl text-sm">
        Search by name, specialty, or department. Profiles mirror the data model used internally for
        scheduling, fee schedules, and utilization analytics.
      </p>
      <Card className="mt-8 shadow-sm">
        <CardContent className="flex flex-col gap-4 p-4 md:flex-row md:items-end">
          <div className="flex-1 space-y-2">
            <label className="text-muted-foreground text-xs font-medium" htmlFor="doc-search">
              Name or keyword
            </label>
            <div className="relative">
              <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
              <Input id="doc-search" className="pl-9" placeholder="e.g. Vasquez, cardiology" />
            </div>
          </div>
          <div className="w-full space-y-2 md:w-56">
            <span className="text-muted-foreground text-xs font-medium">Department</span>
            <Select defaultValue="all">
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                {DEPARTMENTS.map((d) => (
                  <SelectItem key={d.id} value={d.id}>
                    {d.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {mockDoctors.map((doc) => (
          <Card key={doc.id} className="overflow-hidden shadow-sm">
            <div className="relative aspect-[16/7] w-full sm:aspect-[21/6]">
              <Image
                src={departmentImageById[doc.departmentId] ?? publicImages.facility}
                alt={`${doc.specialty} care at ${HOSPITAL.shortName}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/40 to-transparent"
                aria-hidden
              />
            </div>
            <CardContent className="flex flex-col gap-3 p-5 sm:flex-row sm:justify-between">
              <div>
                <p className="text-lg font-semibold">{doc.fullName}</p>
                <p className="text-primary text-sm font-medium">{doc.specialty}</p>
                <p className="text-muted-foreground mt-1 text-xs">{doc.qualifications}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge variant="secondary">{doc.branchId === "hq" ? "Main Campus" : "Branch"}</Badge>
                  <Badge variant="outline">Consult ${doc.consultationFee}</Badge>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:items-end">
                <Link className="text-primary text-sm font-medium" href={`/doctors/${doc.id}`}>
                  View profile
                </Link>
                <Link className="text-muted-foreground text-sm" href="/book-appointment">
                  Book visit
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
