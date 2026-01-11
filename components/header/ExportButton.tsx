import { useFormContext } from "react-hook-form";
import { ResumeData } from "@/app/resume.types";
import { FileJson } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

const exportJson = (resumeData: ResumeData) => {
  const jsonString = JSON.stringify(resumeData, null, 2);
  const url = URL.createObjectURL(new Blob([jsonString], { type: "application/json" }));

  const link = document.createElement("a");
  link.href = url;
  link.download = `${resumeData.personalInfo.fullName.toLocaleLowerCase().trim().replace(/\s+/g, "-") || "resume"}.json`;

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export function ExportButton() {
  const { watch } = useFormContext<ResumeData>();
  const resumeData = watch();

  return (
    <DropdownMenuItem onClick={() => exportJson(resumeData)}>
      <FileJson className="mr-2 h-4 w-4" />
      Export
    </DropdownMenuItem>
  );
}
