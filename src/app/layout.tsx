import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SideNav from "@/components/SideNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daily.Dev",
  description: "Daily Dev Clone",
  authors: [
    {
      name: "Vivin KV",
      url: "https://vivinkv.me",
    },
  ],
  publisher: "Vivin KV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#0E1217] text-white`}>
          {/* <aside className="w-64 border-r border-gray-700 h-[calc(100vh-64px)]">
            <SideNav />
          </aside> */}
          <div className="flex-grow p-6">{children}</div>
       
      </body>
    </html>
  );
}
