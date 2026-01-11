import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { ChangeEvent, useRef } from "react";
import { Trash2, Upload, User } from "lucide-react";
import { ResumeData } from "@/app/resume.types";
import Image from "next/image";
import { Field, FieldLabel } from "@/components/ui/field";

export function AvatarUpload() {
  const { setValue, watch } = useFormContext<ResumeData>();
  const avatar = watch("personalInfo.avatar");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setValue("personalInfo.avatar", reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setValue("personalInfo.avatar", "");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Field className="flex flex-col gap-2">
      <FieldLabel>Profile Picture</FieldLabel>

      <div className="flex items-center gap-4">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border">
          {avatar ? (
            <Image src={avatar} alt="Profile" fill className="object-cover" />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-gray-400">
              <User className="h-12 w-12" />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <Button type="button" variant="outline" size="sm" onClick={() => fileInputRef.current?.click()}>
              <Upload className="mr-2 h-4 w-4" />
              Upload Image
            </Button>

            {avatar && (
              <Button
                type="button"
                variant="destructive"
                size="icon"
                className="h-9 w-9"
                onClick={handleRemove}
                title="Remove image"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
          <p className="text-muted-foreground text-xs">Supported formats: JPG, PNG.</p>
        </div>

        <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
      </div>
    </Field>
  );
}
