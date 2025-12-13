import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Footer } from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { ThemeProvider } from "@/components/misc/(theme)/theme-provider";
import { Analytics } from "@/components/misc/analytics";
import { Toaster } from "@/components/ui/sonner";
import PixelBlast from "@/components/PixelBlast"; // Import PixelBlast

const inter = Inter({ subsets: ["latin"] });

const info = {
  name: "Tanay Kumar",
  twitter: "@CriticalMalwareHacker",
  description: "B.Tech IT Student at NMIMS | Web Dev & UI/UX",
  url: "https://blogy.tech",
  image: "/meta/meta.png",
};

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: info.name,
  description: info.description,
  authors: {
    name: info.name,
    url: info.url,
  },
  creator: info.name,
  openGraph: {
    type: "website",
    url: info.url,
    title: info.name,
    description: info.description,
    images: info.image,
  },
  twitter: {
    card: "summary_large_image",
    title: info.name,
    description: info.description,
    creator: info.twitter,
    images: info.image,
  },
};

interface ChildrenProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* PixelBlast Background - Fixed covering the screen */}
          <div className="fixed inset-0 -z-10 pointer-events-auto">
             <PixelBlast 
               color="#6366f1" // Indigo-500 color (adjust as needed)
               pixelSize={4} 
               className="w-full h-full opacity-15 dark:opacity-40"
             />
          </div>

          <div className="container max-w-3xl mx-auto min-h-screen flex flex-col px-4 py-5 relative z-10">
            <div className="flex-1">
              <Header />
              {children}
            </div>
            <Footer />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
      <Analytics />
      <link
        href="/favicons/favicon-light.ico"
        rel="icon"
        media="(prefers-color-scheme: light)"
      />
      <link
        href="/favicons/favicon-dark.ico"
        rel="icon"
        media="(prefers-color-scheme: dark)"
      />
    </html>
  );
}