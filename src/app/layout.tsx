import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "CodeQuestic - Website",
  description: "CodeQuestic isn't just an organization, it's a movement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
