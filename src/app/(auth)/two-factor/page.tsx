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
  code: z.string().length(6, "Enter the 6-digit code"),
})

type FormValues = z.infer<typeof schema>

export default function TwoFactorPage() {
  const router = useRouter()
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { code: "" },
  })

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Two-factor authentication</CardTitle>
        <CardDescription>
          TOTP, SMS OTP, or push approval UIs can share this layout. Hook verification to your auth service.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => router.push("/admin"))} className="space-y-4">
            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Authentication code</FormLabel>
                  <FormControl>
                    <Input inputMode="numeric" autoComplete="one-time-code" placeholder="â€¢â€¢â€¢â€¢â€¢â€¢" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Verify & continue (mock)
            </Button>
          </form>
        </Form>
        <Link className={buttonVariants({ variant: "outline", className: "mt-4 w-full" })} href="/session-expired">
          View session expired state
        </Link>
      </CardContent>
    </Card>
  )
}
