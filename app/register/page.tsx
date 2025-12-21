"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Activity, Stethoscope, Users, GraduationCap, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

type UserRole = "patient" | "doctor" | "researcher" | "admin" | null

export default function RegisterPage() {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null)
  const router = useRouter()

  const roles = [
    {
      id: "patient" as const,
      icon: Users,
      title: "Patient",
      description: "Seek Ayurvedic consultation",
      color: "text-primary",
    },
    {
      id: "doctor" as const,
      icon: Stethoscope,
      title: "Ayurvedic Doctor",
      description: "Provide medical expertise",
      color: "text-success",
    },
    {
      id: "researcher" as const,
      icon: GraduationCap,
      title: "Researcher/Student",
      description: "Access research data",
      color: "text-accent",
    },
    {
      id: "admin" as const,
      icon: ShieldCheck,
      title: "Administrator",
      description: "Manage platform",
      color: "text-secondary",
    },
  ]

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role)
    setTimeout(() => {
      router.push(`/register/${role}`)
    }, 300)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">AyurCare</h1>
          </Link>
          <Link href="/login">
            <Button variant="outline">Login</Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Create Your Account</h2>
          <p className="text-lg text-muted-foreground">Select your role to get started</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {roles.map((role, index) => {
            const Icon = role.icon
            return (
              <Card
                key={role.id}
                className={`p-8 cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeIn ${
                  selectedRole === role.id ? "ring-2 ring-primary shadow-xl scale-105" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleRoleSelect(role.id)}
              >
                <div className={`w-16 h-16 rounded-xl bg-muted flex items-center justify-center mb-4 ${role.color}`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-2 text-card-foreground">{role.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{role.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
