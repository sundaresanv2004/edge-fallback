import { Inter, Outfit } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const fontHeading = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
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
      className={cn("antialiased dark", inter.variable, fontHeading.variable)}
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
      </body>
    </html>
  )
}
