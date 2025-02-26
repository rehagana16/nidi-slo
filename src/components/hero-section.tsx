import Image from 'next/image';
import styles from './hero-section.module.css';

export const HeroSection = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/hero-image.png"
        alt="nidi-slo-hero-image"
        width={1320}
        height={720}
      />
    </div>
  )
}