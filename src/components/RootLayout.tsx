import React from "react";

type Props = {
    children: React.ReactNode
};

const RootLayout = ({children}: Props) => {
  return <main className="max-w-2xl mx-auto">{children}</main>;
};

export default RootLayout;
