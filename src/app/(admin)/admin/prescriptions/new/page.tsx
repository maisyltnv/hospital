"use client"

import Link from "next/link"
import { useFieldArray, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { PageHeader } from "@/components/hospital/page-header"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { mockMedicines } from "@/lib/data/operations"

const lineSchema = z.object({
  medicine: z.string().min(1),
  dose: z.string().min(1),
  frequency: z.string().min(1),
  duration: z.string().min(1),
})

const schema = z.object({
  patientId: z.string().min(1),
  doctorId: z.string().min(1),
  lines: z.array(lineSchema).min(1),
})

type FormValues = z.infer<typeof schema>

export default function NewPrescriptionPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      patientId: "p1",
      doctorId: "d1",
      lines: [{ medicine: mockMedicines[0]?.name ?? "", dose: "40mg", frequency: "Daily", duration: "90d" }],
    },
  })
  const { fields, append, remove } = useFieldArray({ control: form.control, name: "lines" })

  return (
    <div className="space-y-6">
      <PageHeader
        title="Prescription builder"
        description="Smart search + stock badges connect to the medicine master &amp; dispensing queue."
        actions={<Link href="/admin/prescriptions" className={buttonVariants({ variant: "outline" })}>Cancel</Link>}
      />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => alert("Rx saved (mock)"))} className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Header</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="patientId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Patient ID</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="doctorId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Prescriber ID</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Medication lines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {fields.map((field, index) => (
                <div key={field.id} className="grid gap-3 rounded-lg border p-3 md:grid-cols-4">
                  <FormField
                    control={form.control}
                    name={`lines.${index}.medicine`}
                    render={({ field: f }) => (
                      <FormItem>
                        <FormLabel>Medicine</FormLabel>
                        <FormControl>
                          <Input {...f} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`lines.${index}.dose`}
                    render={({ field: f }) => (
                      <FormItem>
                        <FormLabel>Dose</FormLabel>
                        <FormControl>
                          <Input {...f} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`lines.${index}.frequency`}
                    render={({ field: f }) => (
                      <FormItem>
                        <FormLabel>Frequency</FormLabel>
                        <FormControl>
                          <Input {...f} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`lines.${index}.duration`}
                    render={({ field: f }) => (
                      <FormItem>
                        <FormLabel>Duration</FormLabel>
                        <FormControl>
                          <Input {...f} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="button" variant="ghost" size="sm" onClick={() => remove(index)}>
                    Remove line
                  </Button>
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() => append({ medicine: "", dose: "", frequency: "", duration: "" })}
              >
                Add line
              </Button>
            </CardContent>
          </Card>
          <div className="flex flex-wrap gap-2">
            <Button type="submit">Sign &amp; save (mock)</Button>
            <Button type="button" variant="secondary">
              Print preview
            </Button>
            <Button type="button" variant="outline">
              Email preview
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
