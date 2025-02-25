import Image from 'next/image';
import styles from './benefit-card.module.css';
import React from 'react';
import { BaseButton } from './base-button';
import { useRouter } from 'next/router';

interface Props {
  imageUrl: string;
  title: string;
  content: string;
  isTerjangkau?: boolean;
}

export const BenefitCard: React.FC<Props> = (props) => {
  const router = useRouter();
  return(
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={props.imageUrl}
          alt={`nidi-slo-${props.imageUrl}`}
          width={60}
          height={60}
        />
      </div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.content}>{props.content}</div>
      {
        props.isTerjangkau ? (
          <BaseButton
            onClick={() => {
              router.push('/price-list');
            }}
          >
            <p>Cek Harga Kami</p>
          </BaseButton>
        ) : null
      }
    </div>
  )
}