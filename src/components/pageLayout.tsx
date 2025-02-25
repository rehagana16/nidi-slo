import React, { ReactElement } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import styles from './pageLayout.module.css';

interface Props {
  children: ReactElement;
}


export default function PageLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main className={styles.layout}>{children}</main>
      <Footer />
    </>
  )
}