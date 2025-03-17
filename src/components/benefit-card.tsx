import Image from 'next/image';
import styles from './benefit-card.module.css';
import React from 'react';
import { BaseButton } from './base-button';
import Link from 'next/link';

interface Props {
  imageUrl: string;
  title: string;
  content: string;
  isTerjangkau?: boolean;
}

export const BenefitCard: React.FC<Props> = (props) => {
  return(
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={props.imageUrl}
          alt={`nidi slo ${props.imageUrl}`}
          width={60}
          height={60}
        />
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.content}>{props.content}</div>
      {
        props.isTerjangkau ? (
          <Link href="/daftar-harga-nidi-slo">
            <BaseButton>
              <p>Cek Harga Kami</p>
            </BaseButton>
          </Link>
        ) : null
      }
    </div>
  )
}