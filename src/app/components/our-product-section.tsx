import styles from './our-product-section.module.css';
import baseStyle from './base-section-style.module.css';
import mergeStrings from '@/util/mergeClassname';
import { ProductCard } from './product-card';

// TODO: 
// 1. Create definition of nidi and slo with image example
// 2. Create card that will redirect to form if pressed
export const OurProductSection = () => {
  return (
    <div className={baseStyle.container}>
      <div className={baseStyle.sectionHeader}>
        Produk Kami
      </div>
      <div className={baseStyle.horizontalDivider}/>
      <div className={styles.contentSection}>
        <div className={styles.leftContent}>
          <div className={styles.imageContainer} />
        </div>
        <div className={styles.rightContent}>
          <div className={styles.text}>
            <span className={styles.boldText}>NIDI (Nomor Identitas Instalasi Listrik)</span> merupakan nomor identitas yang dikeluarkan
            <span className={styles.boldText}> Kementerian ESDM</span> untuk instalasi listrik yang telah selesai
            dipasang atau dibangun oleh pelaku usaha jasa pembangunan dan pemasangan instalasi listrik yang memiliki
            perizinan berusaha di bidang ketenagalistrikan.
            Dalam NIDI berisi informasi lokasi dan tanggal selesai pemasangan instalasi listrik,
            informasi badan usaha pemasangan instalasi listrik, spesifikasi komponen terpasang, hingga gambar instalasi listrik.
          </div>
          <div className={styles.text}>
            <span className={styles.boldText}>SLO (Sertifikat Laik Operasi)</span> merupakan bukti pengakuan formal bahwa suatu instalasi tenaga listrik telah berfungsi
            sebagaimana kesesuaian persyaratan standar yang ditentukan bagi instalasi tersebut dan dinyatakan
            laik dioperasikan. 
          </div>
          <div className={mergeStrings(styles.text, styles.boldText)}>
            Kami merupakan salah satu badan usaha resmi yang menerbitkan NIDI dan SLO resmi yang bekerja sama dengan PLN dan ESDM.
            Kami melayani permintaan penerbitan NIDI dan SLO pada wilayah Sumatera Utara.
          </div>
        </div>
      </div>
      <div className={styles.productCardContainer}>
        <ProductCard
          imageUrl='/card-nidi-logo.png'
          title='Nomor Identitas Instalasi Listrik'
        />
        <ProductCard
          imageUrl='/card-slo-logo.png'
          title='Sertifikat Laik Operasi'
        />
      </div>
    </div>
  )
}