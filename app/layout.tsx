import { Geist, Geist_Mono, DM_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/ui/theme-provider"
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "Service Unavailable",
  description: "The application previously hosted on this domain is currently unavailable. Please check back later or contact the developer for more information.",
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
