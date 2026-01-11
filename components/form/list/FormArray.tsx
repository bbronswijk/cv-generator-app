import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useFieldArray, useFormContext } from "react-hook-form";
import { FieldArrayName, ResumeData } from "@/app/resume.types";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { SortButtons } from "@/components/form/list/SortButtons";
import { ReactNode } from "react";
import { Accordion } from "@/components/ui/accordion";
import { FormArrayItem } from "@/components/form/list/FormArrayItem";

type Props = {
  name: FieldArrayName;
  sectionTitleKey: keyof ResumeData["sectionTitles"];
  icon?: ReactNode;
};

export function FormArray({ sectionTitleKey, name, icon }: Props) {
  const { control, register } = useFormContext<ResumeData>();
  const { swap, fields, append, remove } = useFieldArray({ control, name });

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-4">
        {icon}
        <Input
          {...register(`sectionTitles.${sectionTitleKey}`)}
          className="h-auto w-auto flex-1 border-none p-0 !text-3xl leading-none font-semibold tracking-tight shadow-none focus-visible:ring-0"
        />
      </CardHeader>

      <CardContent className="space-y-6">
        <Accordion type="multiple" className="w-full space-y-4">
          {fields.map((field, index) => (
            <FormArrayItem key={field.id} id={field.id} index={index} name={name}>
              <SortButtons index={index} totalCount={fields.length} onMove={swap} />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  remove(index);
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </FormArrayItem>
          ))}
        </Accordion>

        {fields.length === 0 && (
          <p className="text-muted-foreground py-4 text-center text-sm">
            No {name} added yet. Click &ldquo;Add item&rdquo; to get started.
          </p>
        )}
      </CardContent>

      <CardFooter>
        <Button
          type="button"
          size="sm"
          onClick={() =>
            append({
              title: "",
              subtitle: "",
              startDate: "",
              endDate: "",
              description: "",
              activities: [],
            })
          }
        >
          <Plus className="mr-1 h-4 w-4" />
          Add item
        </Button>
      </CardFooter>
    </Card>
  );
}
