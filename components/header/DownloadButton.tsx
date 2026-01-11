import { useFormContext } from "react-hook-form";
import { ResumeData } from "@/app/resume.types";
import { Button } from "@/components/ui/button";
import { Download, Loader2 } from "lucide-react";
import { ResumePDF } from "@/components/pdf/ResumePDF";
import { useState } from "react";
import { toast } from "sonner";

/**
 * Note:
 * PDFDownloadLink from @react-pdf/renderer generates the PDF as soon as rendered.
 * Causing flickering issue.
 *
 * https://react-pdf.org/components#pdfdownloadlink
 *
 */
export function DownloadButton() {
  const { getValues } = useFormContext<ResumeData>();
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);

    try {
      const resumeData = getValues();
      const fileName = `${resumeData.personalInfo.fullName.toLocaleLowerCase().replace(/\s+/g, "-") || "resume"}.pdf`;

      const { pdf } = await import("@react-pdf/renderer");
      const blob = await pdf(<ResumePDF data={resumeData} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      toast.success("Successfully generated PDF", {
        duration: 3000,
        position: "top-right",
        dismissible: true,
      });
    } catch (error) {
      toast.error("Failed to generate PDF", {
        duration: 3000,
        position: "top-right",
        dismissible: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button type="button" onClick={handleDownload} disabled={loading}>
      {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Download className="mr-2 h-4 w-4" />}
      {loading ? "Generating..." : "Download"}
    </Button>
  );
}
