import styles from './our-product-section.module.css';
import baseStyle from './base-section-style.module.css';

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
    </div>
  )
}