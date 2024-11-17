import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { aeonik } from "@/constants/fonts";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter(
  { subsets: ["latin"] }
);


export const metadata: Metadata = {
  title: "Hospital Management System | EMR",
  description: "Designed and flagged from ITANDT Solutions, to be used by Hospitals, Clinics, Pharmacies etc.",
};

export default function RootLayout({ children, }: Readonly<{children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body 
        className={`${cn("min-h-screen w-full bg-white text-black", inter.className, {
        "debug-screens": process.env.NODE_ENV === "development"
        })} ${aeonik.variable}`}
      >
        {children}
      </body>
    </html>
  );
}

          // suppressHydrationWarning={true} 