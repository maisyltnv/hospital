"use client"

import Link from "next/link"
import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { DEPARTMENTS } from "@/lib/constants"
import { mockDoctors } from "@/lib/data/staff"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

const slots = ["08:30", "09:00", "10:15", "11:00", "14:00", "15:30"]

export function BookingWizard() {
  const [step, setStep] = useState(0)
  const [dept, setDept] = useState(DEPARTMENTS[0]?.id ?? "")
  const [doc, setDoc] = useState(mockDoctors[0]?.id ?? "")
  const [slot, setSlot] = useState(slots[0] ?? "")

  return (
    <>
      <h1 className="text-3xl font-semibold tracking-tight">Online appointment booking</h1>
      <p className="text-muted-foreground mt-2 max-w-2xl text-sm">
        Guided booking mirrors the patient self-service flow: department selection, provider choice, slot
        picking, insurance capture (skipped here), and confirmation with reminder preferences.
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {["Department", "Provider", "Slot", "Confirm"].map((label, i) => (
          <Badge key={label} variant={step === i ? "default" : "secondary"}>
            {i + 1}. {label}
          </Badge>
        ))}
      </div>
      <Card className="mt-8 shadow-md">
        <CardHeader>
          <CardTitle>
            {step === 0 && "Choose department"}
            {step === 1 && "Choose physician"}
            {step === 2 && "Choose time slot"}
            {step === 3 && "Confirmation"}
          </CardTitle>
          <CardDescription>
            Data binds to the same appointment entity used in the reception console — ready for REST/GraphQL.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {step === 0 && (
            <RadioGroup value={dept} onValueChange={setDept} className="grid gap-3">
              {DEPARTMENTS.map((d) => (
                <label
                  key={d.id}
                  className="border-input hover:bg-muted/50 flex cursor-pointer items-center gap-3 rounded-lg border p-3"
                >
                  <RadioGroupItem value={d.id} id={d.id} />
                  <div>
                    <p className="font-medium">{d.name}</p>
                    <p className="text-muted-foreground text-xs">Head: {d.head}</p>
                  </div>
                </label>
              ))}
            </RadioGroup>
          )}
          {step === 1 && (
            <RadioGroup value={doc} onValueChange={setDoc} className="grid gap-3">
              {mockDoctors.map((d) => (
                <label
                  key={d.id}
                  className="border-input hover:bg-muted/50 flex cursor-pointer items-center gap-3 rounded-lg border p-3"
                >
                  <RadioGroupItem value={d.id} id={`doc-${d.id}`} />
                  <div>
                    <p className="font-medium">{d.fullName}</p>
                    <p className="text-muted-foreground text-xs">{d.specialty}</p>
                  </div>
                </label>
              ))}
            </RadioGroup>
          )}
          {step === 2 && (
            <div className="grid gap-3 sm:grid-cols-3">
              {slots.map((s) => (
                <Button
                  key={s}
                  type="button"
                  variant={slot === s ? "default" : "outline"}
                  onClick={() => setSlot(s)}
                >
                  {s}
                </Button>
              ))}
            </div>
          )}
          {step === 3 && (
            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4">
                <CheckCircle2 className="text-emerald-600 mt-0.5 size-6 shrink-0" />
                <div>
                  <p className="font-medium">Booking preview (mock)</p>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Department: {DEPARTMENTS.find((d) => d.id === dept)?.name}
                    <br />
                    Provider: {mockDoctors.find((d) => d.id === doc)?.fullName}
                    <br />
                    Slot: {slot} — reminders via SMS & email (template-driven).
                  </p>
                </div>
              </div>
              <div className="grid gap-2">
                <Label>Reminder preferences</Label>
                <p className="text-muted-foreground text-xs">
                  Channel toggles map to notification settings in the integrations module.
                </p>
              </div>
            </div>
          )}
          <Separator />
          <div className="flex flex-wrap justify-between gap-2">
            <Button
              type="button"
              variant="outline"
              disabled={step === 0}
              onClick={() => setStep((s) => Math.max(0, s - 1))}
            >
              Back
            </Button>
            {step < 3 ? (
              <Button type="button" onClick={() => setStep((s) => s + 1)}>
                Continue
              </Button>
            ) : (
              <Link href="/patient" className={buttonVariants()}>
                Open patient portal (demo)
              </Link>
            )}
          </div>
        </CardContent>
      </Card>
    </>
  )
}
