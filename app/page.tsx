"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Activity, Users, Stethoscope, UserCircle, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-accent/10">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <Activity className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">AyurCare</h1>
          </div>
          <Link href="/login">
            <Button
              variant="outline"
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
            >
              Login
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center animate-fadeIn">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-balance text-foreground">
            Connecting Patients with
            <span className="text-primary"> Ayurvedic Wisdom</span>
          </h2>
          <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
            AI-powered symptom analysis meets traditional Ayurvedic healthcare. Find the right practitioner for your
            healing journey.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Link href="/register">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse-slow"
              >
                Get Started
              </Button>
            </Link>
            <Link href="#features">
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-accent hover:text-accent-foreground transition-all duration-300 bg-transparent"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Who We Serve</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fadeIn">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-card-foreground">Patients</h4>
            <p className="text-muted-foreground leading-relaxed">
              Get AI-powered symptom analysis and connect with qualified Ayurvedic doctors who specialize in your
              condition.
            </p>
          </Card>

          <Card
            className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fadeIn"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center mb-4">
              <Stethoscope className="w-6 h-6 text-success" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-card-foreground">Ayurvedic Doctors</h4>
            <p className="text-muted-foreground leading-relaxed">
              Receive patient referrals, review cases, and build your practice with our intelligent matching system.
            </p>
          </Card>

          <Card
            className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fadeIn"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-accent" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-card-foreground">Researchers & Students</h4>
            <p className="text-muted-foreground leading-relaxed">
              Access anonymized datasets and contribute to Ayurvedic medical research and education.
            </p>
          </Card>

          <Card
            className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card border-border animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <UserCircle className="w-6 h-6 text-secondary" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-card-foreground">Administrators</h4>
            <p className="text-muted-foreground leading-relaxed">
              Manage the platform, oversee user verification, and maintain quality standards across the network.
            </p>
          </Card>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 py-20 bg-muted/30 rounded-3xl my-12">
        <h3 className="text-3xl font-bold text-center mb-12 text-foreground">How It Works</h3>
        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              step: "1",
              title: "Register Your Account",
              description: "Choose your role and complete your profile with relevant credentials.",
            },
            {
              step: "2",
              title: "AI Symptom Analysis",
              description: "Patients describe symptoms, and our AI suggests possible conditions and matching doctors.",
            },
            {
              step: "3",
              title: "Connect with Doctors",
              description: "Review doctor profiles and select the best match for your needs.",
            },
            {
              step: "4",
              title: "Confirm & Treat",
              description: "Doctors review cases, confirm diagnoses, and provide treatment plans.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex gap-6 items-start animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>&copy; 2025 AyurCare. Bridging traditional wisdom with modern technology.</p>
        </div>
      </footer>
    </div>
  )
}
