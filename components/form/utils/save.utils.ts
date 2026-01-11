import { ResumeData } from "@/app/resume.types";
import { useEffect } from "react";
import { RESUME_DATA_KEY } from "@/components/form/utils/get-possible-data-from-local-storage";
import { useFormContext } from "react-hook-form";
import { INITIAL_DATA } from "@/components/form/utils/initial-data";

const AUTOSAVE_INTERVAL_MS = 10000;

export const save = (resumeData: ResumeData) => localStorage.setItem(RESUME_DATA_KEY, JSON.stringify(resumeData));

export const useAutoSave = () => {
  const { watch } = useFormContext<ResumeData>();

  const resumeData = watch();

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    // Do not save the initial data
    if (resumeData.personalInfo.fullName !== INITIAL_DATA.personalInfo.fullName) {
      timeout = setTimeout(() => save(resumeData), AUTOSAVE_INTERVAL_MS);
    }

    return () => clearTimeout(timeout);
  }, []);
};
