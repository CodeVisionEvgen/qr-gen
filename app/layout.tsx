import "@/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { NavbarComponent } from "@/components/navbar";
import { siteConfig } from "@/config/site";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>{siteConfig.name}</title>
        <meta content={siteConfig.name} property="og:title" />
        <meta content={siteConfig.description} property="og:description" />
        <meta
          content="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
          property="og:image"
        />
        <meta content="http://localhost:3000/" property="og:url" />
        <meta content="website" property="og:type" />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased overflow-hidden",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <NavbarComponent />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow text-default-200">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
