export const HOSPITAL = {
  name: "Aurora Metropolitan Health",
  shortName: "Aurora Health",
  tagline: "Academic medicine. Community care.",
  emergencyLine: "+1 (800) 555-0199",
  mainLine: "+1 (555) 400-2200",
  email: "care@aurorametro.health",
  address: "1200 Clinical Drive, Metro City, MC 10001",
} as const

export const BRANCHES = [
  { id: "hq", name: "Main Campus", code: "AMH-MC" },
  { id: "north", name: "North Specialty Center", code: "AMH-NSC" },
  { id: "south", name: "South Women & Children", code: "AMH-SWC" },
] as const

export const DEPARTMENTS = [
  { id: "cardio", name: "Cardiology", head: "Dr. Elena Vasquez" },
  { id: "neuro", name: "Neurology", head: "Dr. Omar Haddad" },
  { id: "ortho", name: "Orthopedics", head: "Dr. Priya Nair" },
  { id: "ped", name: "Pediatrics", head: "Dr. James Okonkwo" },
  { id: "er", name: "Emergency Medicine", head: "Dr. Sarah Lin" },
  { id: "lab", name: "Laboratory Medicine", head: "Dr. Mei Chen" },
  { id: "rad", name: "Radiology", head: "Dr. Daniel Frost" },
  { id: "pharm", name: "Pharmacy", head: "RPh. Alicia Moore" },
] as const

export type RoleId =
  | "super_admin"
  | "hospital_admin"
  | "doctor"
  | "nurse"
  | "lab_tech"
  | "pharmacist"
  | "receptionist"
  | "accounts"
  | "patient"

export const ROLE_LABELS: Record<RoleId, string> = {
  super_admin: "Super Admin",
  hospital_admin: "Hospital Administrator",
  doctor: "Doctor",
  nurse: "Nurse",
  lab_tech: "Laboratory Technician",
  pharmacist: "Pharmacist",
  receptionist: "Receptionist",
  accounts: "Accounts Team",
  patient: "Patient",
}
