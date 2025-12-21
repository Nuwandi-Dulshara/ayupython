"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Search, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { DoctorCard } from "@/components/doctor-card"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function PatientDashboard() {
  const [symptoms, setSymptoms] = useState("")
  const [showResults, setShowResults] = useState(false)
  const [predictedDisease, setPredictedDisease] = useState("")

  const handleAnalyze = () => {
    // Mock AI prediction
    setPredictedDisease("Vata Imbalance - Digestive Disorder")
    setShowResults(true)
  }

  const mockDoctors = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      village: "Bangalore",
      university: "National Institute of Ayurveda",
      specializations: ["Digestive Disorders", "Panchakarma", "Detoxification"],
      experience: 15,
      languages: ["English", "Hindi", "Kannada"],
      rating: 4.8,
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      village: "Mysore",
      university: "Gujarat Ayurved University",
      specializations: ["Digestive Issues", "Stress Management", "Nutrition"],
      experience: 10,
      languages: ["English", "Hindi", "Tamil"],
      rating: 4.7,
    },
  ]

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <DashboardSidebar userRole="patient" />

      <div className="flex-1 overflow-auto">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="mb-8 animate-fadeIn">
            <h2 className="text-3xl font-bold text-foreground mb-2">Patient Dashboard</h2>
            <p className="text-muted-foreground">Find the right Ayurvedic doctor for your needs</p>
          </div>

          {/* Symptom Analysis Card */}
          <Card className="p-6 mb-8 animate-fadeIn">
            <h3 className="text-xl font-semibold mb-4 text-card-foreground flex items-center gap-2">
              <Search className="w-5 h-5 text-primary" />
              AI Symptom Analysis
            </h3>
            <Textarea
              placeholder="Describe your symptoms in detail... (e.g., stomach pain after meals, bloating, fatigue)"
              className="min-h-32 mb-4"
              value={symptoms}
              onChange={(e) => setSymptoms(e.target.value)}
            />
            <Button onClick={handleAnalyze} className="bg-primary hover:bg-primary/90" disabled={!symptoms}>
              Analyze Symptoms
            </Button>
          </Card>

          {/* Results */}
          {showResults && (
            <div className="space-y-6">
              <Card className="p-6 bg-primary/5 border-primary/20 animate-fadeIn">
                <h3 className="text-xl font-semibold mb-2 text-card-foreground">Predicted Condition</h3>
                <p className="text-2xl font-bold text-primary mb-3">{predictedDisease}</p>
                <p className="text-muted-foreground leading-relaxed">
                  Based on your symptoms, you may be experiencing a Vata imbalance affecting your digestive system. We
                  recommend consulting with a specialist in digestive disorders and Panchakarma treatments.
                </p>
              </Card>

              <div className="animate-fadeIn" style={{ animationDelay: "0.2s" }}>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Recommended Doctors</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {mockDoctors.map((doctor, index) => (
                    <DoctorCard key={doctor.id} doctor={doctor} index={index} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
