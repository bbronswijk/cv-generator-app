export type ResumeData = {
  sectionTitles: {
    personalInfo: string;
    summary: string;
    experiences: string;
    education: string;
    courses: string;
    activities: string;
    skills: string;
  };
  personalInfo: PersonalInfo;
  themeColor: string;
  summary: string;
  experiences: Array<List>;
  education: Array<List>;
  courses: Array<List>;
  activities: Array<List>;
  skills: Array<{ name: string }>;
};

export type PersonalInfo = {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  dateOfBirth: string;
  avatar: string;
};

export type List = {
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  description: string;
  activities: Array<{ name: string }>;
};

/**
 * Normally I'd use something like:
 * FieldArrayPath<ResumeData>
 *
 * Or in this case:
 * FieldArrayPath<Omit<ResumeData, "skills">>
 *
 * But FieldArrayPath also includes nested paths, which we don't want here.
 */
export type FieldArrayName = "experiences" | "education" | "courses" | "activities";
