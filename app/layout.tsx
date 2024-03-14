import { GeistSans } from "geist/font/sans";
import "./globals.css";

import Sidebar from "@/components/Sidebar";
import ToasterProvider from "@/providers/ToasterProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import SupabaseProvider from "@/providers/SupabaseProvider";
import Player from "@/components/Player";
import getSongsByUserId from "@/actions/getSongByUserId";
import getActiveProductsWithPrices from "@/actions/getActiveProductsWithPrices";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const products = await getActiveProductsWithPrices();

  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-black">
        <ToasterProvider />
        <SupabaseProvider>
          <UserProvider>
            <ModalProvider products={products} />
            {children}
            <Player />
          </UserProvider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
