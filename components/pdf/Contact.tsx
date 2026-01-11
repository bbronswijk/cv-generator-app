import { tw } from "@/components/pdf/tw";
import { ResumeData } from "@/app/resume.types";
import { View, Text } from "@react-pdf/renderer";
import { CalendarIcon, MailIcon, MapPinIcon, PhoneIcon } from "@/components/pdf/Iconts";

export function Contact({ data }: { data: ResumeData }) {
  return (
    <View style={tw("mt-8")}>
      <Text style={tw("text-lg font-bold mb-2")}>{data.sectionTitles.personalInfo}</Text>
      <View style={tw("flex flex-col gap-3")}>
        {data.personalInfo.phone && (
          <View style={tw("flex flex-row gap-2 items-center")}>
            <PhoneIcon size="14px" style={{ color: "white" }} />
            <Text style={tw("text-[9px] text-gray-700")}>{data.personalInfo.phone}</Text>
          </View>
        )}
        {data.personalInfo.email && (
          <View style={tw("flex flex-row gap-2 items-center")}>
            <MailIcon size="14px" />
            <Text style={tw("text-[9px] text-gray-700")}>{data.personalInfo.email}</Text>
          </View>
        )}

        {data.personalInfo.dateOfBirth && (
          <View style={tw("flex flex-row gap-2 items-center")}>
            <CalendarIcon size="14px" />
            <Text style={tw("text-[9px] text-gray-700")}>{data.personalInfo.dateOfBirth}</Text>
          </View>
        )}
        {data.personalInfo.location && (
          <View style={tw("flex flex-row gap-2 items-center")}>
            <MapPinIcon size="14px" />
            <Text style={tw("text-[9px] text-gray-700")}>{data.personalInfo.location}</Text>
          </View>
        )}
      </View>
    </View>
  );
}
