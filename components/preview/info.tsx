import { PersonalInfo } from "@/app/resume.types";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import { ReactNode } from "react";

export function Info(props: { title: string; personalInfo: PersonalInfo }) {
  return (
    <section className="mt-32">
      <h2 className="mb-6 text-2xl font-bold">{props.title}</h2>
      <div className="space-y-4">
        {props.personalInfo.phone && <Item icon={<Phone />}>{props.personalInfo.phone}</Item>}
        {props.personalInfo.email && <Item icon={<Mail />}>{props.personalInfo.email}</Item>}
        {props.personalInfo.dateOfBirth && <Item icon={<Calendar />}>{props.personalInfo.dateOfBirth}</Item>}
        {props.personalInfo.location && (
          <Item icon={<MapPin />}>
            {props.personalInfo.location.split("\n").map((line, idx) => (
              <span key={idx} className="leading-snug">
                {line}
                {idx < props.personalInfo.location.split("\n").length - 1 && <br />}
              </span>
            ))}
          </Item>
        )}
      </div>
    </section>
  );
}

function Item(props: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-5 w-5 flex-shrink-0">{props.icon}</div>
      <div className="text-sm leading-none">{props.children}</div>
    </div>
  );
}
