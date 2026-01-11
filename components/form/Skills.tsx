import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useFieldArray, useFormContext } from "react-hook-form";
import { ResumeData } from "@/app/resume.types";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { SortButtons } from "@/components/form/list/SortButtons";

export function Skills() {
  const { register, control } = useFormContext<ResumeData>();
  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: "skills",
  });

  return (
    <Card>
      <CardHeader>
        <Input
          {...register("sectionTitles.skills")}
          className="h-auto w-auto border-none p-0 !text-3xl leading-none font-semibold tracking-tight shadow-none focus-visible:ring-0"
        />
      </CardHeader>

      <CardContent className="space-y-4">
        {fields.map((field, index) => (
          <div key={field.id} className="flex items-center gap-2">
            <Input {...register(`skills.${index}.name`)} placeholder="Skill" />
            <SortButtons index={index} totalCount={fields.length} onMove={swap} />
            <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        ))}

        {fields.length === 0 && (
          <p className="text-muted-foreground text-center text-sm">
            No skills added yet. Click &ldquo;Add skill&rdquo; to get started.
          </p>
        )}

        <Button type="button" size="sm" onClick={() => append({ name: "" })}>
          <Plus className="mr-2 h-4 w-4" />
          Add Skill
        </Button>
      </CardContent>
    </Card>
  );
}
