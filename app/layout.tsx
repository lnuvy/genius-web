"use client";

import "./globals.css";
import "./theme.css";
import localFont from "next/font/local";
import "@/public/static/fonts/fonts.css";
import { Reset } from "styled-reset";
import { ToastContainer } from "react-toastify";

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// const myFont = localFont({ src: "./Shilla_Culture(M).otf", display: "swap" });
// const myFont2 = localFont({
//   src: "./yulyeo.ttf",
//   display: "swap",
// });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="shilla">
      <Reset />
      <ToastContainer />
      <body>{children}</body>
    </html>
  );
}
