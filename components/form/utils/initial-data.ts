import { ResumeData } from "@/app/resume.types";

export const INITIAL_DATA: ResumeData = {
  sectionTitles: {
    personalInfo: "Contact",
    summary: "About",
    experiences: "Experience",
    education: "Education",
    courses: "Courses",
    activities: "Activiteiten",
    skills: "Skills",
  },
  themeColor: "#1a5236",
  personalInfo: {
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 890",
    location: "Amsterdam, NL",
    dateOfBirth: "January 1, 1990",
    avatar:
      "data:image/jpeg;base64,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",
  },
  summary:
    "Experienced software engineer with a proven track record of delivering high-quality, scalable web applications. Passionate about clean code, user-centric design, and continuous learning. Adept at collaborating in agile environments and mentoring junior developers.",
  experiences: [
    {
      title: "Senior Software Engineer",
      subtitle: "Tech Solutions Inc.",
      startDate: "Jan 2020",
      endDate: "Present",
      description: "Lead developer for the company's flagship e-commerce platform.",
      activities: [
        { name: "Architected and implemented microservices using Node.js and Docker." },
        { name: "Improved site performance by 40% through code optimization and caching strategies." },
        { name: "Mentored a team of 5 junior developers and conducted code reviews." },
      ],
    },
    {
      title: "Software Developer",
      subtitle: "Creative Agency",
      startDate: "Jun 2016",
      endDate: "Dec 2019",
      description: "Developed interactive websites and web applications for various clients.",
      activities: [
        { name: "Collaborated with designers to translate UI/UX designs into responsive web interfaces." },
        { name: "Built custom CMS solutions using React and headless CMS platforms." },
        { name: "Integrated third-party APIs for payment processing and social media." },
      ],
    },
  ],
  education: [
    {
      title: "Bachelor of Science in Computer Science",
      subtitle: "University of Technology",
      startDate: "2012",
      endDate: "2016",
      description: "Graduated with Honors. Focus on Software Engineering and Database Systems.",
      activities: [],
    },
  ],
  activities: [
    {
      title: "Open Source Contributor",
      subtitle: "GitHub",
      startDate: "2018",
      endDate: "Present",
      description:
        "Actively contributing to various open-source projects, focusing on React component libraries and utility tools.",
      activities: [],
    },
  ],
  courses: [
    {
      title: "Advanced React Patterns",
      subtitle: "Online Course",
      startDate: "2021",
      endDate: "2021",
      description: "",
      activities: [],
    },
  ],
  skills: [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "Tailwind CSS" },
    { name: "PostgreSQL" },
    { name: "Git" },
  ],
};
