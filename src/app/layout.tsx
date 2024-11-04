import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Template 1",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-color paragraph-color`} >
        {children}
      </body>
    </html>
  );
}
