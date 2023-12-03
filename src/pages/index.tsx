import RootLayout from "@/components/Layouts/RootLayout";
import Banner from "@/components/UI/Home/Banner";
import FAQ from "@/components/UI/Home/FAQ";
import Feedback from "@/components/UI/Home/Feedback";
import Products from "@/components/UI/Home/Products";
import Subscribe from "@/components/UI/Home/Subscribe";
import WhoWeAre from "@/components/UI/Home/WhoWeAre";
import { Inter } from "next/font/google";
import Head from "next/head";
import { ReactElement } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Vodalink Telecom</title>
        <meta
          name="description"
          content="This is shop of vodalink telecom made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <Banner />
        <Products />
        <Feedback />
        <WhoWeAre />
        <Subscribe />
        <FAQ />
      </div>
    </>
  );
}

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <RootLayout>{page}</RootLayout>;
};
