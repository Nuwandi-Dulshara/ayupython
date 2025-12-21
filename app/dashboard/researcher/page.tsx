"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Download, Search, Database, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { DashboardSidebar } from "@/components/dashboard-sidebar"

export default function ResearcherDashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      <DashboardSidebar userRole="researcher" />

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
            <h2 className="text-3xl font-bold text-foreground mb-2">Research Dashboard</h2>
            <p className="text-muted-foreground">Access anonymized datasets for Ayurvedic research</p>
          </div>

          {/* Search & Filter */}
          <Card className="p-6 mb-8 animate-fadeIn">
            <h3 className="text-xl font-semibold mb-4 text-card-foreground flex items-center gap-2">
              <Search className="w-5 h-5 text-accent" />
              Dataset Search
            </h3>
            <div className="flex gap-4">
              <Input placeholder="Search by disease, symptom, or category..." className="flex-1" />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">Search</Button>
            </div>
          </Card>

          {/* Available Datasets */}
          <div className="space-y-4">
            {[
              {
                title: "Digestive Disorders Dataset",
                records: 342,
                category: "Gastrointestinal",
                lastUpdated: "2024-12-15",
              },
              {
                title: "Joint & Musculoskeletal Conditions",
                records: 198,
                category: "Orthopedic",
                lastUpdated: "2024-12-10",
              },
              {
                title: "Skin Disorders Collection",
                records: 256,
                category: "Dermatology",
                lastUpdated: "2024-12-08",
              },
            ].map((dataset, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between">
                  <div className="flex gap-4 flex-1">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold mb-2 text-card-foreground">{dataset.title}</h4>
                      <div className="flex gap-6 text-sm text-muted-foreground">
                        <span>{dataset.records} records</span>
                        <span>Category: {dataset.category}</span>
                        <span>Updated: {dataset.lastUpdated}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" className="hover:bg-accent hover:text-accent-foreground bg-transparent">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
