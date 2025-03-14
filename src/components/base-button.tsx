import React from 'react';
import styles from './base-button.module.css';
import mergeStrings from '@/util/mergeClassname';

interface Props extends React.HTMLProps<HTMLButtonElement> {
  children: React.ReactElement | React.ReactElement[];
  onClick?: () => void;
}

export const BaseButton: React.FC<Props> = (props) => {
  return(
    <button
      className={mergeStrings(styles.buttonContainer, props.className ?? '')}
      onClick={() => {
        if (props.onClick) {
          return props.onClick();
        }
      }}
    >
      {props.children}
    </button>
  )
}