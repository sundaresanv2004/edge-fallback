import { HealthClient } from "@/components/health/health-client"

export const metadata = {
  title: "Health Status | Edge Fallback",
  robots: {
    index: false,
    follow: false,
  },
}

export const dynamic = "force-dynamic"

export default function HealthPage() {
  const uptime = process.uptime()
  
  return <HealthClient initialUptime={uptime} />
}
