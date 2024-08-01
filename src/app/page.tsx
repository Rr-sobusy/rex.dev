import RootLayout from "@/components/layout/root-layout";
import Image from "next/image";
import Hero from "@/components/layout/hero";

export default function Home() {
  return (
    <RootLayout>
        {/* <Image height={300} width={250} alt="heroimage" src="/hero-image.png" /> */}
        <Hero/>
    </RootLayout>
  );
}
