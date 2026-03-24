"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

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
  username: z.string().min(3, "Enter your username"),
  password: z.string().min(8, "At least 8 characters"),
})

type FormValues = z.infer<typeof schema>

export default function StaffLoginPage() {
  const router = useRouter()
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { username: "", password: "" },
  })

  function onSubmit(values: FormValues) {
    void values
    router.push("/admin")
  }

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Staff & clinical login</CardTitle>
        <CardDescription>
          SSO, smart card, and MFA challenges can wrap this screen. Demo routes to the hospital admin console.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input autoComplete="username" {...field} />
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
              Continue (mock)
            </Button>
          </form>
        </Form>
        <div className="mt-4 flex flex-col gap-2 text-center text-sm">
          <Link className="text-primary font-medium" href="/two-factor">
            Simulate MFA step
          </Link>
          <Link className={buttonVariants({ variant: "ghost", size: "sm" })} href="/login/admin">
            Administration login
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
