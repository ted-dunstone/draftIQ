import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DraftIQ - AI-Powered Document Analysis",
  description: "Comprehensive grammar, spelling, consistency, and style analysis powered by AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
