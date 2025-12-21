"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Stethoscope, MapPin, GraduationCap, Star } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface Doctor {
  id: number
  name: string
  village: string
  university: string
  specializations: string[]
  experience: number
  languages: string[]
  rating: number
}

export function DoctorCard({ doctor, index }: { doctor: Doctor; index: number }) {
  const [selected, setSelected] = useState(false)
  const { toast } = useToast()

  const handleSelect = () => {
    setSelected(true)
    toast({
      title: "Request Sent Successfully",
      description: `Your request has been sent to ${doctor.name}. You will be notified when the doctor responds.`,
    })
  }

  return (
    <Card
      className="p-6 hover:shadow-xl transition-all duration-300 animate-fadeIn"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
          <Stethoscope className="w-8 h-8 text-success" />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-semibold text-card-foreground mb-1">{doctor.name}</h4>
          <div className="flex items-center gap-1 text-amber-500 mb-2">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">{doctor.rating}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
          <span className="text-sm text-muted-foreground">{doctor.village}</span>
        </div>
        <div className="flex items-start gap-2">
          <GraduationCap className="w-4 h-4 text-muted-foreground mt-1 flex-shrink-0" />
          <span className="text-sm text-muted-foreground">{doctor.university}</span>
        </div>
        <div>
          <p className="text-sm font-medium text-card-foreground mb-1">Specializations:</p>
          <div className="flex flex-wrap gap-2">
            {doctor.specializations.map((spec, idx) => (
              <span key={idx} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                {spec}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{doctor.experience} years experience</span>
          <span className="text-muted-foreground">Languages: {doctor.languages.join(", ")}</span>
        </div>
      </div>

      <Button
        onClick={handleSelect}
        disabled={selected}
        className="w-full bg-success hover:bg-success/90 text-success-foreground"
      >
        {selected ? "Request Sent" : "Select Doctor"}
      </Button>
    </Card>
  )
}
