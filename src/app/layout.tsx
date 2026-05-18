import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { publicAsset } from "@/lib/public-path";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tan-long.github.io"),
  title: "Carbon Farming",
  description:
    "Trung tâm dữ liệu Về nông nghiệp sinh thái tỉnh Thanh Hóa",
  keywords: ["nông nghiệp", "cacbon", "nông nghiệp sinh thái", "thanh hóa"],
  authors: [{ name: "Carbon Farming Data Hub" }],
  icons: {
    icon: publicAsset("/images/greenfarming/logo.svg"),
  },
  openGraph: {
    title: "Carbon Farming",
    description:
      "Trung tâm dữ liệu Về nông nghiệp sinh thái tỉnh Thanh Hóa",
    images: [publicAsset("/images/greenfarming/grapes1.webp")],
    url: "https://tan-long.github.io/AI_asen_clone/",
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
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
