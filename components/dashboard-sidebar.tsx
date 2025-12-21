"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  Activity,
  Home,
  User,
  Bell,
  LogOut,
  Settings,
  Users,
  Database,
  FileText,
  Search,
  Stethoscope,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarLink {
  href: string
  label: string
  icon: React.ElementType
}

interface DashboardSidebarProps {
  userRole: "patient" | "doctor" | "admin" | "researcher"
}

const sidebarLinks: Record<string, SidebarLink[]> = {
  patient: [
    { href: "/dashboard/patient", label: "Dashboard", icon: Home },
    { href: "/dashboard/patient/symptoms", label: "Symptom Analysis", icon: Search },
    { href: "/dashboard/patient/appointments", label: "Appointments", icon: FileText },
    { href: "/dashboard/patient/profile", label: "Profile", icon: User },
  ],
  doctor: [
    { href: "/dashboard/doctor", label: "Dashboard", icon: Home },
    { href: "/dashboard/doctor/requests", label: "Patient Requests", icon: Users },
    { href: "/dashboard/doctor/cases", label: "My Cases", icon: Stethoscope },
    { href: "/dashboard/doctor/profile", label: "Profile", icon: User },
  ],
  admin: [
    { href: "/dashboard/admin", label: "Dashboard", icon: Home },
    { href: "/dashboard/admin/users", label: "User Management", icon: Users },
    { href: "/dashboard/admin/verification", label: "Verifications", icon: FileText },
    { href: "/dashboard/admin/dataset", label: "Dataset", icon: Database },
    { href: "/dashboard/admin/settings", label: "Settings", icon: Settings },
  ],
  researcher: [
    { href: "/dashboard/researcher", label: "Dashboard", icon: Home },
    { href: "/dashboard/researcher/datasets", label: "Datasets", icon: Database },
    { href: "/dashboard/researcher/search", label: "Search Data", icon: Search },
    { href: "/dashboard/researcher/profile", label: "Profile", icon: User },
  ],
}

const mockNotifications = [
  { id: 1, message: "New patient consultation request", time: "2 hours ago", type: "request" },
  { id: 2, message: "Doctor verification completed", time: "5 hours ago", type: "verified" },
  { id: 3, message: "New dataset record available", time: "1 day ago", type: "dataset" },
  { id: 4, message: "Appointment reminder: Tomorrow at 10 AM", time: "1 day ago", type: "appointment" },
]

export function DashboardSidebar({ userRole }: DashboardSidebarProps) {
  const pathname = usePathname()
  const links = sidebarLinks[userRole] || []
  const [showNotifications, setShowNotifications] = useState(false)

  const roleColors = {
    patient: "bg-primary",
    doctor: "bg-success",
    admin: "bg-secondary",
    researcher: "bg-accent",
  }

  const roleTextColors = {
    patient: "text-primary-foreground",
    doctor: "text-success-foreground",
    admin: "text-secondary-foreground",
    researcher: "text-accent-foreground",
  }

  return (
    <aside className="w-64 h-screen bg-card border-r border-border/50 flex flex-col sticky top-0">
      {/* Logo */}
      <div className="p-6 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", roleColors[userRole])}>
            <Activity className={cn("w-6 h-6", roleTextColors[userRole])} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">AyurCare</h1>
            <p className="text-xs text-muted-foreground capitalize">{userRole}</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon
          const isActive = pathname === link.href
          return (
            <Link key={link.href} href={link.href}>
              <Button
                variant={isActive ? "default" : "ghost"}
                className={cn(
                  "w-full justify-start gap-3",
                  isActive && "bg-primary/10 text-primary hover:bg-primary/20",
                )}
              >
                <Icon className="w-5 h-5" />
                {link.label}
              </Button>
            </Link>
          )
        })}
      </nav>

      {/* Footer Actions */}
      <div className="p-4 border-t border-border/50 space-y-2 relative">
        <div className="relative">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3 relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="w-5 h-5" />
            Notifications
            <span className="absolute right-3 top-2 w-2 h-2 bg-destructive rounded-full"></span>
          </Button>

          {showNotifications && (
            <div className="absolute left-0 right-0 bottom-full mb-2 bg-card border border-border rounded-lg shadow-lg z-50 w-80 max-h-96 overflow-y-auto">
              <div className="p-4 border-b border-border flex items-center justify-between">
                <h3 className="font-semibold text-card-foreground">Notifications</h3>
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="space-y-2 p-2">
                {mockNotifications.map((notification) => (
                  <div
                    key={notification.id}
                    className="p-3 hover:bg-muted/50 rounded-lg cursor-pointer transition-colors border border-border/30"
                  >
                    <p className="text-sm font-medium text-card-foreground">{notification.message}</p>
                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                  </div>
                ))}
              </div>
              {mockNotifications.length === 0 && (
                <div className="p-4 text-center text-muted-foreground text-sm">No notifications</div>
              )}
            </div>
          )}
        </div>

        <Link href="/">
          <Button variant="ghost" className="w-full justify-start gap-3 hover:bg-destructive/10 hover:text-destructive">
            <LogOut className="w-5 h-5" />
            Logout
          </Button>
        </Link>
      </div>
    </aside>
  )
}
