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

export default function DoctorRegister() {
  const router = useRouter()
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    licenseNumber: "",
    university: "",
    yearOfGraduation: "",
    specializations: "",
    experienceYears: "",
    clinicAddress: "",
    village: "",
    district: "",
    treatmentApproach: "",
    languagesSpoken: "",
    certifications: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem("userRole", "doctor")
    localStorage.setItem("userData", JSON.stringify(formData))
    toast({
      title: "Registration Successful",
      description: "Your profile is pending verification. Redirecting to dashboard...",
    })
    setTimeout(() => router.push("/dashboard/doctor"), 1500)
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
          <Link href="/register">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-2xl mx-auto p-8 animate-fadeIn">
          <h2 className="text-3xl font-bold mb-6 text-card-foreground">Ayurvedic Doctor Registration</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password *</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="licenseNumber">License Number *</Label>
                <Input
                  id="licenseNumber"
                  required
                  value={formData.licenseNumber}
                  onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="university">University/College *</Label>
                <Input
                  id="university"
                  required
                  value={formData.university}
                  onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="yearOfGraduation">Year of Graduation *</Label>
                <Input
                  id="yearOfGraduation"
                  type="number"
                  required
                  value={formData.yearOfGraduation}
                  onChange={(e) => setFormData({ ...formData, yearOfGraduation: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specializations">Areas of Specialization *</Label>
              <Textarea
                id="specializations"
                placeholder="e.g., Panchakarma, Skin disorders, Digestive issues, Joint pain"
                required
                value={formData.specializations}
                onChange={(e) => setFormData({ ...formData, specializations: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experienceYears">Years of Experience *</Label>
              <Input
                id="experienceYears"
                type="number"
                required
                value={formData.experienceYears}
                onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="clinicAddress">Clinic Address *</Label>
              <Textarea
                id="clinicAddress"
                required
                value={formData.clinicAddress}
                onChange={(e) => setFormData({ ...formData, clinicAddress: e.target.value })}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="village">Village/City *</Label>
                <Input
                  id="village"
                  required
                  value={formData.village}
                  onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="district">District *</Label>
                <Input
                  id="district"
                  required
                  value={formData.district}
                  onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="treatmentApproach">Treatment Approach</Label>
              <Textarea
                id="treatmentApproach"
                placeholder="Describe your treatment philosophy and methods"
                value={formData.treatmentApproach}
                onChange={(e) => setFormData({ ...formData, treatmentApproach: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="languagesSpoken">Languages Spoken *</Label>
              <Input
                id="languagesSpoken"
                placeholder="e.g., English, Hindi, Tamil"
                required
                value={formData.languagesSpoken}
                onChange={(e) => setFormData({ ...formData, languagesSpoken: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="certifications">Additional Certifications</Label>
              <Textarea
                id="certifications"
                placeholder="List any additional certifications or training"
                value={formData.certifications}
                onChange={(e) => setFormData({ ...formData, certifications: e.target.value })}
              />
            </div>

            <Button type="submit" className="w-full bg-success hover:bg-success/90 text-success-foreground" size="lg">
              Complete Registration
            </Button>
          </form>
        </Card>
      </div>
    </div>
  )
}
