import styles from './navbar.module.css';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        Logo
      </div>
      <div className={styles.menuList}>
        <div className={styles.menuButton}>Beranda</div>
        <div className={styles.menuButton}>Buat Permohonan</div>
        <div className={styles.menuButton}>Tarif Nidi & Slo</div>
      </div>
    </div>
  )
}