import Link from "next/link"
import { notFound } from "next/navigation"
import { AlertTriangle, Paperclip } from "lucide-react"

import {
  mockAdmissions,
  mockAppointments,
  mockInvoices,
  mockLabRequests,
  mockPatients,
  mockPrescriptions,
} from "@/lib/data"
import { PageHeader } from "@/components/hospital/page-header"
import { buttonVariants } from "@/components/ui/button-variants"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AppointmentStatusBadge } from "@/components/hospital/status-badges"
import { LabStatusBadge } from "@/components/hospital/status-badges"
import { InvoiceStatusBadge } from "@/components/hospital/status-badges"

type Props = { params: Promise<{ id: string }> }

export default async function PatientProfilePage({ params }: Props) {
  const { id } = await params
  const patient = mockPatients.find((p) => p.id === id)
  if (!patient) notFound()

  const appts = mockAppointments.filter((a) => a.patientId === id)
  const rx = mockPrescriptions.filter((p) => p.patientId === id)
  const labs = mockLabRequests.filter((l) => l.patientId === id)
  const inv = mockInvoices.filter((i) => i.patientId === id)
  const adm = mockAdmissions.filter((a) => a.patientId === id)

  return (
    <div className="space-y-6">
      <PageHeader
        title={`${patient.firstName} ${patient.lastName}`}
        description={`MRN ${patient.mrn} · ${patient.gender} · DOB ${patient.dob}`}
        badge="PHI — logged access"
        actions={
          <>
            <Link
              href={`/admin/appointments/new?patient=${patient.id}`}
              className={buttonVariants({ size: "sm" })}
            >
              Book appointment
            </Link>
            <Link href="/admin/patients" className={buttonVariants({ variant: "outline", size: "sm" })}>
              Back to list
            </Link>
          </>
        }
      />
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-4">
          {patient.allergies.length > 0 ? (
            <div className="flex items-start gap-3 rounded-lg border border-amber-500/40 bg-amber-500/10 p-4 text-sm">
              <AlertTriangle className="text-amber-700 mt-0.5 size-5 shrink-0 dark:text-amber-400" />
              <div>
                <p className="font-semibold text-amber-950 dark:text-amber-100">Allergy alert</p>
                <p className="text-amber-900/90 dark:text-amber-50/90">{patient.allergies.join(", ")}</p>
              </div>
            </div>
          ) : null}
          <Tabs defaultValue="summary">
            <TabsList className="flex w-full flex-wrap">
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="rx">Prescriptions</TabsTrigger>
              <TabsTrigger value="labs">Laboratory</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="ipd">Admissions</TabsTrigger>
              <TabsTrigger value="notes">Notes & files</TabsTrigger>
            </TabsList>
            <TabsContent value="summary" className="space-y-4 pt-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Medical history snapshot</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-3 text-sm">
                  <p>{patient.medicalHistory}</p>
                  <Separator />
                  <p>
                    <span className="text-foreground font-medium">Insurance:</span> {patient.insuranceProvider}{" "}
                    · {patient.policyNumber}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Timeline (mock)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  {appts.slice(0, 3).map((a) => (
                    <div key={a.id} className="border-l-2 border-primary pl-3">
                      <p className="font-medium">
                        {a.date} {a.time} — {a.visitType}
                      </p>
                      <AppointmentStatusBadge status={a.status} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="appointments" className="pt-4">
              <Card>
                <CardContent className="space-y-3 p-4 text-sm">
                  {appts.map((a) => (
                    <div key={a.id} className="flex flex-wrap items-center justify-between gap-2 border-b py-2 last:border-0">
                      <div>
                        <p className="font-medium">
                          {a.date} {a.time}
                        </p>
                        <p className="text-muted-foreground text-xs">{a.visitType}</p>
                      </div>
                      <AppointmentStatusBadge status={a.status} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="rx" className="pt-4">
              <Card>
                <CardContent className="space-y-3 p-4 text-sm">
                  {rx.map((r) => (
                    <div key={r.id} className="rounded-md border p-3">
                      <div className="flex flex-wrap justify-between gap-2">
                        <span className="font-mono text-xs">{r.id}</span>
                        <Badge variant="secondary">{r.status}</Badge>
                      </div>
                      <ul className="text-muted-foreground mt-2 list-inside list-disc text-xs">
                        {r.lines.map((l) => (
                          <li key={l.medicine}>
                            {l.medicine} {l.strength} — {l.frequency}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="labs" className="pt-4">
              <Card>
                <CardContent className="space-y-3 p-4 text-sm">
                  {labs.map((l) => (
                    <div key={l.id} className="flex flex-wrap items-center justify-between gap-2 border-b py-2">
                      <div>
                        <p className="font-medium">{l.testType}</p>
                        <p className="text-muted-foreground text-xs">{l.sampleType}</p>
                      </div>
                      <LabStatusBadge status={l.status} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="billing" className="pt-4">
              <Card>
                <CardContent className="space-y-3 p-4 text-sm">
                  {inv.map((i) => (
                    <div key={i.id} className="flex flex-wrap items-center justify-between gap-2 border-b py-2">
                      <div>
                        <p className="font-mono text-xs">{i.id}</p>
                        <p className="text-muted-foreground text-xs">{i.sourceType}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">${i.amount.toLocaleString()}</span>
                        <InvoiceStatusBadge status={i.status} />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ipd" className="pt-4">
              <Card>
                <CardContent className="space-y-3 p-4 text-sm">
                  {adm.map((a) => (
                    <div key={a.id} className="rounded-md border p-3">
                      <p className="font-medium">
                        {a.ward} {a.room}-{a.bed}
                      </p>
                      <p className="text-muted-foreground text-xs">{a.diagnosis}</p>
                      <Badge className="mt-2" variant="outline">
                        {a.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="notes" className="pt-4">
              <Card>
                <CardContent className="text-muted-foreground flex items-center gap-2 p-6 text-sm">
                  <Paperclip className="size-4" />
                  Attachments &amp; secure document viewer — connect to VNA / object storage with signed URLs.
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
        <Card className="bg-muted/30 h-fit xl:sticky xl:top-20">
          <CardHeader>
            <CardTitle className="text-base">Patient summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            <p>
              <span className="text-muted-foreground">Phone</span>
              <br />
              {patient.phone}
            </p>
            <p>
              <span className="text-muted-foreground">Email</span>
              <br />
              {patient.email}
            </p>
            <p>
              <span className="text-muted-foreground">Emergency</span>
              <br />
              {patient.emergencyContact} · {patient.emergencyPhone}
            </p>
            <Separator />
            <p className="text-xs">Sticky panel persists while scrolling clinical tabs.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
