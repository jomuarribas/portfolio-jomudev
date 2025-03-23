import type { Viewport, Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WindowManagerProvider } from "./context/windowManagerContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: "jomuDev - Portfolio",
  description: "Porfolio de Jonathan Muñoz Arribas (jomuDev)",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
  authors: [{ name: "Jonathan Muñoz Arribas", url: "https://www.jomudev.com" }],
  keywords:
    "Desarrollador, Frontend, Backend, Fullstack, Web, Móvil, Apps, React, Node, Next, Typescript, Javascript, HTML, CSS, Tailwind, Material, UI, UX, Design, Portfolio, jomuDev",
  openGraph: {
    title: "jomuDev - Portfolio",
    description: "Porfolio de Jonathan Muñoz Arribas (jomuDev)",
    url: "https://www.jomudev.com",
    siteName: "jomuDev",
    images: [
      {
        url: "/icons/icon-512x512.png",
        width: 512,
        height: 512,
        alt: "jomuDev Logo",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WindowManagerProvider>{children}</WindowManagerProvider>
      </body>
    </html>
  );
}
