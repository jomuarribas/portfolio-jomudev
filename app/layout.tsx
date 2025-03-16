import type { Viewport } from "next";
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

export const metadata = {
  title: "jomuDev - Portfolio",
  description: "Porfolio de Jonathan Muñoz Arribas (jomuDev)",
  url: "https://www.jomudev.com",
  siteName: "jomuDev",
  StyleSheet: "/styles/globals.css?v=1.0.1",
  favicon: "/favicon.ico",
  Autor: "Jonathan Muñoz Arribas",
  keywords:
    "Desarrollador, Frontend, Backend, Fullstack, Web, Móvil, Apps, React, Node, Next, Typescript, Javascript, HTML, CSS, Tailwind, Material, UI, UX, Design, Portfolio, jomuDev",
  openGraph: {
    title: "jomuDev - Portfolio",
    description: "Porfolio de Jonathan Muñoz Arribas (jomuDev).",
    image: "/icons/icon-512x512.png",
    url: "https://www.jomudev.com",
    type: "website",
    site_name: "jomuDev",
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
