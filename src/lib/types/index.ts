export type PatientStatus = "active" | "inactive" | "deceased"

export type Patient = {
  id: string
  mrn: string
  firstName: string
  lastName: string
  gender: string
  dob: string
  bloodGroup: string
  nationality: string
  phone: string
  email: string
  address: string
  maritalStatus: string
  occupation: string
  emergencyContact: string
  emergencyPhone: string
  allergies: string[]
  medicalHistory: string
  insuranceProvider: string
  policyNumber: string
  status: PatientStatus
  branchId: string
}

export type StaffRole =
  | "doctor"
  | "nurse"
  | "lab_tech"
  | "pharmacist"
  | "receptionist"
  | "admin"
  | "accounts"

export type Staff = {
  id: string
  fullName: string
  role: StaffRole
  departmentId: string
  specialty?: string
  qualifications: string
  yearsExperience: number
  phone: string
  email: string
  employmentStatus: "active" | "on_leave" | "terminated"
  accessRole: string
  consultationFee?: number
  branchId: string
}

export type AppointmentStatus =
  | "Scheduled"
  | "Checked In"
  | "In Consultation"
  | "Completed"
  | "Cancelled"
  | "No Show"
  | "Rescheduled"

export type Appointment = {
  id: string
  patientId: string
  doctorId: string
  departmentId: string
  visitType: string
  date: string
  time: string
  priority: "routine" | "urgent" | "emergency"
  notes?: string
  status: AppointmentStatus
  paymentStatus: "pending" | "partial" | "paid"
  branchId: string
}

export type Prescription = {
  id: string
  patientId: string
  doctorId: string
  appointmentId?: string
  issuedAt: string
  status: "draft" | "active" | "dispensed" | "cancelled"
  lines: {
    medicine: string
    generic: string
    strength: string
    dose: string
    frequency: string
    duration: string
    route: string
    qty: number
    stockOk: boolean
  }[]
}

export type LabStatus =
  | "Requested"
  | "Sample Collected"
  | "In Progress"
  | "Verified"
  | "Reported"
  | "Cancelled"

export type LabRequest = {
  id: string
  patientId: string
  doctorId: string
  testType: string
  sampleType: string
  priority: "routine" | "stat"
  technicianId?: string
  status: LabStatus
  requestedAt: string
  invoiceStatus: "pending" | "billed" | "paid"
  branchId: string
}

export type AdmissionStatus = "admitted" | "discharged" | "transferred"

export type Admission = {
  id: string
  patientId: string
  attendingDoctorId: string
  departmentId: string
  ward: string
  room: string
  bed: string
  admittedAt: string
  diagnosis: string
  diet: string
  status: AdmissionStatus
  branchId: string
}

export type InvoiceStatus =
  | "Draft"
  | "Issued"
  | "Partially Paid"
  | "Paid"
  | "Overdue"
  | "Cancelled"

export type Invoice = {
  id: string
  patientId: string
  sourceType: "Consultation" | "Prescription" | "Lab" | "IPD"
  relatedId: string
  amount: number
  tax: number
  discount: number
  insuranceCoverage: number
  paymentMethod?: string
  status: InvoiceStatus
  dueDate: string
  branchId: string
}

export type Medicine = {
  sku: string
  name: string
  generic: string
  category: string
  batch: string
  expiry: string
  unit: string
  reorderLevel: number
  purchasePrice: number
  sellingPrice: number
  stock: number
  location: string
  supplier: string
  status: "active" | "recalled" | "discontinued"
  branchId: string
}

export type NotificationItem = {
  id: string
  title: string
  body: string
  channel: "in_app" | "sms" | "email" | "whatsapp"
  createdAt: string
  read: boolean
}
