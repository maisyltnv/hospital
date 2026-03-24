"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Activity,
  Bell,
  ChevronDown,
  CirclePlus,
  Command,
  LogOut,
  Moon,
  Search,
  Sun,
} from "lucide-react"
import { useTheme } from "next-themes"

import type { RoleId } from "@/lib/constants"
import { BRANCHES, HOSPITAL, ROLE_LABELS } from "@/lib/constants"
import { buildNavForRole } from "@/lib/navigation/build-nav"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { mockNotifications } from "@/lib/data"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

type AppShellProps = {
  role: RoleId
  /** Shell home URL (dashboard), e.g. /admin or /super-admin */
  basePath: string
  /** Module routes prefix; super-admin uses /admin while home stays /super-admin */
  modulePath?: string
  userName: string
  userTitle?: string
  children: React.ReactNode
}

function breadcrumbsFromPath(pathname: string) {
  const segments = pathname.split("/").filter(Boolean)
  const acc: { label: string; href: string }[] = []
  let path = ""
  for (const seg of segments) {
    path += `/${seg}`
    acc.push({
      label: seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      href: path,
    })
  }
  return acc
}

export function AppShell({
  role,
  basePath,
  modulePath: modulePathProp,
  userName,
  userTitle,
  children,
}: AppShellProps) {
  const pathname = usePathname()
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const modulePath = modulePathProp ?? basePath
  const sections = buildNavForRole(role, {
    homePath: basePath,
    modulePrefix: modulePath,
  })
  const crumbs = breadcrumbsFromPath(pathname)

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" variant="inset">
        <SidebarHeader className="border-b border-sidebar-border">
          <div className="flex items-center gap-2 px-1 py-1">
            <div className="bg-primary text-primary-foreground flex size-9 items-center justify-center rounded-lg font-semibold">
              AM
            </div>
            <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
              <span className="truncate font-semibold">{HOSPITAL.shortName}</span>
              <span className="text-muted-foreground truncate text-xs">
                {ROLE_LABELS[role]}
              </span>
            </div>
          </div>
          <div className="px-2 pb-2 group-data-[collapsible=icon]:hidden">
            <Badge variant="outline" className="text-[10px] font-normal">
              RBAC preview — integration-ready
            </Badge>
          </div>
        </SidebarHeader>
        <SidebarContent>
          {sections.map((section) => (
            <SidebarGroup key={section.label}>
              <SidebarGroupLabel>{section.label}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {section.items.map((item) => {
                    const active =
                      pathname === item.href ||
                      (item.href !== basePath && pathname.startsWith(`${item.href}/`))
                    return (
                      <SidebarMenuItem key={item.href}>
                        <SidebarMenuButton
                          isActive={active}
                          tooltip={item.title}
                          render={<Link href={item.href} />}
                        >
                          <item.icon />
                          <span>{item.title}</span>
                          {item.sensitive ? (
                            <SidebarMenuBadge className="bg-amber-500/15 text-amber-800 dark:text-amber-200">
                              PHI
                            </SidebarMenuBadge>
                          ) : null}
                          {item.badge ? (
                            <SidebarMenuBadge>{item.badge}</SidebarMenuBadge>
                          ) : null}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        <SidebarFooter className="border-t border-sidebar-border">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                tooltip="Audit activity (mock)"
                render={<Link href={`${basePath}/activity`} />}
              >
                <Activity />
                <span>Activity</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <header className="bg-background/80 supports-backdrop-filter:bg-background/60 sticky top-0 z-20 flex h-14 shrink-0 items-center gap-2 border-b px-4 backdrop-blur">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-6" />
          <Breadcrumb className="hidden min-w-0 flex-1 md:flex">
            <BreadcrumbList>
              {crumbs.map((c, i) => (
                <span key={c.href} className="contents">
                  {i > 0 ? <BreadcrumbSeparator /> : null}
                  <BreadcrumbItem>
                    {i === crumbs.length - 1 ? (
                      <BreadcrumbPage className="max-w-[40vw] truncate">
                        {c.label}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink render={<Link href={c.href} />}>
                        {c.label}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                </span>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
          <div className="relative mx-2 hidden max-w-md flex-1 lg:block">
            <Search className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
            <Input
              className="bg-muted/40 h-9 pl-9"
              placeholder="Search patients, MRN, encounters…"
              aria-label="Global search"
            />
            <kbd className="text-muted-foreground pointer-events-none absolute top-1/2 right-2 hidden -translate-y-1/2 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
              <Command className="size-3" />K
            </kbd>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Select defaultValue="hq">
              <SelectTrigger size="sm" className="hidden w-[170px] xl:flex">
                <SelectValue placeholder="Branch" />
              </SelectTrigger>
              <SelectContent>
                {BRANCHES.map((b) => (
                  <SelectItem key={b.id} value={b.id}>
                    {b.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger size="sm" className="hidden w-[150px] lg:flex">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All departments</SelectItem>
                <SelectItem value="cardio">Cardiology</SelectItem>
                <SelectItem value="er">Emergency</SelectItem>
                <SelectItem value="lab">Laboratory</SelectItem>
              </SelectContent>
            </Select>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" size="icon-sm" aria-label="Notifications">
                  <Bell className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <ScrollArea className="h-64 pr-2">
                  {mockNotifications.map((n) => (
                    <div
                      key={n.id}
                      className="hover:bg-muted/50 mb-1 rounded-md border p-2 text-sm"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-medium">{n.title}</span>
                        <Badge variant="secondary" className="text-[10px]">
                          {n.channel}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground mt-1 text-xs">{n.body}</p>
                    </div>
                  ))}
                </ScrollArea>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button size="sm" className="gap-1">
                  <CirclePlus className="size-4" />
                  Quick create
                  <ChevronDown className="size-3 opacity-60" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-52">
                <DropdownMenuItem onClick={() => router.push(`${modulePath}/patients/new`)}>
                  New patient
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push(`${modulePath}/appointments/new`)}>
                  New appointment
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push(`${modulePath}/prescriptions/new`)}>
                  New prescription
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push(`${modulePath}/laboratory/new`)}>
                  Lab request
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              variant="outline"
              size="icon-sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
            >
              <Sun className="dark:hidden size-4" />
              <Moon className="hidden size-4 dark:block" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="ghost" size="sm" className="gap-2 px-1">
                  <Avatar className="size-8">
                    <AvatarFallback>
                      {userName
                        .split(" ")
                        .map((s) => s[0])
                        .join("")
                        .slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="hidden text-left text-sm leading-tight lg:grid">
                    <span className="truncate font-medium">{userName}</span>
                    <span className="text-muted-foreground truncate text-xs">
                      {userTitle ?? ROLE_LABELS[role]}
                    </span>
                  </span>
                  <ChevronDown className="text-muted-foreground hidden size-3 lg:inline" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/patient/profile")}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/session-expired")}>
                  Session tools
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => router.push("/login/patient")}>
                  <LogOut className="size-4" />
                  Sign out (mock)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  )
}
