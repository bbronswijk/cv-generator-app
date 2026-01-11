import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AvatarUpload } from "@/components/form/AvatarUpload";
import { ThemeColorPicker } from "@/components/form/ThemeColorPicker";

export function Generic() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="h-auto w-auto border-none p-0 !text-3xl leading-none font-semibold tracking-tight shadow-none focus-visible:ring-0">
          Generic
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <AvatarUpload />
        <ThemeColorPicker />
      </CardContent>
    </Card>
  );
}
