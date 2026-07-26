import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "ArchanaFreelancer | Technology Partner for Growing Businesses",
  description:
    "Websites, mobile applications, AI solutions and business automation for startups and growing companies.",
   verification: {
    google: "rbzUF2YJ4z5OfPrIZWrbidxr91CwOIvztfP4YLLoeok",
  },

  };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}