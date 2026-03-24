export * from "./patients"
export * from "./staff"
export * from "./appointments"
export * from "./clinical"
export * from "./operations"

import { mockPatients } from "./patients"
import { mockAppointments } from "./appointments"
import { mockAdmissions, mockLabRequests } from "./clinical"
import { mockInvoices, mockMedicines } from "./operations"

export function adminKpis() {
  const today = "2026-03-24"
  return {
    totalPatients: mockPatients.length,
    todayAppointments: mockAppointments.filter((a) => a.date === today).length,
    admitted: mockAdmissions.filter((a) => a.status === "admitted").length,
    pendingLabs: mockLabRequests.filter(
      (l) => l.status !== "Verified" && l.status !== "Reported" && l.status !== "Cancelled"
    ).length,
    lowStock: mockMedicines.filter((m) => m.stock < m.reorderLevel).length,
    revenueMtd: 428500,
    unpaidInvoices: mockInvoices.filter(
      (i) => i.status === "Issued" || i.status === "Overdue" || i.status === "Partially Paid"
    ).length,
  }
}
