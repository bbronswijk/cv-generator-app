import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
import { ResumeData } from "@/app/resume.types";
import { Textarea } from "@/components/ui/textarea";

export function Personal() {
  const { register } = useFormContext<ResumeData>();

  return (
    <Card>
      <CardHeader>
        <Input
          {...register("sectionTitles.personalInfo")}
          className="h-auto w-auto border-none p-0 !text-3xl leading-none font-semibold tracking-tight shadow-none focus-visible:ring-0"
        />
      </CardHeader>
      <CardContent className="space-y-4">
        <Field>
          <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
          <Input id="fullName" {...register("personalInfo.fullName")} placeholder="John Doe" />
        </Field>
        <div className="grid grid-cols-2 gap-4">
          <Field>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("personalInfo.email")} placeholder="john@example.com" />
          </Field>
          <Field>
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" {...register("personalInfo.phone")} placeholder="+1 (555) 123-4567" />
          </Field>
        </div>
        <Field>
          <Label htmlFor="location">Location</Label>
          <Textarea id="location" {...register("personalInfo.location")} placeholder="San Francisco, CA" />
        </Field>
        <Field>
          <Label htmlFor="dateOfBirth">Date of birth</Label>
          <Input id="dateOfBirth" {...register("personalInfo.dateOfBirth")} placeholder="30 sept 1990" />
        </Field>
        <Field>
          <Input
            {...register("sectionTitles.summary")}
            className="mb-2 h-auto w-auto border-none p-0 font-semibold shadow-none focus-visible:ring-0"
          />
          <Textarea
            {...register("summary")}
            placeholder="Brief overview of your professional background and key achievements..."
            rows={4}
          />
        </Field>
      </CardContent>
    </Card>
  );
}
