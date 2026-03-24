import Link from "next/link"

import { HOSPITAL } from "@/lib/constants"

const cols = [
  {
    title: "Care & services",
    links: [
      { href: "/departments", label: "Departments" },
      { href: "/doctors", label: "Find a doctor" },
      { href: "/services", label: "Clinical services" },
      { href: "/laboratory", label: "Laboratory" },
      { href: "/pharmacy", label: "Pharmacy" },
    ],
  },
  {
    title: "Patients & visitors",
    links: [
      { href: "/book-appointment", label: "Book appointment" },
      { href: "/login/patient", label: "Patient portal" },
      { href: "/contact", label: "Contact & locations" },
      { href: "/about", label: "About us" },
    ],
  },
  {
    title: "Professionals",
    links: [
      { href: "/login/staff", label: "Staff login" },
      { href: "/login/admin", label: "Administration" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <p className="text-lg font-semibold">{HOSPITAL.name}</p>
          <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
            {HOSPITAL.tagline}. Multi-campus acute care with integrated EMR-ready workflows,
            diagnostics, and revenue cycle tooling.
          </p>
          <p className="mt-4 text-sm">
            <span className="text-muted-foreground">Main line</span>
            <br />
            <a className="text-primary font-medium" href={`tel:${HOSPITAL.mainLine.replace(/\s/g, "")}`}>
              {HOSPITAL.mainLine}
            </a>
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="text-sm font-semibold tracking-wide uppercase">{c.title}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {c.links.map((l) => (
                <li key={l.href}>
                  <Link className="text-muted-foreground hover:text-foreground" href={l.href}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t">
        <div className="text-muted-foreground mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {HOSPITAL.name}. All rights reserved.</p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            <span>HIPAA-oriented UX patterns</span>
            <span>·</span>
            <span>Audit-ready navigation</span>
            <span>·</span>
            <span>Integration placeholders (HL7/FHIR)</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
