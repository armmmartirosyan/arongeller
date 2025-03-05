import { allFontsVariables } from "@fonts";
import "@styles/globals.scss";

export const metadata = {
  title: "Architect Portfolio | Aron Geller",
  description:
    "Discover breathtaking, high-end villa designs crafted by a dedicated architect. Combining strength, elegance, and functionality, each project is meticulously planned to create a perfect living space for families.",
  keywords: [
    "architect",
    "luxury villas",
    "modern architecture",
    "high-end homes",
    "family-friendly design",
    "strong and beautiful buildings",
    "custom villa designs",
    "Aron Geller",
    "Aron",
    "Geller",
    "design",
    "luxury",
    "home",
    "house",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={allFontsVariables}>{children}</body>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
    </html>
  );
}
