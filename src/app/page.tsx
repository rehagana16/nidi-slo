import { HeroSection } from "./components/hero-section";
import { SupportedSection } from "./components/supported-section";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <SupportedSection />
    </div>
  );
}
