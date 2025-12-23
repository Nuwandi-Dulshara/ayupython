"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Activity,
  Stethoscope,
  Users,
  GraduationCap,
  ShieldCheck,
} from "lucide-react"
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
      color: "text-teal-400",
    },
    {
      id: "doctor" as const,
      icon: Stethoscope,
      title: "Ayurvedic Doctor",
      description: "Provide medical expertise",
      color: "text-teal-400",
    },
    {
      id: "researcher" as const,
      icon: GraduationCap,
      title: "Researcher / Student",
      description: "Access research data",
      color: "text-teal-400",
    },
    {
      id: "admin" as const,
      icon: ShieldCheck,
      title: "Administrator",
      description: "Manage platform",
      color: "text-teal-400",
    },
  ]

  const handleRoleSelect = (role: UserRole) => {
    setSelectedRole(role)
    setTimeout(() => {
      router.push(`/register/${role}`)
    }, 250)
  }

  return (
    <div
      className="
        min-h-screen
        bg-gradient-to-br
        from-[#123524]
        via-[#145214]
        to-[#0f2a44]
        text-[#e6f2ec]
      "
    >
      {/* ================= HEADER ================= */}
      <header className="border-b border-white/10 bg-black/30 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#6DBE45] to-[#3B82F6] flex items-center justify-center shadow-lg">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold">AyurCare</h1>
          </Link>

          <Link href="/login">
            <Button
              variant="outline"
              className="
                border-white/40
                text-[#000000]
                hover:bg-black/80
                hover:text-white
              "
            >
              Login
            </Button>
          </Link>
        </div>
      </header>

      {/* ================= MAIN ================= */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* -------- LEFT CONTENT -------- */}
          <div>
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Begin Your
                <span className="text-[#6DBE45]"> Healing Journey</span>
              </h2>

              <p className="text-lg text-[#e6f2ec]/80 max-w-xl">
                Choose your role and join a platform where
                <span className="text-[#6DBE45] font-semibold">
                  {" "}ancient Ayurvedic wisdom{" "}
                </span>
                meets
                <span className="text-sky-400 font-semibold">
                  {" "}modern AI intelligence
                </span>.
              </p>
            </div>

            {/* -------- ROLE CARDS -------- */}
            <div className="grid sm:grid-cols-2 gap-6">
              {roles.map((role) => {
                const Icon = role.icon

                return (
                  <Card
                    key={role.id}
                    onClick={() => handleRoleSelect(role.id)}
                    className={`
                      cursor-pointer p-6
                      bg-white/10
                      backdrop-blur-lg
                      border border-white/15
                      hover:border-[#6DBE45]
                      hover:shadow-2xl
                      transition-all duration-300
                      ${
                        selectedRole === role.id
                          ? "ring-2 ring-[#6DBE45] scale-[1.03]"
                          : ""
                      }
                    `}
                  >
                    <div
                      className={`
                        w-14 h-14 rounded-xl
                        bg-black/30
                        flex items-center justify-center
                        mb-4
                        ${role.color}
                      `}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <h3 className="text-xl font-semibold mb-1 text-white">
                      {role.title}
                    </h3>
                    <p className="text-sm text-[#e6f2ec]/70">
                      {role.description}
                    </p>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* -------- RIGHT VISUAL -------- */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div
              className="
                absolute
                w-[520px] h-[520px]
                bg-gradient-to-br
                from-[#6DBE45]/30
                to-[#3B82F6]/20
                rounded-full
                blur-3xl
              "
            />

            <img
              src="/images/hero-ayur-ai.png"
              alt="Ayurvedic healthcare powered by AI"
              className="
                relative z-10
                h-[560px]
                w-auto
                object-contain
                drop-shadow-2xl
              "
            />
          </div>

        </div>
      </section>
    </div>
  )
}
