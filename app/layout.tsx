import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import AskMeAnything from "@/components/ama";
import { Toaster } from "@/components/ui/toaster";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jescaps Antwi",
  description: " sleek, interactive portfolio bringing my projects and skills to life.",


  // Open Graph metadata
  openGraph: {
    title: "Portfolio",
    description: "I love coding.",
    url: "https://jesantwi.tech/",
    siteName: "Portfolio",
    images: [
      {
        url: "/open-graph.png", // image link
        width: 1200,
        height: 500,
        alt: "Title with their description",
      },
    ],
    locale: "en_US",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Portfolio",
    description: "I code.",
    images: ["/open-graph.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          {children}
          <AskMeAnything />
        </ThemeProvider>
      </body>
    </html>
  )
}