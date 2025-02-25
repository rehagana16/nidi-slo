import React from 'react';
import styles from './base-button.module.css';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactElement | React.ReactElement[];
  onClick: () => void;
}

export const BaseButton: React.FC<Props> = (props) => {
  return(
    <button
      className={styles.buttonContainer}
      onClick={() => props.onClick()}
    >
      {props.children}
    </button>
  )
}