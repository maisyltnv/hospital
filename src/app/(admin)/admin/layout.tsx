import { AppShell } from "@/components/layout/app-shell"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      role="hospital_admin"
      basePath="/admin"
      userName="Jordan Patel"
      userTitle="Hospital Administrator"
    >
      {children}
    </AppShell>
  )
}
