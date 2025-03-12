import PageLayout from "@/components/pageLayout";
import { HeroSection } from "../components/hero-section";
import { OrderStepSection } from "../components/order-step-section";
import { OurProductSection } from "../components/our-product-section";
import { SupportedSection } from "../components/supported-section";
import { WhyUsSection } from "../components/why-us-section";
import styles from "./index.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daftar NIDI SLO SUMUT - NIDI - PLN</title>

        {/* Adding custom favicon */}
        <link rel="icon" href="/PLN-icon.png" />

        {/* Adding additional information about website */}
        <meta name="description"
            content="NIDI SLO PLN SUMUT" />
        <meta name="keywords"
            content="NIDI, SLO, NIDI SLO, Daftar NIDI SLO, Daftar NIDI SLO Sumut, Sumut, Sumatera Utara, Sumatra Utara" />
        <meta name="author"
            content="Rehagana Sembiring" />
        <meta name="viewport"
            content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.globalStyle}>
        <HeroSection />
        <OurProductSection />
        <WhyUsSection />
        <OrderStepSection />
        <SupportedSection />
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <PageLayout>{page}</PageLayout>
  )
}

