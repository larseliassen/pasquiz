import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PåskeQuiz - Test din kunnskap om påsken",
  description: "En morsom quiz om norske påsketradisjoner og påskefeiringen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 