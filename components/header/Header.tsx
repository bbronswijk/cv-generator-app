import { DownloadButton } from "@/components/header/DownloadButton";
import { ExportButton } from "@/components/header/ExportButton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Eye, FileText, Menu, Upload } from "lucide-react";
import { ChangeEvent, useRef } from "react";
import { RESUME_DATA_KEY } from "@/components/form/utils/get-possible-data-from-local-storage";
import { useFormContext } from "react-hook-form";
import { ResumeData } from "@/app/resume.types";
import { useAutoSave } from "@/components/form/utils/save.utils";
import { SaveButton } from "@/components/header/SaveButton";
import { toast } from "sonner";

export function Header({ onPreview, showPdf }: { onPreview: () => void; showPdf: boolean }) {
  const { reset } = useFormContext<ResumeData>();

  const fileInputRef = useRef<HTMLInputElement>(null);
  useAutoSave();

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    const text = await file?.text();
    if (!text) {
      return;
    }

    const parsedData = JSON.parse(text);
    reset(parsedData);
    localStorage.setItem(RESUME_DATA_KEY, text);

    toast.success("Import success", {
      duration: 3000,
      position: "top-right",
      dismissible: true,
    });
  };

  return (
    <header className="border-border bg-card flex items-center justify-between gap-4 border-b px-8 py-8">
      <h1 className="text-foreground flex-grow text-center text-5xl font-bold">Resume Generator</h1>
      <DownloadButton />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" type="button">
            <Menu className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={onPreview}>
            {showPdf ? <Eye className="mr-2 h-4 w-4" /> : <FileText className="mr-2 h-4 w-4" />}
            {showPdf ? "Show Preview" : "Show PDF"}
          </DropdownMenuItem>

          <SaveButton />

          <DropdownMenuSeparator />

          <DropdownMenuItem
            onSelect={() => {
              fileInputRef.current?.click();
            }}
            role="label"
          >
            <Upload className="mr-2 h-4 w-4" />
            Import
          </DropdownMenuItem>

          <ExportButton />
        </DropdownMenuContent>
      </DropdownMenu>

      {/* This needs to be outside the Dropdown */}
      <input type="file" accept=".json" ref={fileInputRef} className="hidden" onChange={handleFileChange} />
    </header>
  );
}
