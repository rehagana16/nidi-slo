import styles from './attention-section.module.css';

export const AttentionSection = () => {
  return(
    <div className={styles.container}>
      <div className={styles.header}>Perhatian !!!!</div>
      <div className={styles.contentBox}>
        <ol className={styles.contentBox}>
          <li>Dimohon untuk tidak mengisi data hanya untuk coba-coba (Spam = Blacklist Data).</li>
          <li>Pastikan data yang terisi terkirim ke WhatsApp</li>
          <li>Anda wajib melakukan pembayaran sebelum data diproses.</li>
          <li>Pastikan instalasi listrik dalam rumah telah / sedang dipasang.</li>
          <li>Kami tidak menerima permohonan jika instalasi listrik (Sekering, Lampu, Sakelar, dll) dalam rumah belum ada / bangunan belum ada. Terima Kasih.</li>
        </ol>
      </div>
    </div>
  )
}