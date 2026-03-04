import type { Metadata } from 'next'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cody — Web3 PM & BDM',
  description:
    'Web3 Project Manager & Business Development Manager with 5+ years building DeFi, NFT, and GameFi products.',
  openGraph: {
    title: 'Cody — Web3 PM & BDM',
    description:
      'Web3 leader with 5+ years managing teams and shipping products across 10+ crypto projects.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${inter.variable} ${instrumentSerif.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  )
}
