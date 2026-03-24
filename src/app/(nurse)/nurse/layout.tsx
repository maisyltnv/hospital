import { AppShell } from "@/components/layout/app-shell"

export default function NurseLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell role="nurse" basePath="/nurse" userName="RN Clara Jensen" userTitle="Emergency">
      {children}
    </AppShell>
  )
}
