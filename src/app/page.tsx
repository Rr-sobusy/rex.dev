import RootLayout from "@/components/layout/root-layout";
import Footer from "@/components/layout/footer";
import dynamic from "next/dynamic";

const DynamicHero = dynamic(() => import("@/components/layout/hero"));
const DynamicProjects = dynamic(() => import("@/components/layout/projects"));
const DynamicAbout = dynamic(()=>import('@/components/layout/about'))


export default function Home() {
  return (
    <RootLayout>
      <DynamicHero />
      <DynamicProjects />
      <DynamicAbout />
      <Footer />
    </RootLayout>
  );
}
