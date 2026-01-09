"use client"

import { ResumeForm } from "@/components/resume-form"
import { ResumePreview } from "@/components/resume-preview"
import { ResumePDF } from "@/components/resume-pdf"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useState, useCallback } from "react"
import { pdf } from "@react-pdf/renderer"

export type ResumeData = {
  personalInfo: {
    fullName: string
    email: string
    phone: string
    location: string
    linkedin: string
    website: string
  }
  summary: string
  experiences: Array<{
    id: string
    jobTitle: string
    company: string
    location: string
    startDate: string
    endDate: string
    current: boolean
    description: string
  }>
  education: Array<{
    id: string
    degree: string
    institution: string
    location: string
    graduationDate: string
    gpa: string
  }>
  skills: string[]
}

export default function ResumePage() {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      location: "",
      linkedin: "",
      website: "",
    },
    summary: "",
    experiences: [],
    education: [],
    skills: [],
  })

  const [isDownloading, setIsDownloading] = useState(false)

  const handleResumeChange = useCallback((data: ResumeData) => {
    setResumeData(data)
  }, [])

  const handleDownloadPDF = async () => {
    setIsDownloading(true)
    try {
      const blob = await pdf(<ResumePDF data={resumeData} />).toBlob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = url
      link.download = `${resumeData.personalInfo.fullName || "resume"}.pdf`
      link.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-foreground">Resume Generator</h1>
          <Button onClick={handleDownloadPDF} disabled={isDownloading}>
            <Download className="mr-2 h-4 w-4" />
            {isDownloading ? "Generating..." : "Download PDF"}
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ResumeForm data={resumeData} onChange={handleResumeChange} />
          </div>
          <div className="lg:sticky lg:top-8 h-fit">
            <ResumePreview data={resumeData} />
          </div>
        </div>
      </main>
    </div>
  )
}
