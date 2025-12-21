"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { PatientRequestCard } from "@/components/patient-request-card"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function DoctorDashboard() {
  const mockRequests = [
    {
      id: 1,
      patientName: "Amit Patel",
      age: 45,
      gender: "Male",
      symptoms: "Chronic stomach pain, bloating after meals, occasional nausea, fatigue",
      predictedDisease: "Vata Imbalance - Digestive Disorder",
      date: "2024-12-20",
      status: "pending",
    },
    {
      id: 2,
      patientName: "Sneha Reddy",
      age: 32,
      gender: "Female",
      symptoms: "Joint pain in knees, morning stiffness, swelling",
      predictedDisease: "Sandhivata (Osteoarthritis)",
      date: "2024-12-19",
      status: "pending",
    },
  ]

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <DashboardSidebar userRole="doctor" />

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
            <h2 className="text-3xl font-bold text-foreground mb-2">Doctor Dashboard</h2>
            <p className="text-muted-foreground">Review and manage patient consultation requests</p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="p-6 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Pending Requests</p>
                  <p className="text-3xl font-bold text-foreground">2</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <ArrowLeft className="w-6 h-6 text-primary" />
                </div>
              </div>
            </Card>

            <Card className="p-6 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Accepted Cases</p>
                  <p className="text-3xl font-bold text-foreground">15</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-success" />
                </div>
              </div>
            </Card>

            <Card className="p-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-muted-foreground text-sm mb-1">Completed</p>
                  <p className="text-3xl font-bold text-foreground">48</p>
                </div>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <ArrowLeft className="w-6 h-6 text-accent" />
                </div>
              </div>
            </Card>
          </div>

          {/* Patient Requests */}
          <div className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold mb-4 text-foreground">New Patient Requests</h3>
            <div className="space-y-4">
              {mockRequests.map((request, index) => (
                <PatientRequestCard key={request.id} request={request} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
