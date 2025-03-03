import styles from './our-product-section.module.css';
import baseStyle from './base-section-style.module.css';
import { ProductCard } from './product-card';
import Image from 'next/image';

export const OurProductSection = () => {
  return (
    <div className={baseStyle.container}>
      <div className={baseStyle.sectionHeader}>
        Produk Kami
      </div>
      <div className={baseStyle.horizontalDivider}/>
      <div className={styles.contentSection}>
        <div className={styles.leftContent}>
          <Image
            src="/nidi-slo-example.png"
            alt="Nidi slo example image"
            width={300}
            height={200}
          />
        </div>
        <div className={styles.rightContent}>
          <div className={styles.text}>
            Kami merupakan salah satu <span className={styles.boldText}>badan usaha resmi yang menerbitkan NIDI dan SLO resmi</span> yang bekerja sama dengan 
            <span className={styles.boldText}> PLN dan ESDM.</span> Kami melayani permintaan penerbitan NIDI dan SLO pada <span className={styles.boldText}>wilayah Sumatera Utara.</span>
          </div>
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
        </div>
      </div>
      <div className={styles.productCardContainer}>
        <ProductCard
          imageUrl1='/card-nidi-logo.png'
          imageUrl2='/card-slo-logo.png'
          title='Isi data permohonan NIDI dan SLO anda'
        />
      </div>
    </div>
  )
}