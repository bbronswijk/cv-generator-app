import { ReactNode } from "react";
import { tw } from "@/components/pdf/tw";
import { Text, View } from "@react-pdf/renderer";

type Props = { title: string; icon: ReactNode; themeColor: string };

export function TimelineTitle(props: Props) {
  return (
    <View style={tw("mt-10  flex flex-row items-center")} wrap={false}>
      <View
        style={{
          ...tw("w-12 h-12 rounded-full items-center justify-center mr-6 z-10"),
          backgroundColor: props.themeColor,
        }}
      >
        {props.icon}
      </View>
      <Text style={tw("text-2xl font-bold leading-none")}>{props.title}</Text>
    </View>
  );
}
