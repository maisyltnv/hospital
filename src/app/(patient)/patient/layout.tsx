import { AppShell } from "@/components/layout/app-shell"

export default function PatientPortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell role="patient" basePath="/patient" userName="Margaret Collins" userTitle="Patient portal">
      {children}
    </AppShell>
  )
}
