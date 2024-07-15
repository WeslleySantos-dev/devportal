import type { Metadata } from "next";
import { Didact_Gothic } from "next/font/google";
import "./globals.css";

//COMPONENTS
import { Header } from "@/components/Header";
import {
  PageTransition
} from "@/components/PageTransition";
import { StairTransition } from "@/components/StairTransiton";

const didact = Didact_Gothic({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-gothic"
});

export const metadata: Metadata = {
  title: "Weslley dos Santos",
  description: "web site by weslley",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={didact.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
