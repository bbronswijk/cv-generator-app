"use client"

import { useForm, useFieldArray, Controller } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Trash2 } from "lucide-react"
import { useEffect } from "react"
import type { ResumeData } from "@/app/page"

type ResumeFormProps = {
  data: ResumeData
  onChange: (data: ResumeData) => void
}

export function ResumeForm({ data, onChange }: ResumeFormProps) {
  const { register, control, watch } = useForm<ResumeData>({
    defaultValues: data,
  })

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control,
    name: "experiences",
  })

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control,
    name: "education",
  })

  const formData = watch()

  useEffect(() => {
    const subscription = watch((value) => {
      onChange(value as ResumeData)
    })
    return () => subscription.unsubscribe()
  }, [watch, onChange])

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" {...register("personalInfo.fullName")} placeholder="John Doe" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("personalInfo.email")} placeholder="john@example.com" />
            </div>
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" {...register("personalInfo.phone")} placeholder="+1 (555) 123-4567" />
            </div>
          </div>
          <div>
            <Label htmlFor="location">Location</Label>
            <Input id="location" {...register("personalInfo.location")} placeholder="San Francisco, CA" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="linkedin">LinkedIn</Label>
              <Input id="linkedin" {...register("personalInfo.linkedin")} placeholder="linkedin.com/in/johndoe" />
            </div>
            <div>
              <Label htmlFor="website">Website</Label>
              <Input id="website" {...register("personalInfo.website")} placeholder="johndoe.com" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Professional Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            {...register("summary")}
            placeholder="Brief overview of your professional background and key achievements..."
            rows={4}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Work Experience</CardTitle>
          <Button
            type="button"
            size="sm"
            onClick={() =>
              appendExperience({
                id: crypto.randomUUID(),
                jobTitle: "",
                company: "",
                location: "",
                startDate: "",
                endDate: "",
                current: false,
                description: "",
              })
            }
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {experienceFields.map((field, index) => (
            <div key={field.id} className="border border-border rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold text-sm">Experience {index + 1}</h4>
                <Button type="button" variant="ghost" size="sm" onClick={() => removeExperience(index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Job Title</Label>
                  <Input {...register(`experiences.${index}.jobTitle`)} placeholder="Software Engineer" />
                </div>
                <div>
                  <Label>Company</Label>
                  <Input {...register(`experiences.${index}.company`)} placeholder="Tech Corp" />
                </div>
              </div>
              <div>
                <Label>Location</Label>
                <Input {...register(`experiences.${index}.location`)} placeholder="San Francisco, CA" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Start Date</Label>
                  <Input {...register(`experiences.${index}.startDate`)} placeholder="Jan 2020" />
                </div>
                <div>
                  <Label>End Date</Label>
                  <Input
                    {...register(`experiences.${index}.endDate`)}
                    placeholder="Present"
                    disabled={watch(`experiences.${index}.current`)}
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Controller
                  control={control}
                  name={`experiences.${index}.current`}
                  render={({ field }) => (
                    <Checkbox id={`current-${index}`} checked={field.value} onCheckedChange={field.onChange} />
                  )}
                />
                <Label htmlFor={`current-${index}`} className="font-normal">
                  I currently work here
                </Label>
              </div>
              <div>
                <Label>Description</Label>
                <Textarea
                  {...register(`experiences.${index}.description`)}
                  placeholder="Describe your responsibilities and achievements..."
                  rows={3}
                />
              </div>
            </div>
          ))}
          {experienceFields.length === 0 && (
            <p className="text-muted-foreground text-sm text-center py-4">
              No work experience added yet. Click "Add" to get started.
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Education</CardTitle>
          <Button
            type="button"
            size="sm"
            onClick={() =>
              appendEducation({
                id: crypto.randomUUID(),
                degree: "",
                institution: "",
                location: "",
                graduationDate: "",
                gpa: "",
              })
            }
          >
            <Plus className="h-4 w-4 mr-1" />
            Add
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {educationFields.map((field, index) => (
            <div key={field.id} className="border border-border rounded-lg p-4 space-y-4">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold text-sm">Education {index + 1}</h4>
                <Button type="button" variant="ghost" size="sm" onClick={() => removeEducation(index)}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div>
                <Label>Degree</Label>
                <Input
                  {...register(`education.${index}.degree`)}
                  placeholder="Bachelor of Science in Computer Science"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Institution</Label>
                  <Input {...register(`education.${index}.institution`)} placeholder="University Name" />
                </div>
                <div>
                  <Label>Location</Label>
                  <Input {...register(`education.${index}.location`)} placeholder="City, State" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Graduation Date</Label>
                  <Input {...register(`education.${index}.graduationDate`)} placeholder="May 2020" />
                </div>
                <div>
                  <Label>GPA (Optional)</Label>
                  <Input {...register(`education.${index}.gpa`)} placeholder="3.8/4.0" />
                </div>
              </div>
            </div>
          ))}
          {educationFields.length === 0 && (
            <p className="text-muted-foreground text-sm text-center py-4">
              No education added yet. Click "Add" to get started.
            </p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <Label>Skills (comma-separated)</Label>
          <Input {...register("skills")} placeholder="JavaScript, React, Node.js, TypeScript, Python" />
          <p className="text-xs text-muted-foreground mt-2">Enter your skills separated by commas</p>
        </CardContent>
      </Card>
    </div>
  )
}
