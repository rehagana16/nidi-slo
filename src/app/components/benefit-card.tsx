import Image from 'next/image';
import styles from './benefit-card.module.css';
import React from 'react';

interface Props {
  imageUrl: string;
  title: string;
  content: string;
}

export const BenefitCard: React.FC<Props> = (props) => {
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
    </div>
  )
}