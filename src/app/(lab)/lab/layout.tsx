import { AppShell } from "@/components/layout/app-shell"

export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell role="lab_tech" basePath="/lab" userName="MLT Jordan Blake" userTitle="Laboratory">
      {children}
    </AppShell>
  )
}
