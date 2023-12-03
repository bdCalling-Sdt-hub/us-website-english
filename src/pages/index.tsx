import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Home/Banner";
import { Inter } from "next/font/google";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <Banner />
    </div>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
