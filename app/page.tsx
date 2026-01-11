"use client";

import { Form } from "@/components/form/Form";
import { ResumePreview } from "@/components/preview/ResumePreview";
import { ResumePDF } from "@/components/pdf/ResumePDF";
import { useEffect, useState } from "react";
import { ResumeData } from "@/app/resume.types";
import { getPossibleDataFromLocalStorage } from "@/components/form/utils/get-possible-data-from-local-storage";
import { FormProvider, useForm } from "react-hook-form";
import { Header } from "@/components/header/Header";
import { INITIAL_DATA } from "@/components/form/utils/initial-data";
import dynamic from "next/dynamic";
import { Toaster } from "@/components/ui/sonner";

// Dynamically import PDFDownloadLink to avoid SSR issues
// https://stackoverflow.com/questions/76007339/server-error-error-pdfdownloadlink-is-a-web-specific-api-youre-either-using-t
const PDFViewer = dynamic(() => import("@react-pdf/renderer").then((mod) => mod.PDFViewer), {
  ssr: false,
});

export default function ResumePage() {
  const form = useForm<ResumeData>({
    defaultValues: INITIAL_DATA,
    mode: "onChange",
  });
  const resumeData = form.watch();
  const [showPdf, setShowPdf] = useState(false);

  useEffect(() => {
    form.reset(getPossibleDataFromLocalStorage());
  }, [form]);

  return (
    <FormProvider {...form}>
      <form className="min-h-vh grid min-h-dvh grid-cols-[minmax(auto,1fr)_1fr] divide-x divide-gray-300">
        <section>
          <Header onPreview={() => setShowPdf((v) => !v)} showPdf={showPdf} />
          <Form />
        </section>

        {showPdf ? (
          <PDFViewer className="h-full w-full">
            <ResumePDF data={resumeData} />
          </PDFViewer>
        ) : (
          <ResumePreview />
        )}
      </form>
      <Toaster />
    </FormProvider>
  );
}
