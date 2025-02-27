import Image from 'next/image';
import styles from './navbar.module.css';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import mergeStrings from '@/util/mergeClassname';
import { BaseButton } from './base-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = (url: string) => {
    router.push(url);
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
        <div
          className={mergeStrings(
            styles.menuButton,
            pathname === '/' ? styles.activeMenu : ''
          )}
          onClick={() => handleClick('/')}
        >
          Beranda
        </div>
        <div
          className={mergeStrings(
            styles.menuButton,
            pathname === '/order-form' ? styles.activeMenu : ''
          )}
          onClick={() => handleClick('/order-form')}
        >
          Buat Permohonan
        </div>
        <div
          className={mergeStrings(
            styles.menuButton,
            pathname === '/price-list' ? styles.activeMenu : ''
          )}
          onClick={() => handleClick('/price-list')}
        >
          Tarif Nidi & Slo
        </div>
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
            <div
              className={styles.dropdownMenu}
              onClick={() => handleClick('/')}
            >
              Beranda
            </div>
            <div
              className={styles.dropdownMenu}
              onClick={() => handleClick('/order-form')}
            >
              Buat Permohonan
            </div>
            <div
              className={styles.dropdownMenu}
              onClick={() => handleClick('/price-list')}
            >
              Tarif Nidi & Slo
            </div>
          </div>
        )
      }
    </div>
  )
}