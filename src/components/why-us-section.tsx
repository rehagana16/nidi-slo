import styles from './why-us-section.module.css'
import baseStyles from './base-section-style.module.css';
import mergeStrings from '@/util/mergeClassname';
import { BenefitCard } from './benefit-card';


export const WhyUsSection = () => {
  return (
    <div className={mergeStrings(baseStyles.container, styles.redBackground)}>
      <div className={mergeStrings(baseStyles.sectionHeader, styles.whiteText)}>
        Mengapa Harus Kami?
      </div>
      <div className={mergeStrings(baseStyles.horizontalDivider, styles.whiteBackground)} />
      <div className={styles.cardSection}>
        <BenefitCard
          imageUrl='/authentic-icon.png'
          title='Terpercaya'
          content='Sudah mengeluarkan 2000 NIDI SLO/bulan'
        />
        <BenefitCard
          imageUrl='/cheap-icon.png'
          title='Terjangkau'
          content='Memberikan harga yang terjangkau'
          isTerjangkau
        />
        <BenefitCard
          imageUrl='/fast-icon.png'
          title='Cepat'
          content='Mengeluarkan 500 sertifikat/minggu'
        />
      </div>
    </div>
  )
}