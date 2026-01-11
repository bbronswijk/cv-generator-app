import { ResumeData } from "@/app/resume.types";
import { tw } from "@/components/pdf/tw";
import { Text, View, Image } from "@react-pdf/renderer";
import { PropsWithChildren } from "react";
import { Contact } from "@/components/pdf/Contact";

function SidebarTitle({ children }: PropsWithChildren) {
  return <Text style={tw("text-lg font-bold mb-2")}>{children}</Text>;
}

export function Sidebar({ data }: { data: ResumeData }) {
  return (
    <View style={tw("w-[30%] bg-gray-100 p-6 min-h-full")}>
      {}
      {data.personalInfo.avatar && (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
          src={data.personalInfo.avatar}
          style={tw("-top-24 -mb-24 rounded-full object-cover w-[143pt] h-[143pt]")}
          cache={false}
        />
      )}

      <Contact data={data} />

      {/* Profile / Summary Section */}
      {data.summary && (
        <View style={tw("mt-8")} wrap={false}>
          <SidebarTitle>{data.sectionTitles.summary}</SidebarTitle>
          <Text style={tw("text-[9px] leading-relaxed text-gray-700 text-justify")}>{data.summary}</Text>
        </View>
      )}

      {/* Skills Section */}
      {data.skills && data.skills.length > 0 && (
        <View style={tw("mt-8")} wrap={false}>
          <SidebarTitle>{data.sectionTitles.skills}</SidebarTitle>
          <View>
            {data.skills.map((skill, index) => (
              <View key={index} style={tw("flex flex-row items-center my-0.5")}>
                <View style={tw("w-1 h-1 rounded-full mr-2 bg-gray-700")} />
                <Text style={tw("text-[9px] text-gray-700")}>{skill.name}</Text>
              </View>
            ))}
          </View>
        </View>
      )}

      {/* Courses Section */}
      {data.courses && data.courses.length > 0 && (
        <View style={tw("mt-8")} wrap={false}>
          <SidebarTitle>{data.sectionTitles.courses}</SidebarTitle>
          <View>
            {data.courses.map((course, index) => (
              <View key={index} style={tw("mb-4")}>
                {course.startDate && <Text style={tw("text-[9px] text-gray-600")}>{course.startDate}</Text>}
                <Text style={tw("text-[10px] my-1 leading-none font-bold")}>{course.title}</Text>
                {course.subtitle && <Text style={tw("text-[9px] text-gray-600")}>{course.subtitle}</Text>}
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
}
