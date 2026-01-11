import { PropsWithChildren, ReactNode } from "react";
import { ResumeData } from "@/app/resume.types";

export function TimelineItem(props: PropsWithChildren<{ title: string; icon: ReactNode; data: ResumeData }>) {
  return (
    <div className="relative mb-12">
      <div className="mb-4 flex items-center gap-4">
        <div
          className="z-10 flex h-12 w-12 items-center justify-center rounded-full [&_svg]:text-white"
          style={{ backgroundColor: props.data.themeColor }}
        >
          {props.icon}
        </div>
        <h2 className="text-3xl font-bold">{props.title}</h2>
      </div>

      <div className="ml-16 space-y-8">{props.children}</div>
    </div>
  );
}
