import { PropsWithChildren } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FieldArrayName, ResumeData } from "@/app/resume.types";
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SortButtons } from "@/components/form/list/SortButtons";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

export function FormArrayItem({
  id,
  index,
  children,
  name,
}: PropsWithChildren<{
  id: string;
  index: number;
  name: FieldArrayName;
}>) {
  const { register, watch, control } = useFormContext<ResumeData>();
  const { fields, append, remove, swap } = useFieldArray({
    control,
    name: `${name}.${index}.activities`,
  });

  return (
    <AccordionItem value={id} className="border-border rounded-lg border px-4">
      <div className="flex items-center gap-4">
        <AccordionTrigger className="flex-1 text-xl font-semibold hover:no-underline">
          {watch(`${name}.${index}.title`) || "New item"}
        </AccordionTrigger>
        {children}
      </div>
      <AccordionContent className="grid grid-cols-2 gap-4 pt-4">
        <Field>
          <FieldLabel>Title</FieldLabel>
          <Input {...register(`${name}.${index}.title`)} placeholder="Software Engineer" />
        </Field>
        <Field>
          <FieldLabel>Subtitle</FieldLabel>
          <Input {...register(`${name}.${index}.subtitle`)} placeholder="Tech Corp" />
        </Field>

        <Field>
          <FieldLabel>Start Date</FieldLabel>
          <Input {...register(`${name}.${index}.startDate`)} placeholder="Jan 2020" />
        </Field>
        <Field>
          <FieldLabel>End Date</FieldLabel>
          <Input {...register(`${name}.${index}.endDate`)} placeholder="Heden" />
        </Field>

        <Field className="col-span-2">
          <FieldLabel>Description</FieldLabel>
          <Textarea
            {...register(`${name}.${index}.description`)}
            placeholder="Describe your responsibilities and achievements..."
            rows={3}
          />
        </Field>

        <div className="col-span-full space-y-3">
          <FieldLabel>Activities</FieldLabel>
          {fields.map((activity, activityIndex) => (
            <div key={activity.id} className="flex items-center gap-2">
              <Input {...register(`${name}.${index}.activities.${activityIndex}.name`)} placeholder="Activity" />
              <SortButtons index={activityIndex} totalCount={fields.length} onMove={swap} />
              <Button type="button" variant="ghost" size="icon" onClick={() => remove(activityIndex)}>
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button type="button" variant="outline" size="sm" onClick={() => append({ name: "" })}>
            <Plus className="mr-2 h-4 w-4" />
            Add Activity
          </Button>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
