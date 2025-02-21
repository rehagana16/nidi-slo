import Image from 'next/image';
import styles from './product-card.module.css'
import React from 'react';
import { BaseButton } from './base-button';

interface Props {
  imageUrl: string;
  title: string;
}
export const ProductCard: React.FC<Props> = (props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={props.imageUrl}
          alt='card-nidi-slo-logo'
          width={100}
          height={100}
        />
      </div>
      <div className={styles.title}>{props.title}</div>
      <BaseButton>
        <p>Buat Permohonan</p>
      </BaseButton>
    </div>
  )
}