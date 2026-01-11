import { Circle, Line, Path, Rect, Svg, SVGProps } from "@react-pdf/renderer";
import { PropsWithChildren } from "react";

type IconProps = PropsWithChildren<SVGProps & { size?: string }>;

const PdfIcon = ({ size, style, ...props }: IconProps) => (
  <Svg
    width="24"
    style={{ width: size, height: size }}
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  />
);

export const PhoneIcon = (props: IconProps) => (
  <PdfIcon {...props}>
    <Path
      fill="none"
      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"
    />
  </PdfIcon>
);

export const MailIcon = (props: IconProps) => (
  <PdfIcon {...props}>
    <Path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" fill="none" />
    <Rect x="2" y="4" width="20" height="16" rx="2" fill="none" />
  </PdfIcon>
);

export const MapPinIcon = (props: IconProps) => (
  <PdfIcon {...props}>
    <Path
      d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
      fill="none"
    />
    <Circle cx="12" cy="10" r="3" fill="none" />
  </PdfIcon>
);

export const CalendarIcon = (props: IconProps) => (
  <PdfIcon {...props}>
    <Rect x="3" y="4" width="18" height="18" rx="2" ry="2" fill="none" />
    <Line x1="16" y1="2" x2="16" y2="6" fill="none" />
    <Line x1="8" y1="2" x2="8" y2="6" fill="none" />
    <Line x1="3" y1="10" x2="21" y2="10" fill="none" />
  </PdfIcon>
);

export const BriefcaseIcon = (props: IconProps) => (
  <PdfIcon {...props}>
    <Path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" fill="none" />
    <Rect width="20" height="14" x="2" y="6" rx="2" fill="none" />
  </PdfIcon>
);

export const GraduationCapIcon = (props: IconProps) => (
  <PdfIcon {...props}>
    <Path d="M22 10v6M2 10l10-5 10 5-10 5z" fill="none" />
    <Path d="M6 12v5c3 3 9 3 12 0v-5" fill="none" />
  </PdfIcon>
);

export const Building2Icon = (props: IconProps) => (
  <PdfIcon {...props}>
    <Path d="M14 21v-3a2 2 0 0 0-4 0v3" fill="none" />
    <Path d="M18 5v16" fill="none" />
    <Path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" fill="none" />
    <Path
      d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11"
      fill="none"
    />
    <Path d="M6 5v16" fill="none" />
    <Circle cx="12" cy="9" r="2" fill="none" />
  </PdfIcon>
);
