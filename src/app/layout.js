import { allFontsVariables } from "@fonts";
import "@styles/globals.scss";

export const metadata = {
  title: "Aron Geller",
  description: "",
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
