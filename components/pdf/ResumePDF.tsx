import { Document, Page, View } from "@react-pdf/renderer";

import { ResumeData } from "@/app/resume.types";
import { tw } from "@/components/pdf/tw";
import { BriefcaseIcon, Building2Icon, GraduationCapIcon } from "@/components/pdf/Iconts";
import { Header } from "@/components/pdf/Header";
import { Sidebar } from "@/components/pdf/Sidebar";
import { TimelineTitle } from "@/components/pdf/TimelineTitle";
import { Items } from "@/components/pdf/Items";

export function ResumePDF({ data }: { data: ResumeData }) {
  return (
    <Document>
      <Page size="A4" style={tw("bg-white font-sans")}>
        <Header title={data.personalInfo.fullName} themeColor={data.themeColor} />
        <View style={tw("flex flex-row grow")}>
          <Sidebar data={data} />

          <View style={tw("w-[70%] pl-8 pr-14 relative")}>
            <VerticalTimeLine />

            {data.experiences?.length > 0 && (
              <Items
                items={data.experiences}
                title={
                  <TimelineTitle
                    title={data.sectionTitles.experiences}
                    icon={<BriefcaseIcon size="16pt" stroke="white" />}
                    themeColor={data.themeColor}
                  />
                }
              />
            )}

            {data.education?.length > 0 && (
              <Items
                items={data.education}
                title={
                  <TimelineTitle
                    title={data.sectionTitles.education}
                    icon={<GraduationCapIcon size="16px" stroke="white" />}
                    themeColor={data.themeColor}
                  />
                }
              />
            )}

            {data.activities?.length > 0 && (
              <Items
                items={data.activities}
                title={
                  <TimelineTitle
                    title={data.sectionTitles.activities}
                    icon={<Building2Icon size="16px" stroke="white" />}
                    themeColor={data.themeColor}
                  />
                }
              />
            )}
          </View>
        </View>
      </Page>
    </Document>
  );
}

function VerticalTimeLine() {
  return <View style={tw("absolute top-0 bottom-0 left-[40pt] w-[2px] bg-gray-200")} fixed />;
}
