import type { RoleId } from "@/lib/constants"
import type { NavItem, NavSection } from "./types"
import {
  Activity,
  BarChart3,
  BedDouble,
  Bell,
  Building2,
  CalendarRange,
  ClipboardList,
  CreditCard,
  FileBadge,
  FileText,
  FlaskConical,
  HeartPulse,
  Home,
  Hospital,
  Layers,
  KeyRound,
  Link2,
  Mail,
  MessageSquare,
  Package,
  Pill,
  Shield,
  Stethoscope,
  Syringe,
  UserCog,
  UserPlus,
  Users,
  Wallet,
} from "lucide-react"

export function buildNavForRole(
  role: RoleId,
  { homePath, modulePrefix }: { homePath: string; modulePrefix: string }
): NavSection[] {
  const m = (path: string) => `${modulePrefix}${path}`

  const adminClinical: NavSection = {
    label: "Clinical operations",
    items: [
      { title: "Patients", href: m("/patients"), icon: Users, sensitive: true },
      { title: "Appointments", href: m("/appointments"), icon: CalendarRange },
      { title: "Prescriptions", href: m("/prescriptions"), icon: Pill, sensitive: true },
      { title: "Inpatient (IPD)", href: m("/ipd"), icon: BedDouble, sensitive: true },
      { title: "Laboratory", href: m("/laboratory"), icon: FlaskConical },
    ],
  }

  const adminSupply: NavSection = {
    label: "Pharmacy & supply",
    items: [
      { title: "Medicines & products", href: m("/medicines"), icon: Syringe },
      { title: "Stock & inventory", href: m("/stock"), icon: Package },
      { title: "Doctor allocation", href: m("/allocation"), icon: Layers },
    ],
  }

  const adminWorkforce: NavSection = {
    label: "Workforce",
    items: [
      { title: "Staff directory", href: m("/staff"), icon: UserCog },
      { title: "Doctors", href: m("/doctors"), icon: Stethoscope },
      { title: "Nurses", href: m("/nurses"), icon: HeartPulse },
      { title: "Technicians", href: m("/technicians"), icon: Activity },
      { title: "Pharmacists", href: m("/pharmacists"), icon: Pill },
    ],
  }

  const adminFinance: NavSection = {
    label: "Finance",
    items: [
      { title: "Invoices", href: m("/invoices"), icon: FileText },
      { title: "Payments", href: m("/payments"), icon: CreditCard },
      { title: "Insurance claims", href: m("/insurance"), icon: FileBadge },
    ],
  }

  const adminInsights: NavSection = {
    label: "Insights",
    items: [
      { title: "Reporting", href: m("/reports"), icon: BarChart3 },
      { title: "Notifications hub", href: m("/notifications"), icon: Bell },
    ],
  }

  const adminSystem: NavSection = {
    label: "System & compliance",
    items: [
      { title: "Integrations", href: m("/integrations"), icon: Link2, badge: "FHIR-ready" },
      { title: "Security & audit", href: m("/security"), icon: Shield, sensitive: true },
      { title: "Branches", href: m("/branches"), icon: Building2 },
      ...(role === "super_admin"
        ? [
            {
              title: "API keys & webhooks",
              href: `${homePath}/api-keys`,
              icon: KeyRound,
              badge: "Admin",
            } satisfies NavItem,
          ]
        : []),
    ],
  }

  if (role === "super_admin" || role === "hospital_admin") {
    return [
      {
        label: "Overview",
        items: [{ title: "Dashboard", href: homePath || "/", icon: Home }],
      },
      adminClinical,
      adminSupply,
      adminWorkforce,
      adminFinance,
      adminInsights,
      adminSystem,
    ]
  }

  if (role === "doctor") {
    return [
      {
        label: "Practice",
        items: [
          { title: "Dashboard", href: homePath || "/", icon: Home },
          { title: "Today’s schedule", href: m("/schedule"), icon: CalendarRange },
          { title: "My patients", href: m("/patients"), icon: Users, sensitive: true },
          { title: "Prescriptions", href: m("/prescriptions"), icon: Pill },
          { title: "Lab review", href: m("/laboratory"), icon: FlaskConical },
          { title: "Notes & tasks", href: m("/notes"), icon: ClipboardList },
        ],
      },
    ]
  }

  if (role === "nurse") {
    return [
      {
        label: "Ward",
        items: [
          { title: "Dashboard", href: homePath || "/", icon: Home },
          { title: "Ward board", href: m("/ward"), icon: Hospital },
          { title: "Medications", href: m("/medications"), icon: Pill },
          { title: "Handover", href: m("/handover"), icon: MessageSquare },
        ],
      },
    ]
  }

  if (role === "lab_tech") {
    return [
      {
        label: "Laboratory",
        items: [
          { title: "Dashboard", href: homePath || "/", icon: Home },
          { title: "Requests", href: m("/requests"), icon: ClipboardList },
          { title: "Samples", href: m("/samples"), icon: FlaskConical },
          { title: "Results entry", href: m("/results"), icon: FileText },
        ],
      },
    ]
  }

  if (role === "pharmacist") {
    return [
      {
        label: "Pharmacy",
        items: [
          { title: "Dashboard", href: homePath || "/", icon: Home },
          { title: "Dispensing queue", href: m("/dispensing"), icon: Pill },
          { title: "Inventory", href: m("/inventory"), icon: Package },
          { title: "Batches & expiry", href: m("/batches"), icon: Activity },
        ],
      },
    ]
  }

  if (role === "receptionist") {
    return [
      {
        label: "Front office",
        items: [
          { title: "Dashboard", href: homePath || "/", icon: Home },
          { title: "Registration", href: m("/registration"), icon: UserPlus },
          { title: "Appointments", href: m("/appointments"), icon: CalendarRange },
          { title: "Check-in", href: m("/check-in"), icon: ClipboardList },
        ],
      },
    ]
  }

  if (role === "accounts") {
    return [
      {
        label: "Revenue cycle",
        items: [
          { title: "Dashboard", href: homePath || "/", icon: Home },
          { title: "Invoices", href: m("/invoices"), icon: FileText },
          { title: "Payments", href: m("/payments"), icon: Wallet },
          { title: "Claims", href: m("/claims"), icon: FileBadge },
        ],
      },
    ]
  }

  if (role === "patient") {
    return [
      {
        label: "My care",
        items: [
          { title: "Dashboard", href: homePath || "/", icon: Home },
          { title: "Appointments", href: m("/appointments"), icon: CalendarRange },
          { title: "Prescriptions", href: m("/prescriptions"), icon: Pill },
          { title: "Lab reports", href: m("/labs"), icon: FlaskConical },
          { title: "Billing", href: m("/billing"), icon: CreditCard },
          { title: "Messages", href: m("/messages"), icon: Mail },
        ],
      },
    ]
  }

  return [
    {
      label: "Overview",
      items: [{ title: "Dashboard", href: homePath || "/", icon: Home }],
    },
  ]
}
