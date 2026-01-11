import { useFormContext } from "react-hook-form";
import { ResumeData } from "@/app/resume.types";
import { Save } from "lucide-react";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { save } from "@/components/form/utils/save.utils";
import { toast } from "sonner";

export function SaveButton() {
  const { watch } = useFormContext<ResumeData>();
  const resumeData = watch();

  const handleSave = () => {
    save(resumeData);

    toast.success("Saved successfully", {
      duration: 3000,
      position: "top-right",
      dismissible: true,
    });
  };

  return (
    <DropdownMenuItem onClick={handleSave}>
      <Save className="mr-2 h-4 w-4" />
      Save
    </DropdownMenuItem>
  );
}
