import PageLayout from "@/components/pageLayout";
import { NextPageWithLayout } from "./_app";
import styles from './price-list.module.css';
import { PriceList } from "@/constants/price-list.constant";
import mergeStrings from "@/util/mergeClassname";
import Head from "next/head";

const PriceListPage: NextPageWithLayout = () => {
  return(
    <>
      <Head>
        <title>Tarif permohonan NIDI SLO Sumut</title>

        {/* Adding custom favicon */}
        <link rel="icon" href="/PLN-icon.png" />

        {/* Adding additional information about website */}
        <meta name="description"
            content="TARIF HARGA NIDI SLO PLN SUMUT" />
        <meta name="keywords"
            content="NIDI, SLO, NIDI SLO, Tarif NIDI SLO, Tarif NIDI SLO Sumut, Sumut, Sumatera Utara, Sumatra Utara ,Harga NIDI SLO, Harga NIDI SLO Sumut, Tarif NIDI SLO Sumatera Utara, Harga NIDI SLO Sumatera Utara" />
        <meta name="author"
            content="Rehagana Sembiring" />
        <meta name="viewport"
            content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>List Harga</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.row}>
              <th className={mergeStrings(styles.header, styles.cell)}>Daya</th>
              <th className={mergeStrings(styles.header, styles.cell)}>Biaya Supervisi NIDI</th>
              <th className={mergeStrings(styles.header, styles.cell)}>Biaya SLO</th>
              <th className={mergeStrings(styles.header, styles.cell)}>Jumlah</th>
            </tr>
            {PriceList.map((data, idx) => (
              <tr className={styles.row} key={idx}>
                <td className={styles.cell}>{data.daya}</td>
                <td className={styles.cell}>{data.biayaSupervisiNidi}</td>
                <td className={styles.cell}>{data.biayaSlo}</td>
                <td className={styles.cell}>{data.jumlah}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

PriceListPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <PageLayout>{page}</PageLayout>
  )
}

export default PriceListPage;