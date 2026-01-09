import type { ResumeData } from "@/app/page"
import { Card } from "@/components/ui/card"
import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react"

type ResumePreviewProps = {
  data: ResumeData
}

export function ResumePreview({ data }: ResumePreviewProps) {
  return (
    <Card className="p-8 bg-card shadow-lg">
      <div className="space-y-6">
        <div className="border-b border-border pb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">{data.personalInfo.fullName || "Your Name"}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            {data.personalInfo.email && (
              <div className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                <span>{data.personalInfo.email}</span>
              </div>
            )}
            {data.personalInfo.phone && (
              <div className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span>{data.personalInfo.phone}</span>
              </div>
            )}
            {data.personalInfo.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                <span>{data.personalInfo.location}</span>
              </div>
            )}
            {data.personalInfo.linkedin && (
              <div className="flex items-center gap-1">
                <Linkedin className="h-3 w-3" />
                <span>{data.personalInfo.linkedin}</span>
              </div>
            )}
            {data.personalInfo.website && (
              <div className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                <span>{data.personalInfo.website}</span>
              </div>
            )}
          </div>
        </div>

        {data.summary && (
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2">Professional Summary</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{data.summary}</p>
          </div>
        )}

        {data.experiences.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-foreground mb-3">Work Experience</h2>
            <div className="space-y-4">
              {data.experiences.map((exp) => (
                <div key={exp.id}>
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-semibold text-foreground">{exp.jobTitle}</h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>
                        {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                      </p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed whitespace-pre-line">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {data.education.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-foreground mb-3">Education</h2>
            <div className="space-y-4">
              {data.education.map((edu) => (
                <div key={edu.id}>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                    </div>
                    <div className="text-right text-sm text-muted-foreground">
                      <p>{edu.graduationDate}</p>
                      {edu.gpa && <p>GPA: {edu.gpa}</p>}
                    </div>
                  </div>
                  {edu.location && <p className="text-sm text-muted-foreground mt-1">{edu.location}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

        {data.skills.length > 0 && (
          <div>
            <h2 className="text-lg font-bold text-foreground mb-2">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-md">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
