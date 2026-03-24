"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, Stethoscope } from "lucide-react"
import { useState } from "react"

import { HOSPITAL } from "@/lib/constants"
import { buttonVariants } from "@/components/ui/button-variants"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/departments", label: "Departments" },
  { href: "/doctors", label: "Doctors" },
  { href: "/services", label: "Services" },
  { href: "/laboratory", label: "Laboratory" },
  { href: "/pharmacy", label: "Pharmacy" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-background/90 supports-backdrop-filter:bg-background/70 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-lg">
            <Stethoscope className="size-5" aria-hidden />
          </span>
          <span className="hidden sm:inline">{HOSPITAL.shortName}</span>
        </Link>
        <nav className="hidden flex-1 flex-wrap items-center gap-1 md:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === l.href
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <Link
            href="/login/staff"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "hidden lg:inline-flex")}
          >
            Staff login
          </Link>
          <Link
            href="/book-appointment"
            className={cn(buttonVariants({ size: "sm" }), "hidden sm:inline-flex")}
          >
            Book appointment
          </Link>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "outline", size: "icon-sm" }),
                "md:hidden"
              )}
              aria-label="Open menu"
            >
              <Menu className="size-4" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100%,20rem)]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="hover:bg-muted rounded-md px-3 py-2 text-sm font-medium"
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  href="/book-appointment"
                  onClick={() => setOpen(false)}
                  className="bg-primary text-primary-foreground mt-2 rounded-md px-3 py-2 text-center text-sm font-medium"
                >
                  Book appointment
                </Link>
                <Link
                  href="/login/patient"
                  onClick={() => setOpen(false)}
                  className="border-input mt-1 rounded-md border px-3 py-2 text-center text-sm"
                >
                  Patient login
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="border-t bg-primary/5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="text-muted-foreground flex items-center gap-2">
            <Phone className="text-primary size-3.5" aria-hidden />
            <span className="font-medium text-foreground">Emergency</span>
            <a className="text-primary font-semibold" href={`tel:${HOSPITAL.emergencyLine.replace(/\s/g, "")}`}>
              {HOSPITAL.emergencyLine}
            </a>
          </div>
          <p className="text-muted-foreground">
            Accredited acute care Â· Level I trauma Â· 24/7 laboratory & imaging
          </p>
        </div>
      </div>
    </header>
  )
}
