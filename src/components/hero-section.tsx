import Image from 'next/image';
import styles from './hero-section.module.css';
import Link from 'next/link';

export const HeroSection = () => {
  return (
    <Link href={'/daftar-nidi-slo'}>
      <div
        className={styles.container}
      >
        <Image
          src="/hero-image.png"
          alt="nidi slo hero image"
          fill
          objectFit='contain'
        />
      </div>
    </Link>
  )
}