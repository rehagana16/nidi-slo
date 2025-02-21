import Image from 'next/image';
import styles from './supported-section.module.css';

export const SupportedSection = () => {
  return(
    <div className={styles.container}>
      <div>Supported By</div>
      <div className={styles.imageContainer}>
        <Image
          src={"/logo-esdm.png"}
          alt="logo-esdm"
          layout={'fill'}
          objectFit={'contain'}
        />
      </div>
    </div>
  )
}