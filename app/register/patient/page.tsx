"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Activity, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

/* ============================
   AI Registration Assistant Tips
============================ */
const aiTips: Record<string, string> = {
  welcome: "Hi 👋 I’ll help you complete this registration. Let’s start with your full name.",
  fullName: "👉 Enter your full name exactly as shown on your NIC or ID card.",
  email: "👉 Enter a valid email address. We use this to send appointment updates.",
  password: "👉 Choose a strong password to protect your health information.",
  phone: "👉 Enter a phone number the doctor can contact you on.",
  dateOfBirth: "👉 Select your date of birth. This helps us understand your health stage.",
  gender: "👉 Select your gender for accurate Ayurvedic analysis.",
  address: "👉 Enter your home address for medical records.",
  medicalHistory:
    "👉 Mention past illnesses, surgeries, diabetes, asthma, etc. If none, you can leave it empty.",
  allergies:
    "👉 List food, medicine, or skin allergies. Leave blank if you don’t have any.",
  currentMedications:
    "👉 Mention medicines you are currently taking. Leave blank if none.",
}

export default function PatientRegister() {
  const router = useRouter()
  const { toast } = useToast()

  /* ============================
     AI Assistant State
  ============================ */
  const [aiMessage, setAiMessage] = useState(aiTips.welcome)
  const [aiOpen, setAiOpen] = useState(true)

  /* ============================
     Form State
  ============================ */
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    medicalHistory: "",
    allergies: "",
    currentMedications: "",
  })

  /* ============================
     🔊 Voice (Text-to-Speech)
  ============================ */
  const speak = (text: string) => {
    speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = "en-US" // later: si-LK / ta-IN
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }

  /* ============================
     Submit
  ============================ */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    localStorage.setItem("userRole", "patient")
    localStorage.setItem("userData", JSON.stringify(formData))

    toast({
      title: "Registration Successful",
      description: "Account created successfully. Please login to continue.",
    })

    setTimeout(() => router.push("/login"), 1500)
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold">AyurCare</h1>
          </Link>
          <Link href="/register">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      {/* Form */}
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto p-8">
          <h2 className="text-3xl font-bold mb-6">Patient Registration</h2>

          <form onSubmit={handleSubmit} className="space-y-2">
          <div className="space-y-2">
            <Label>Full Name *</Label>
            <Input
              required
              onFocus={() => {
                setAiMessage(aiTips.fullName)
                speak(aiTips.fullName)
              }}
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            />
          </div>


            <div className="grid md:grid-cols-2 gap-4 space-y-2">
              <div className="space-y-2">
                <Label>Email *</Label>
                <Input
                  type="email"
                  required
                  onFocus={() => setAiMessage(aiTips.email)}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>Password *</Label>
                <Input
                  type="password"
                  required
                  onFocus={() => setAiMessage(aiTips.password)}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 space-y-2">
              <div className="space-y-2">
                <Label>Phone *</Label>
                <Input
                  type="tel"
                  required
                  onFocus={() => setAiMessage(aiTips.phone)}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label>Date of Birth *</Label>
                <Input
                  type="date"
                  required
                  onFocus={() => setAiMessage(aiTips.dateOfBirth)}
                  value={formData.dateOfBirth}
                  onChange={(e) =>
                    setFormData({ ...formData, dateOfBirth: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Gender *</Label>
              <select
                required
                onFocus={() => setAiMessage(aiTips.gender)}
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label>Address *</Label>
              <Textarea
                required
                onFocus={() => setAiMessage(aiTips.address)}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Medical History</Label>
              <Textarea
                onFocus={() => setAiMessage(aiTips.medicalHistory)}
                value={formData.medicalHistory}
                onChange={(e) =>
                  setFormData({ ...formData, medicalHistory: e.target.value })
                }
              />
            </div>

            <div className="space-y-2">
              <Label>Known Allergies</Label>
              <Input
                onFocus={() => setAiMessage(aiTips.allergies)}
                value={formData.allergies}
                onChange={(e) => setFormData({ ...formData, allergies: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Current Medications</Label>
              <Textarea
                onFocus={() => setAiMessage(aiTips.currentMedications)}
                value={formData.currentMedications}
                onChange={(e) =>
                  setFormData({ ...formData, currentMedications: e.target.value })
                }
              />
            </div>

            <Button type="submit" className="w-full" size="lg">
              Complete Registration
            </Button>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-primary font-medium hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </Card>
      </div>

      {/* 🤖 AI Assistant Panel */}
      {aiOpen && (
        <div className="fixed bottom-6 right-6 w-80 bg-card border rounded-xl shadow-xl p-4">
          <div className="flex justify-between mb-2">
            <h4 className="font-semibold text-primary">🤖 AI Assistant</h4>
            <button onClick={() => setAiOpen(false)}>✕</button>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed">
            {aiMessage}
          </p>

          <div className="mt-3 flex gap-2">
            <button
              className="flex-1 text-xs bg-primary text-white py-2 rounded"
              onClick={() =>
                setAiMessage(
                  "You can click any field in the form and I will explain what to enter 😊"
                )
              }
            >
              Ask AI
            </button>

            <button
              className="w-10 border rounded"
              onClick={() => speak(aiMessage)}
              title="Listen"
            >
              🔊
            </button>
          </div>

          <button
            className="mt-2 text-xs underline text-primary"
            onClick={() => setAiMessage(aiTips.welcome)}
          >
            Restart help
          </button>
        </div>
      )}
    </div>
  )
}

