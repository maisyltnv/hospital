import { AppShell } from "@/components/layout/app-shell"

export default function DoctorLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell role="doctor" basePath="/doctor" userName="Dr. Elena Vasquez" userTitle="Cardiology">
      {children}
    </AppShell>
  )
}
