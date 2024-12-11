import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bogdan Krenz",
  description: "My portfolio page tehe :P",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
