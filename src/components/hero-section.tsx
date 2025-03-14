import Image from 'next/image';
import styles from './hero-section.module.css';
import { useRouter } from 'next/router';

export const HeroSection = () => {
  const router = useRouter();
  return (
    <div
      className={styles.container}
      onClick={() => {
        router.push('/daftar-nidi-slo')
      }}  
    >
      <Image
        src="/hero-image.png"
        alt="nidi-slo-hero-image"
        fill
        objectFit='contain'
      />
    </div>
  )
}