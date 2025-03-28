import Image from 'next/image';
import baseStyle from './base-section-style.module.css';
import styles from './supported-section.module.css';
import mergeStrings from '@/util/mergeClassname';

export const SupportedSection = () => {
  return(
    <div className={mergeStrings(baseStyle.container, styles.colorBackground)}>
      <div className={baseStyle.sectionHeader}>
        Bekerja sama dengan
      </div>
      <div className={baseStyle.horizontalDivider}/>
      <div className={styles.imageContainer}>
        <Image
          src={"/logo-esdm.png"}
          alt="nidi slo logo supported"
          layout={'fill'}
          objectFit={'contain'}
        />
      </div>
    </div>
  )
}