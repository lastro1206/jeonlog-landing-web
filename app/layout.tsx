import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const pretendard = localFont({
  src: [
    {
      path: "../public/fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeonlog - 당신을 위한 전시 플랫폼",
  description: "데이터가 고르는 추천, 사람이 완성한 큐레이션",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/images/favicon-light.png",
        type: "image/png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/images/favicon-dark.svg",
        type: "image/svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='ko'
      className={pretendard.variable}>
      <body className='font-pretendard'>
        <Header />
        <main className='pt-[65px]'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
