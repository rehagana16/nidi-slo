import Image from 'next/image';
import styles from './product-card.module.css'
import React from 'react';
import { BaseButton } from './base-button';
import Link from 'next/link';

interface Props {
  imageUrl1: string;
  imageUrl2: string;
  title: string;
}
export const ProductCard: React.FC<Props> = (props) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={props.imageUrl1}
          alt='nidi slo card logo'
          width={75}
          height={75}
        />
        <Image
          src={props.imageUrl2}
          alt='nidi slo card logo 2'
          width={75}
          height={75}
        />
      </div>
      <div className={styles.title}>{props.title}</div>
      <Link href="/daftar-nidi-slo">
        <BaseButton className={styles.button}>
          <p>Buat Permohonan</p>
        </BaseButton>
      </Link>
    </div>
  )
}