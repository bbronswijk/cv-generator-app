import { Text, View } from "@react-pdf/renderer";
import { tw } from "@/components/pdf/tw";

export function Header({ title, themeColor }: { title: string; themeColor: string }) {
  return (
    <View style={{ ...tw("flex flex-row text-white pt-10 pb-12"), backgroundColor: themeColor }}>
      <Text style={tw(" w-[70%] ml-auto justify-center px-8 text-6xl font-bold text-center leading-none")}>
        {title}
      </Text>
    </View>
  );
}
