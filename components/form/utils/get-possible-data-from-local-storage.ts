import { ResumeData } from "@/app/resume.types";
import { INITIAL_DATA } from "@/components/form/utils/initial-data";

export const RESUME_DATA_KEY = "resume-data";

export const getPossibleDataFromLocalStorage = (): ResumeData => {
  const savedData = localStorage.getItem(RESUME_DATA_KEY);

  if (savedData) {
    try {
      return JSON.parse(savedData);
    } catch (error) {
      console.error("Failed to parse resume data from local storage", error);
    }
  }

  return INITIAL_DATA;
};
