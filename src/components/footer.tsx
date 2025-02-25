import styles from './footer.module.css';
import baseStyles from './base-section-style.module.css';
import mergeStrings from '@/util/mergeClassname';

export const Footer = () => {
  return(
    <div className={styles.container}>
      <div className={styles.footerHeader}>
        <div className={mergeStrings(baseStyles.sectionHeader, styles.whiteText)}>HUBUNGI KAMI</div>
        <div className={mergeStrings(baseStyles.horizontalDivider, styles.backgroundWhite)}/>
      </div>
      <div className={styles.content}>
        <div className={mergeStrings(styles.column, styles.left)}>
          <div className={styles.header}>
            LOKASI
          </div>
          <div className={styles.header}>
            KONTAK
          </div>
        </div>
        <div className={mergeStrings(styles.column, styles.right)}>
          <div className={styles.header}>
            KONTAK
          </div>
        </div>
      </div>
    </div>
  )
}