import localFont from "next/font/local"

import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { cn } from "@/lib/utils";

const dmSans = localFont({
  src: "../public/fonts/dm-sans-latin.woff2",
  display: "swap",
  variable: "--font-sans",
})

const fontMono = localFont({
  src: "../public/fonts/geist-mono-latin.woff2",
  display: "swap",
  variable: "--font-mono",
})

export const metadata = {
  title: "Application Available on Request | Sundaresan V",
  description:
    "Some applications are paused when they are not in active use. Request access and they can be restored when needed.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", dmSans.variable)}
    >
      <body>
        <ThemeProvider
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
