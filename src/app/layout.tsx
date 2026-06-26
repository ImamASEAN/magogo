import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MagoGo — Transform Organic Waste Into Smart Growth',
  description: 'An IoT-powered smart chamber that converts organic waste into valuable biomass through intelligent monitoring and automation.',
  keywords: 'IoT, smart chamber, organic waste, BSF, biomass, circular economy, climate tech',
  openGraph: {
    title: 'MagoGo Smart Chamber',
    description: 'Turning organic waste into smart growth through IoT and circular economy technology.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        {children}
      </body>
    </html>
  )
}
