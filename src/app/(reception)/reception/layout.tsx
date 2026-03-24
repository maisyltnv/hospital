import { AppShell } from "@/components/layout/app-shell"

export default function ReceptionLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell role="receptionist" basePath="/reception" userName="Maya Thompson" userTitle="Front desk">
      {children}
    </AppShell>
  )
}
