import ThemeRegistry from "@/app/components/themeRegistry/ThemeRegistry";
import { languages } from "@/app/i18n/settings";
import { dir } from "i18next";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "Noah Joeris",
  description: "Personal Website of Noah Joeris",
};

export default function RootLayout({ children, params: { lng } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head>
        <link rel="icon" href="favicon.ico" />
        <title>Noah Joeris</title>
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
