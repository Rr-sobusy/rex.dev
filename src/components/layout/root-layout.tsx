"use client";

import React from "react";
import { Poppins } from "next/font/google";

//* Carousel library
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// layouts
import Header from "./header";

type RootLayoutProps = {
  children: React.ReactNode;
};

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "fallback",
  variable: "--font-poppins",
});

const RootLayout = ({ children }: RootLayoutProps) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={`${fontPoppins.variable} min-w-screen px-3 lg:px-3`}>
      <Header />
      <div className="max-w-6xl flex flex-col mx-auto">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default RootLayout;
