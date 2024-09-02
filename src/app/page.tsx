import RootLayout from "@/components/layout/root-layout";
import About from "@/components/layout/about";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(() => import("@/components/layout/hero"));
const DynamicProjects = dynamic(() => import("@/components/layout/projects"));

export default function Home() {
  return (
    <RootLayout>
      {/* <Image height={300} width={250} alt="heroimage" src="/hero-image.png" /> */}
      <DynamicHero />
      <DynamicProjects />
      <About />
    </RootLayout>
  );
}
