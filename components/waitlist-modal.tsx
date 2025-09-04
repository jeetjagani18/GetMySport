"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

interface WaitlistModalProps {
  children: React.ReactNode
  defaultRole?: "player" | "owner"
}

export function WaitlistModal({ children, defaultRole }: WaitlistModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    role: defaultRole || "player",
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.consent) {
      toast({
        title: "Please accept terms",
        description: "You must accept the terms and conditions to join the waitlist.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      console.log("Waitlist submission:", formData)

      toast({
        title: "You're on the list!",
        description: "We'll notify you when Get My Sport launches in your city.",
      })

      setFormData({ name: "", email: "", city: "", role: defaultRole || "player", consent: false })
      setIsOpen(false)
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading font-bold text-2xl text-center">Join the Waitlist</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-semibold">
              Name
            </Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-semibold">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="city" className="text-sm font-semibold">
              City
            </Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => setFormData((prev) => ({ ...prev, city: e.target.value }))}
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role" className="text-sm font-semibold">
              I am a
            </Label>
            <Select
              value={formData.role}
              onValueChange={(value: "player" | "owner") => setFormData((prev) => ({ ...prev, role: value }))}
            >
              <SelectTrigger className="h-12">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="player">Player</SelectItem>
                <SelectItem value="owner">Ground Owner</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="consent"
              checked={formData.consent}
              onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, consent: !!checked }))}
              className="mt-1"
            />
            <Label htmlFor="consent" className="text-sm leading-relaxed">
              I agree to the Terms & Conditions and Privacy Policy
            </Label>
          </div>

          <Button type="submit" className="w-full h-12 text-lg bg-primary hover:bg-primary/90" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Joining...
              </>
            ) : (
              "Join Waitlist"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
