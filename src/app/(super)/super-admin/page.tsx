import { HospitalAdminDashboard } from "@/components/dashboard/hospital-admin-dashboard"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SuperAdminHomePage() {
  return (
    <div className="space-y-4">
      <Alert>
        <AlertTitle>Super administrator context</AlertTitle>
        <AlertDescription>
          Same operational KPIs as hospital admin, plus API keys & webhook tools in the sidebar. Tenant isolation
          UI can branch from this layout.
        </AlertDescription>
      </Alert>
      <HospitalAdminDashboard />
    </div>
  )
}
