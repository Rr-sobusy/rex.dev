import RootLayout from "@/components/layout/root-layout";
import Image from "next/image";

export default function Home() {
  return (
    <RootLayout>
      <div className="bg-boxesBackground bg-boxesSize">
        <Image height={300} width={250} alt="heroimage" src="/hero-image.png" />
      </div>
    </RootLayout>
  );
}
