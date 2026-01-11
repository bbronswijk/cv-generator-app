import { ResumeData } from "@/app/resume.types";
import { Items } from "@/components/preview/items";
import { TimelineItem } from "@/components/preview/TimelineItem";
import { Briefcase, Building2, GraduationCap } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { ReactNode, useEffect, useState } from "react";
import { Sidebar } from "@/components/preview/Sidebar";
import { cn } from "@/lib/utils";

export function ResumePreview() {
  const { watch } = useFormContext<ResumeData>();
  const data = watch();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Wrap in a timeout to avoid lint error about synchronous state update in effect
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!isMounted) {
    return (
      <Container className="flex h-[296mm] flex-col">
        <Placeholder />
      </Container>
    );
  }

  return (
    <Container>
      <div
        className="relative grid grid-cols-[300px_1fr] px-8 py-12 text-white"
        style={{ backgroundColor: data.themeColor }}
      >
        <h1 className="col-start-2 text-center text-5xl font-bold md:text-6xl">{data.personalInfo.fullName}</h1>
      </div>

      <div className="grid md:grid-cols-[300px_1fr]">
        <Sidebar />

        <div className="relative p-10">
          <Timeline />
          {data.experiences?.length > 0 && (
            <TimelineItem data={data} title={data.sectionTitles.experiences} icon={<Briefcase className="h-6 w-6" />}>
              <Items items={data.experiences} />
            </TimelineItem>
          )}
          {data.education?.length > 0 && (
            <TimelineItem data={data} title={data.sectionTitles.education} icon={<GraduationCap className="h-6 w-6" />}>
              <Items items={data.education} />
            </TimelineItem>
          )}
          {data.activities?.length > 0 && (
            <TimelineItem data={data} title={data.sectionTitles.activities} icon={<Building2 className="h-6 w-6" />}>
              <Items items={data.activities} />
            </TimelineItem>
          )}
        </div>
      </div>
    </Container>
  );
}

export function Timeline() {
  return <div className="absolute top-0 bottom-0 left-[62px] w-0.5 bg-gray-300" />;
}

export const Container = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className={cn("sticky top-10 bottom-10 mx-auto w-[21cm] bg-white shadow-xl", className)}>{children}</div>
    </div>
  );
};

export const Placeholder = () => {
  return (
    <>
      <div className="h-[156px] bg-gray-200"></div>
      <div className="grid flex-1 grid-cols-[300px_1fr] gap-8">
        <div className="w-[300px] bg-gray-100"></div>
        <div></div>
      </div>
    </>
  );
};
