import styles from './order-step-section.module.css'
import baseStyles from './base-section-style.module.css';
import Image from 'next/image';

// TODO: create diagram/flow on the step to order
export const OrderStepSection = () => {
  return (
    <div className={baseStyles.container}>
      <div className={baseStyles.sectionHeader}>Alur Permohonan</div>
      <div className={baseStyles.horizontalDivider}/>
      <div className={styles.imageContainer}>
        <Image
          src={"/order-process-diagram.png"}
          alt="nidi-slo-process-diagram"
          layout={'fill'}
          objectFit={'contain'}
        />
      </div>
    </div>
  )
}