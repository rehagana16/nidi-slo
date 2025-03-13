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
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />

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