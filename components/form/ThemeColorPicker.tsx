import { useFormContext } from "react-hook-form";
import { ResumeData } from "@/app/resume.types";
import { useEffect, useState } from "react";
import { Field, FieldLabel } from "@/components/ui/field";

export function ThemeColorPicker() {
  const { watch, setValue } = useFormContext<ResumeData>();
  const themeColor = watch("themeColor");
  const [localColor, setLocalColor] = useState(themeColor);

  useEffect(() => {
    setLocalColor(themeColor);
  }, [themeColor]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setValue("themeColor", localColor);
    }, 200);

    return () => clearTimeout(timer);
  }, [localColor, setValue]);

  return (
    <Field className="flex flex-col gap-2">
      <FieldLabel>Theme Color</FieldLabel>
      <div className="relative h-10 w-10 max-w-10 overflow-hidden rounded-md border shadow-sm">
        <input
          type="color"
          value={localColor}
          onChange={(e) => setLocalColor(e.target.value)}
          className="ma absolute -top-2 -left-2 h-16 w-16 cursor-pointer border-none p-0"
        />
      </div>
    </Field>
  );
}
