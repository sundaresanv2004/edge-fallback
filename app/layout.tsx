import { Space_Grotesk, Bricolage_Grotesque } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import "./globals.css"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const fontHeading = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["800"], // Main titles will be bold
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
      className={cn("antialiased dark", spaceGrotesk.variable, fontHeading.variable)}
    >
      <body>
        <Link
          href="https://sundaresan.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed left-5 top-5 z-50 transition-opacity hover:opacity-80 sm:left-8 sm:top-8"
        >
          <Image
            src="/images/profile.svg"
            alt="Sundaresan V"
            width={34}
            height={34}
            className="rounded-full ring-1 ring-border/30"
          />
        </Link>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
