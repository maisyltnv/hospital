import { AppShell } from "@/components/layout/app-shell"

export default function RxLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppShell role="pharmacist" basePath="/rx" userName="RPh. Alicia Moore" userTitle="Pharmacy">
      {children}
    </AppShell>
  )
}
