import { HeroSection } from "./components/hero-section";
import { OrderStepSection } from "./components/order-step-section";
import { OurProductSection } from "./components/our-product-section";
import { SupportedSection } from "./components/supported-section";
import { WhyUsSection } from "./components/why-us-section";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.globalStyle}>
      <HeroSection />
      <SupportedSection />
      <OurProductSection />
      <WhyUsSection />
      <OrderStepSection />
    </div>
  );
}
