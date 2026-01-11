import { Personal } from "@/components/form/Personal";
import { FormArray } from "@/components/form/list/FormArray";
import { Skills } from "@/components/form/Skills";
import { Briefcase, Building2, GraduationCap } from "lucide-react";
import { Generic } from "@/components/form/Generic";

export function Form() {
  return (
    <div className="space-y-12 bg-gray-50 px-8 py-10">
      <Generic />
      <Personal />
      <Skills />
      <FormArray sectionTitleKey="courses" name="courses" />

      <FormArray sectionTitleKey="experiences" name="experiences" icon={<Briefcase className="h-6 w-6" />} />
      <FormArray sectionTitleKey="education" name="education" icon={<GraduationCap className="h-6 w-6" />} />
      <FormArray sectionTitleKey="activities" name="activities" icon={<Building2 className="h-6 w-6" />} />
    </div>
  );
}
