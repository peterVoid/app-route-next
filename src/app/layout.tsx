"use client";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { usePathname } from "next/navigation";
import { SessionProvider } from "next-auth/react";

const inter = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = usePathname();
  const disabledNav = ["/login", "/register"];
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          {!disabledNav.includes(router) && <Navbar />}
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
