"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { User, Calendar, CheckCircle, XCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface PatientRequest {
  id: number
  patientName: string
  age: number
  gender: string
  symptoms: string
  predictedDisease: string
  date: string
  status: string
}

export function PatientRequestCard({ request, index }: { request: PatientRequest; index: number }) {
  const [showDialog, setShowDialog] = useState(false)
  const [isAccepting, setIsAccepting] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    confirmedDisease: request.predictedDisease,
    diseaseGroup: "",
    subGroup: "",
    defectType: "",
    riskLevel: "",
    notes: "",
    eSign: "",
  })

  const handleAccept = () => {
    setIsAccepting(true)
    setShowDialog(true)
  }

  const handleReject = () => {
    setIsAccepting(false)
    setShowDialog(true)
  }

  const handleSubmit = () => {
    toast({
      title: isAccepting ? "Patient Accepted" : "Diagnosis Corrected",
      description: isAccepting
        ? "Treatment plan has been initiated and the patient has been notified."
        : "Your correction has been added to the dataset and the patient has been notified.",
    })
    setShowDialog(false)
  }

  return (
    <>
      <Card
        className="p-6 hover:shadow-lg transition-all duration-300 animate-fadeIn"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
            <User className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h4 className="text-lg font-semibold text-card-foreground">{request.patientName}</h4>
                <p className="text-sm text-muted-foreground">
                  {request.age} years • {request.gender}
                </p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {request.date}
              </div>
            </div>

            <div className="mb-3">
              <p className="text-sm font-medium text-card-foreground mb-1">Symptoms:</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{request.symptoms}</p>
            </div>

            <div className="mb-4">
              <p className="text-sm font-medium text-card-foreground mb-1">AI Predicted Disease:</p>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-md text-sm font-medium">
                {request.predictedDisease}
              </span>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleAccept} className="bg-success hover:bg-success/90 text-success-foreground">
                <CheckCircle className="w-4 h-4 mr-2" />
                Accept & Confirm
              </Button>
              <Button
                onClick={handleReject}
                variant="outline"
                className="hover:bg-destructive hover:text-destructive-foreground bg-transparent"
              >
                <XCircle className="w-4 h-4 mr-2" />
                Reject / Correct
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {isAccepting ? "Accept Patient & Confirm Diagnosis" : "Reject or Correct Diagnosis"}
            </DialogTitle>
            <DialogDescription>
              {isAccepting
                ? "Confirm the diagnosis and provide treatment details"
                : "Provide the correct diagnosis and add it to the dataset"}
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
            className="space-y-4 mt-4"
          >
            <div className="space-y-2">
              <Label htmlFor="confirmedDisease">Confirmed Disease Name *</Label>
              <Input
                id="confirmedDisease"
                required
                value={formData.confirmedDisease}
                onChange={(e) => setFormData({ ...formData, confirmedDisease: e.target.value })}
              />
            </div>

            {!isAccepting && (
              <>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="diseaseGroup">Main Disease Group *</Label>
                    <Input
                      id="diseaseGroup"
                      placeholder="e.g., Digestive, Respiratory"
                      required
                      value={formData.diseaseGroup}
                      onChange={(e) => setFormData({ ...formData, diseaseGroup: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subGroup">Sub Group *</Label>
                    <Input
                      id="subGroup"
                      placeholder="e.g., Upper GI, Lower GI"
                      required
                      value={formData.subGroup}
                      onChange={(e) => setFormData({ ...formData, subGroup: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="defectType">Defect Type *</Label>
                    <select
                      id="defectType"
                      required
                      className="w-full px-3 py-2 border border-input bg-background rounded-md"
                      value={formData.defectType}
                      onChange={(e) => setFormData({ ...formData, defectType: e.target.value })}
                    >
                      <option value="">Select Type</option>
                      <option value="vata">Vata</option>
                      <option value="pitta">Pitta</option>
                      <option value="kapha">Kapha</option>
                      <option value="combination">Combination</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="riskLevel">Risk Level *</Label>
                    <select
                      id="riskLevel"
                      required
                      className="w-full px-3 py-2 border border-input bg-background rounded-md"
                      value={formData.riskLevel}
                      onChange={(e) => setFormData({ ...formData, riskLevel: e.target.value })}
                    >
                      <option value="">Select Level</option>
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="critical">Critical</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="notes">{isAccepting ? "Treatment Plan" : "Reason for Correction"} *</Label>
              <Textarea
                id="notes"
                required
                placeholder={
                  isAccepting ? "Describe the treatment approach..." : "Explain why the AI prediction was incorrect..."
                }
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="min-h-24"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="eSign">Electronic Signature *</Label>
              <Input
                id="eSign"
                placeholder="Type your full name as signature"
                required
                value={formData.eSign}
                onChange={(e) => setFormData({ ...formData, eSign: e.target.value })}
              />
              <p className="text-xs text-muted-foreground">By signing, you confirm the accuracy of this information</p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                Submit
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowDialog(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
