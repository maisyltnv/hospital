"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { HOSPITAL } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { buttonVariants } from "@/components/ui/button-variants"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  email: z.string().email("Enter a valid email"),
  password: z.string().min(8, "At least 8 characters"),
})

type FormValues = z.infer<typeof schema>

export default function PatientLoginPage() {
  const router = useRouter()
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  })

  function onSubmit(values: FormValues) {
    void values
    router.push("/patient")
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Patient portal login</CardTitle>
        <CardDescription>
          Authentication-ready form for {HOSPITAL.shortName}. Wire to your IdP or EMR patient API.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" autoComplete="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" autoComplete="current-password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Sign in (mock)
            </Button>
          </form>
        </Form>
        <div className="text-muted-foreground mt-4 flex flex-col gap-2 text-center text-sm">
          <Link className="text-primary font-medium" href="/forgot-password">
            Forgot password?
          </Link>
          <Link className={buttonVariants({ variant: "outline", size: "sm" })} href="/book-appointment">
            New patient â€” book first visit
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
