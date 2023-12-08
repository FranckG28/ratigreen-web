import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "./components/Toast";
import "react-toastify/dist/ReactToastify.css";
import { appName, appUrl, description } from "./manifest";
import ThemeController from "./providers/ThemeProvider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import KonamiProvider from "./providers/KonamiProvider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: appName,
  metadataBase: new URL(appUrl),
  description: description,
  openGraph: {
    title: appName,
    description: description,
    url: appUrl,
    siteName: appName,
    images: [
      {
        url: `/og.png`,
        width: 800,
        height: 600,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  icons: {
    icon: `/favicon-512.png`,
    shortcut: `/favicon192.png`,
    apple: `/favicon-512.png`,
    other: {
      rel: "apple-touch-icon-precomposed",
      url: `/favicon-512.png`,
    },
  },
  manifest: "manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <KonamiProvider>
          <ThemeController>
            <Navbar />
            <div className="pb-24 pt-24">{children}</div>
            <Footer />
          </ThemeController>
        </KonamiProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
