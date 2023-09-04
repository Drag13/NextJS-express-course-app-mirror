import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simple blog",
  description: "Demo project for the Express Course for the Next.JS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
