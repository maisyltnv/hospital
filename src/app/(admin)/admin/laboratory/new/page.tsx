"use client"

import Link from "next/link"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { PageHeader } from "@/components/hospital/page-header"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

const schema = z.object({
  patientId: z.string().min(1),
  doctorId: z.string().min(1),
  testType: z.string().min(1),
  sampleType: z.string().min(1),
})

type FormValues = z.infer<typeof schema>

export default function NewLabRequestPage() {
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { patientId: "", doctorId: "", testType: "", sampleType: "Serum" },
  })

  return (
    <div className="space-y-6">
      <PageHeader
        title="Create lab request"
        actions={<Link href="/admin/laboratory" className={buttonVariants({ variant: "outline" })}>Cancel</Link>}
      />
      <Card className="max-w-lg">
        <CardContent className="pt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(() => alert("Queued (mock)"))} className="space-y-4">
              {(["patientId", "doctorId", "testType", "sampleType"] as const).map((name) => (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{name}</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}
              <Button type="submit">Submit request</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}
