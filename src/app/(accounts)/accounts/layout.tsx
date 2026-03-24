import { AppShell } from "@/components/layout/app-shell"

export default function AccountsLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell role="accounts" basePath="/accounts" userName="Kevin Ortiz" userTitle="Revenue cycle">
      {children}
    </AppShell>
  )
}
