import localFont from "next/font/local";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  subsets: ["latin"],
});

const clashDisplay = localFont({
  src: [
    {
      path: "./clash-display/ClashDisplay-Bold.otf",
      weight: "700",
    },
    {
      path: "./clash-display/ClashDisplay-Extralight.otf",
      weight: "400",
    },
    {
      path: "./clash-display/ClashDisplay-Medium.otf",
      weight: "500",
    },
    {
      path: "./clash-display/ClashDisplay-Semibold.otf",
      weight: "500",
    },
  ],
  variable: "--font-clash-display",
});

const satoshi = localFont({
  src: [
    {
      path: "./satoshi/Satoshi-Light.otf",
      weight: "300",
    },
    {
      path: "./satoshi/Satoshi-Regular.otf",
      weight: "400",
    },
    {
      path: "./satoshi/Satoshi-Medium.otf",
      weight: "500",
    },
  ],
  variable: "--font-satoshi",
});

const allFontsVariables = [
  inter.variable,
  clashDisplay.variable,
  satoshi.variable,
].join(" ");

export { inter, clashDisplay, satoshi, allFontsVariables };
