import { List } from "@/app/resume.types";

export function Items(props: { items: Array<List> }) {
  if (!props.items || props.items.length === 0) {
    return null;
  }

  return (
    <>
      {props.items.map((item) => (
        <div key={item.title}>
          <div className="flex flex-row-reverse flex-wrap items-baseline">
            <span className="w-full text-sm text-gray-400">
              {[item.startDate, item.endDate].filter(Boolean).join(" - ")}
            </span>
            <h3 className="text-md my-2 mr-auto leading-none font-bold">{item.title}</h3>
          </div>

          <p className="mb-3 text-sm leading-none text-gray-400">{item.subtitle}</p>

          {item.description && (
            <p className="text-sm leading-normal whitespace-pre-line text-gray-700">{item.description}</p>
          )}

          {item.activities?.length > 0 && (
            <ul className="mt-2 list-disc pl-4">
              {item.activities.map((activity, index) => (
                <li key={activity.name + index} className="text-sm leading-normal whitespace-pre-line text-gray-700">
                  {activity.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </>
  );
}
