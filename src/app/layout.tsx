import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter } from "next/font/google";
import { publicAsset } from "@/lib/public-path";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const headingFont = Be_Vietnam_Pro({
  variable: "--font-poppins",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const siteUrl = "https://ai-asen-clone.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Hạt Gạo Ngày Mai | Demo cảnh báo sớm arsenic",
  description:
    "Demo dự án tương tác về hệ thống cảnh báo sớm rủi ro arsenic trong gạo Việt Nam bằng AI dưới các kịch bản khí hậu.",
  keywords: [
    "arsenic",
    "rice",
    "AI",
    "climate change",
    "food safety",
    "Vietnam",
    "GIC",
  ],
  authors: [{ name: "The Grain of Tomorrow" }],
  icons: {
    icon: publicAsset("/images/greenfarming/logo.svg"),
  },
  openGraph: {
    title: "Hạt Gạo Ngày Mai | Demo cảnh báo sớm arsenic",
    description:
      "Demo dự án tương tác về hệ thống cảnh báo sớm rủi ro arsenic trong gạo Việt Nam bằng AI dưới các kịch bản khí hậu.",
    images: [publicAsset("/images/greenfarming/logo.png")],
    url: siteUrl,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
