import localFont from "next/font/local";

export const mazzard = localFont({
  src: [
    {
      path: "../../public/fonts/MazzardH-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/MazzardH-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/MazzardH-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mazzard",
  display: "swap",
});

export const neueMachina = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMachina-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMachina-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMachina-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-neueMachina",
  display: "swap",
});

export const ttOctosquares = localFont({
  src: [
    {
      path: "../../public/fonts/TTOctosquares-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/TTOctosquares-Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-ttOctosquares",
  display: "swap",
});

export const move_x = localFont({
  src: "../../public/fonts/Move-X-Bold.otf",
  variable: "--font-move_x",
  display: "swap",
});
