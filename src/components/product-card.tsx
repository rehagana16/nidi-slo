import Image from 'next/image';
import styles from './product-card.module.css'
import React from 'react';
import { BaseButton } from './base-button';
import { useRouter } from 'next/router';

interface Props {
  imageUrl1: string;
  imageUrl2: string;
  title: string;
}
export const ProductCard: React.FC<Props> = (props) => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/order-form');
  }
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={props.imageUrl1}
          alt='card-nidi-slo-logo'
          width={75}
          height={75}
        />
        <Image
          src={props.imageUrl2}
          alt='card-nidi-slo-logo'
          width={75}
          height={75}
        />
      </div>
      <div className={styles.title}>{props.title}</div>
      <BaseButton className={styles.button} onClick={handleClick}>
        <p>Buat Permohonan</p>
      </BaseButton>
    </div>
  )
}