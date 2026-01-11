import { createTw } from "@hyperline/react-pdf-tailwind";
import { Font } from "@react-pdf/renderer";

Font.register({
  family: "Geist",
  fonts: [
    {
      fontWeight: 400,
      src: "https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.3/files/geist-sans-latin-400-normal.woff",
    },
    {
      fontWeight: 400,
      fontStyle: "italic",
      src: "https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.3/files/geist-sans-latin-400-normal.woff",
    },
    {
      src: "https://cdn.jsdelivr.net/npm/@fontsource/geist-sans@5.0.3/files/geist-sans-latin-700-normal.woff",
      fontWeight: 700,
    },
  ],
});

Font.register({
  family: "Geist Mono",
  src: "https://cdn.jsdelivr.net/npm/@fontsource/geist-mono@5.0.3/files/geist-mono-latin-400-normal.woff",
});

// Disable hyphenation
// https://react-pdf.org/fonts#registerhyphenationcallback
Font.registerHyphenationCallback((word) => [word]);

export const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Geist"],
      mono: ["Geist Mono"],
    },
    extend: {
      colors: {
        primary: "#1a5236",
      },
    },
  },
});
