"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Stethoscope, Database, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <DashboardSidebar userRole="admin" />

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
            <h2 className="text-3xl font-bold text-foreground mb-2">Admin Dashboard</h2>
            <p className="text-muted-foreground">Manage users, verify credentials, and oversee platform operations</p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 animate-fadeIn">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-1">Total Patients</p>
              <p className="text-3xl font-bold text-foreground">1,248</p>
            </Card>

            <Card className="p-6 animate-fadeIn" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center">
                  <Stethoscope className="w-6 h-6 text-success" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-1">Verified Doctors</p>
              <p className="text-3xl font-bold text-foreground">87</p>
            </Card>

            <Card className="p-6 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-accent" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-1">Dataset Records</p>
              <p className="text-3xl font-bold text-foreground">2,456</p>
            </Card>

            <Card className="p-6 animate-fadeIn" style={{ animationDelay: "0.3s" }}>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-secondary" />
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-1">Completed Cases</p>
              <p className="text-3xl font-bold text-foreground">892</p>
            </Card>
          </div>

          {/* Pending Verifications */}
          <Card className="p-6 mb-6 animate-fadeIn" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Pending Doctor Verifications</h3>
            <div className="space-y-3">
              {[
                { name: "Dr. Arun Singh", university: "Banaras Hindu University", license: "AYU-2024-0423" },
                { name: "Dr. Meera Iyer", university: "Kerala Ayurveda University", license: "AYU-2024-0424" },
              ].map((doctor, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                  <div>
                    <p className="font-semibold text-card-foreground">{doctor.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {doctor.university} • License: {doctor.license}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="bg-success hover:bg-success/90 text-success-foreground">
                      Approve
                    </Button>
                    <Button size="sm" variant="outline">
                      Review
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Recent Activity */}
          <Card className="p-6 animate-fadeIn" style={{ animationDelay: "0.5s" }}>
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">Recent Platform Activity</h3>
            <div className="space-y-3">
              {[
                "New patient registration: Priya Sharma",
                "Doctor verification completed: Dr. Rajesh Kumar",
                "New dataset entry added: Skin Disorder Case #2456",
                "Patient consultation completed: Case #892",
              ].map((activity, index) => (
                <div key={index} className="p-3 bg-muted/30 rounded-lg text-sm text-muted-foreground">
                  {activity}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
