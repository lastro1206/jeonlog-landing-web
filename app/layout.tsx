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

const appleSDGothicNeoB00 = localFont({
  src: "../public/fonts/AppleSDGothicNeoB00.ttf",
  variable: "--font-apple-sd-gothic-neo-b00",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jeonlog.com"),
  title: {
    default: "Jeon:log - 당신을 위한 전시 플랫폼",
    template: "%s | Jeon:log",
  },
  description: "데이터가 고르는 추천, 사람이 완성한 큐레이션. 서울의 모든 전시를 하나의 플랫폼에서 한눈에 확인하고, 맞춤형 큐레이션으로 새로운 관람의 기준을 제안합니다.",
  keywords: [
    "전시",
    "큐레이션",
    "전시 추천",
    "서울 전시",
    "문화 플랫폼",
    "미술관",
    "갤러리",
    "전시회",
    "예술",
    "문화",
    "Jeonlog",
    "전록",
    "전시 기록",
    "전시 추천 플랫폼",
  ],
  authors: [{ name: "Jeon:log" }],
  creator: "Jeon:log",
  publisher: "Jeon:log",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://jeonlog.com",
    siteName: "Jeon:log",
    title: "Jeon:log - 당신을 위한 전시 플랫폼",
    description: "데이터가 고르는 추천, 사람이 완성한 큐레이션. 서울의 모든 전시를 하나의 플랫폼에서 한눈에 확인하고, 맞춤형 큐레이션으로 새로운 관람의 기준을 제안합니다.",
    images: [
      {
        url: "/images/home/homeLogo.png",
        width: 1200,
        height: 630,
        alt: "Jeon:log - 전시 추천 플랫폼",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeon:log - 당신을 위한 전시 플랫폼",
    description: "데이터가 고르는 추천, 사람이 완성한 큐레이션",
    images: ["/images/home/homeLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
  alternates: {
    canonical: "https://jeonlog.com",
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
      className={`${pretendard.variable} ${appleSDGothicNeoB00.variable}`}>
      <body className='font-pretendard'>
        <Header />
        <main className='pt-[65px]'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
