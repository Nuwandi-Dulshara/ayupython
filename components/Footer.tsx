"use client"

import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-nature flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-semibold">
                Ayur<span className="text-primary-glow">Care</span>
              </span>
            </a>

            <p className="text-secondary-foreground/80 text-sm leading-relaxed">
              Bridging ancient wisdom with modern technology. Experience personalized Ayurvedic healthcare through AI-powered diagnosis and expert consultations.
            </p>

            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["About Us", "How It Works", "Find Doctors", "Research Hub", "Contact"].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-secondary-foreground/70 hover:text-primary-glow transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">For Users</h4>
            <ul className="space-y-3">
              {["Patient Registration", "Doctor Registration", "Researcher Access", "Student Portal", "Admin Login"].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-secondary-foreground/70 hover:text-primary-glow transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <Mail className="w-4 h-4 text-primary-glow" />
                support@ayurcare.com
              </li>
              <li className="flex items-center gap-3 text-sm text-secondary-foreground/70">
                <Phone className="w-4 h-4 text-primary-glow" />
                +94 11 234 5678
              </li>
              <li className="flex items-start gap-3 text-sm text-secondary-foreground/70">
                <MapPin className="w-4 h-4 text-primary-glow mt-0.5" />
                123 Healing Lane, Colombo, Sri Lanka
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © 2026 AyurCare. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary-glow transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-secondary-foreground/60 hover:text-primary-glow transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
