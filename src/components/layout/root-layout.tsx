import React from "react";
import { Poppins } from "next/font/google";

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
  return (
    <div className={`${fontPoppins.variable} min-w-screen px-3 lg:px-3`}>
      <div className="max-w-6xl flex flex-col mx-auto">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default RootLayout;
