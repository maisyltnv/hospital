import { AppShell } from "@/components/layout/app-shell"

export default function SuperAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell
      role="super_admin"
      basePath="/super-admin"
      modulePath="/admin"
      userName="Riley Chen"
      userTitle="Super Administrator"
    >
      {children}
    </AppShell>
  )
}
