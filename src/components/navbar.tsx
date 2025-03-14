import Image from 'next/image';
import styles from './navbar.module.css';
import { usePathname } from 'next/navigation';
import mergeStrings from '@/util/mergeClassname';
import { BaseButton } from './base-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const handleClickMobile = () => {
    setIsOpen(false);
  }
  const handleClickMenuButton = () => {
    setIsOpen((prevState) => !prevState);
  }
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/logo-esdm.png"
          alt='header-logo-nidi-slo'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className={styles.menuList}>
        <Link style={{color: "white", textDecoration: "none"}} href="/">
          <div
            className={mergeStrings(
              styles.menuButton,
              pathname === '/' ? styles.activeMenu : ''
            )}
          >
            Beranda
          </div>
        </Link>
        <Link style={{color: "white", textDecoration: "none"}} href="/daftar-nidi-slo">
          <div
            className={mergeStrings(
              styles.menuButton,
              pathname === '/daftar-nidi-slo' ? styles.activeMenu : ''
            )}
          >
            Buat Permohonan
          </div>
        </Link>
        <Link style={{color: "white", textDecoration: "none"}} href="/daftar-harga-nidi-slo">
          <div
            className={mergeStrings(
              styles.menuButton,
              pathname === '/daftar-harga-nidi-slo' ? styles.activeMenu : ''
            )}
          >
            Tarif Nidi & Slo
          </div>
        </Link>
      </div>
      <div className={styles.menuButtonContainer}>
        <BaseButton
          onClick={() => handleClickMenuButton()}
          className={styles.menuButton}
        >
          <FontAwesomeIcon icon={faBars} className={styles.icon} />
        </BaseButton>
      </div>
      {
        isOpen && (
          <div className={styles.menuDropdown}>
            <Link style={{color: "white", textDecoration: "none"}} href="/">
              <div
                className={styles.dropdownMenu}
                onClick={() => handleClickMobile()}
              >
                Beranda
              </div>
            </Link>
            <Link style={{color: "white", textDecoration: "none"}} href="/daftar-nidi-slo">
              <div
                className={styles.dropdownMenu}
                onClick={() => handleClickMobile()}
              >
                Buat Permohonan
              </div>
            </Link>
            <Link style={{color: "white", textDecoration: "none"}} href="/daftar-harga-nidi-slo">
              <div
                className={styles.dropdownMenu}
                onClick={() => handleClickMobile()}
              >
                Tarif Nidi & Slo
              </div>
            </Link>
          </div>
        )
      }
    </div>
  )
}