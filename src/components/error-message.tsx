import React from "react";
import styles from './error-message.module.css';

interface Props {
  message?: string;
}

export const ErrorMessage:React.FC<Props> = (props) => {
  return(
    <div className={styles.errorMessage}>{props.message}</div>
  )
}