import "./globals.css";
import { Nunito } from "next/font/google";
import { ReactNode } from "react";
import Provider from "./provider";
import { Metadata } from "next";
import ThemeProvider from "./themeProvider";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Basic TS",
  description: "Hobby Project",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <ThemeProvider />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
