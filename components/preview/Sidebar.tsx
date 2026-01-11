import Image from "next/image";
import { Info } from "@/components/preview/info";
import { Skills } from "@/components/preview/skills";
import { Items } from "@/components/preview/items";
import { useFormContext } from "react-hook-form";
import { ResumeData } from "@/app/resume.types";

export function Sidebar() {
  const { watch } = useFormContext<ResumeData>();
  const data = watch();

  return (
    <div className="relative bg-gray-100 p-8">
      {!!data.personalInfo.avatar && (
        <div className="absolute -top-20 left-8 h-56 w-56 overflow-hidden rounded-full">
          <Image
            src={data.personalInfo.avatar}
            alt={data.personalInfo.fullName}
            width={224}
            height={224}
            className="h-full w-full object-cover"
          />
        </div>
      )}

      <Info title={data.sectionTitles.personalInfo} personalInfo={data.personalInfo} />
      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">{data.sectionTitles.summary}</h2>
        <p className="text-justify text-sm leading-relaxed whitespace-pre-line text-gray-700">{data.summary}</p>
      </div>
      <Skills skills={data.skills} title={data.sectionTitles.skills} />

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">{data.sectionTitles.courses}</h2>
        <Items items={data.courses} />
      </div>
    </div>
  );
}
