import { List } from "@/app/resume.types";
import { tw } from "@/components/pdf/tw";
import { Text, View } from "@react-pdf/renderer";
import { ReactNode } from "react";

export function Items(props: { items: Array<List>; title?: ReactNode }) {
  if (!props.items || props.items.length === 0) {
    return null;
  }

  return (
    <>
      {props.items.map((item, index) =>
        index === 0 ? (
          // Wrap the first item with the title, this allows us to keep the title and first item together on the same page
          <View key={item.title} wrap={false}>
            {props.title}
            <Item item={item} />
          </View>
        ) : (
          <Item key={item.title} item={item} />
        )
      )}
    </>
  );
}

function Item({ item }: { item: List }) {
  return (
    <View key={item.title} style={tw("mt-4 pl-[56px]")} wrap={false}>
      <View style={tw("flex flex-row-reverse flex-wrap items-baseline")}>
        <Text style={tw("w-full text-[9px] text-gray-500 leading-none")}>
          {[item.startDate, item.endDate].filter(Boolean).join(" - ")}
        </Text>
        <Text style={tw("text-[12px] font-semibold leading-none my-2 mr-auto")}>{item.title}</Text>
      </View>

      <Text style={tw("text-[9px] leading-none text-gray-500 mb-3")}>{item.subtitle}</Text>

      {item.description && <Text style={tw("text-[10px] leading-normal text-gray-700")}>{item.description}</Text>}

      {item.activities && item.activities.length > 0 && (
        <View style={tw("mt-2 ml-2")}>
          {item.activities.map((activity) => (
            <View key={activity.name} style={tw("flex flex-row  mb-1")}>
              <View style={tw("w-1 h-1 rounded-full mr-2 mt-1 bg-gray-700 ")} />
              <Text style={tw("text-[9px] leading-normal text-gray-700")}>{activity.name}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
