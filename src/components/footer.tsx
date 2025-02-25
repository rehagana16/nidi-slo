import styles from './footer.module.css';

export const Footer = () => {
  return(
    <div className={styles.container}>
      <div className={styles.column}>
        <div className={styles.header}>
          NAMA PERUSAHAAN
        </div>
        {/* Change lorem ipsum later */}
        <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec elit id tellus tincidunt tempus eget eget elit. Nullam vitae ornare nibh. Sed tincidunt iaculis odio, tristique pellentesque risus iaculis eget. Integer sit amet tellus eu turpis sollicitudin auctor. Nulla commodo ligula vitae quam vehicula volutpat. Sed urna velit, eleifend.
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.header}>
          KONTAK
        </div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec elit id tellus tincidunt tempus eget eget elit. Nullam vitae ornare nibh. Sed tincidunt iaculis odio, tristique pellentesque risus iaculis eget. Integer sit amet tellus eu turpis sollicitudin auctor. Nulla commodo ligula vitae quam vehicula volutpat. Sed urna velit, eleifend.
      </div>
      <div className={styles.column}>
        <div className={styles.header}>
          ALAMAT
        </div>
      </div>
    </div>
  )
}