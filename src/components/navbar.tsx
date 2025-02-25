import Image from 'next/image';
import styles from './navbar.module.css';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import mergeStrings from '@/util/mergeClassname';

export const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const handleClick = (url: string) => {
    router.push(url);
  }
  return (
    <div className={styles.container}>
      <div>
        <Image
          src="/logo-esdm.png"
          alt='header-logo-nidi-slo'
          width={200}
          height={75}
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
    </div>
  )
}