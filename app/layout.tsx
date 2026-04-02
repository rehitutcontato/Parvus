import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistSans } from "geist/font/sans"
import "./globals.css"
import { cn } from "@/lib/utils"
import { CustomCursor } from "@/components/ui/CustomCursor"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Parvus — Landing pages que convertem",
  description:
    "Agência de landing pages premium. Design extraordinário, conversão mensurável e código seu para sempre.",
  openGraph: {
    title: "Parvus — Landing pages que convertem",
    description:
      "Construímos landing pages que transformam visitantes em clientes reais.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn(GeistSans.variable, inter.variable)}
    >
      <body className={cn(inter.className, "antialiased")}>
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
