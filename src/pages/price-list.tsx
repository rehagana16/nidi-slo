import PageLayout from "@/components/pageLayout";
import { NextPageWithLayout } from "./_app";
import styles from './price-list.module.css';
import { PriceList } from "@/constants/price-list.constant";
import mergeStrings from "@/util/mergeClassname";

const PriceListPage: NextPageWithLayout = () => {
  return(
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
  )
}

PriceListPage.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <PageLayout>{page}</PageLayout>
  )
}

export default PriceListPage;