import styles from './footer.module.css';
import baseStyles from './base-section-style.module.css';
import mergeStrings from '@/util/mergeClassname';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';

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
          <div className={styles.horizontalDivider}/>
          <div className={styles.section}>
            <div>
              <FontAwesomeIcon icon={faLocationDot} className={styles.icon}/>
            </div>
            <div>
              <div>Kota Medan,</div>
              <div>Sumatera Utara</div>
            </div>
          </div>
          <div className={styles.header}>
            KONTAK
          </div>
          <div className={styles.horizontalDivider}/>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}>
            <div className={styles.section}>
              <div>
                <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
              </div>
              <div>
                081360889785
              </div>
            </div>
            <div className={styles.section}>
              <div>
                <FontAwesomeIcon icon={faMailBulk} className={styles.icon}/>
              </div>
              <div>
                nidisloinstalasilistriksumut@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className={mergeStrings(styles.column, styles.right)}>
        <div className={styles.header}>
            JAM OPERASIONAL
          </div>
          <div className={styles.horizontalDivider}/>
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}>
            <div className={styles.section}>
              <div>
                <FontAwesomeIcon icon={faClock} className={styles.icon}/>
              </div>
              <div>
                08.00 - 18.00 (Senin - Jumat)
              </div>
            </div>
            <div className={styles.section}>
              <div>
                <FontAwesomeIcon icon={faClock} className={styles.icon}/>
              </div>
              <div>
                09.00 - 17.00 (Sabtu - Minggu)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}