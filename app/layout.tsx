import type { Metadata } from "next";
import { Didact_Gothic, JetBrains_Mono } from "next/font/google";
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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
})

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
      <body className={didact.variable + ' ' + jetbrainsMono.variable}>
        <Header />
        <StairTransition />
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
