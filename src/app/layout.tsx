import type { Metadata } from "next";
import "./globals.css";
import { ClientLayout } from "@/components/ClientLayout";

export const metadata: Metadata = {
  title: {
    default: "Swar Marine | Premium Marine Tourism Experiences",
    template: "%s | Swar Marine"
  },
  description: "Discover premium marine tourism experiences - boat tours, fishing trips, snorkeling adventures, and luxury yacht charters. Book your unforgettable ocean adventure today.",
  keywords: ["boat trips", "fishing trips", "snorkeling", "yacht rental", "marine tourism", "ocean adventure"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Swar Marine"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}