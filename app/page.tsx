"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Activity, Users, Stethoscope, UserCircle, GraduationCap } from "lucide-react"
import Link from "next/link";
import { ArrowRight } from "lucide-react"
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";



export default function LandingPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(135deg,#002147 0%, #3fb1ff 35%, #6DBE45 70%, #145214 100%)",
        color: "white",
      }}
    >
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
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-white text-black"
            >
              Login
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-[90vh] flex items-center"
        style={{
          backgroundImage: "url('/images/hero-cover.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay with blur */}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />


        {/* Content */}
        <div className="relative container mx-auto px-4">
          <div className="max-w-2xl space-y-6 text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white">
              Ancient Wisdom
              <span className="text-[#6DBE45]"> Modern Care</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Experience personalized Ayurvedic treatment with AI-powered symptom analysis.
              Connect with certified practitioners and embrace holistic healing tailored
              to your unique constitution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/register">
              <Button variant="hero" size="xl" className="group animate-fadeInUp">
                Start Your Healing Journey
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>


              </Link>

              <Link href="#features">
                <Button variant="outline" size="xl" className="border-white text-black hover:bg-black hover:text-white">
                  Learn More
                </Button>
              </Link>
            </div>
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
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
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

    </div>
  )
}
