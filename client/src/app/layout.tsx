import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const suite = localFont({
  src: "./fonts/SUITEVariable.woff2",
  variable: "--font-suite",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Yacht",
  description:
    "Kubernetes Build, Deployment, and Operations Automation Platform",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yacht-liard.vercel.app/",
    description:
      "Kubernetes Build, Deployment, and Operations Automation Platform",
    siteName: "Yacht",
    images: [
      {
        url: "/images/background-logo.png",
        alt: "Yacht",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${suite.variable} flex flex-col font-geistSans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
