import React from "react"
import { NextPageWithLayout } from "./_app"
import PageLayout from "@/components/pageLayout"
import styles from './order-form.module.css';
import { useForm } from "react-hook-form";

const FORM_DEFAULT_VALUE = {
  name: "",
  identityNumber: "",
  phone: "",
  address: "",
  province: "Sumatera utara",
  city: "",
  subdistrict: "",
  village: "",
  postal: "",
  purpose: "",
  lightSpot: 0,
  switch: 0,
  socket: 0,
  power: "",
}

const OrderForm: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm({
    defaultValues: FORM_DEFAULT_VALUE,
  });
  return(
    <div className={styles.container}>
      <div className={styles.title}>Formulir Permohonan</div>
      <div style={{width: '100%'}}>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className={styles.formContainer}
        >
          <div className={styles.inputWrapper}>
            <label className={styles.label}>Nama Pemohon(mis: Nama pribadi, instansi, perusahaan atau sekolah)</label>
            <input className={styles.input} {...register("name", { required: true })} />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>NIK</label>
            <input className={styles.input} {...register("identityNumber", { required: true })} />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>No. Telepon</label>
            <input className={styles.input} {...register("phone", { required: true })} />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Alamat</label>
            <input className={styles.input} {...register("address", { required: true })} />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Provinsi</label>
            <input className={styles.input} {...register("province", { required: true })} disabled />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Kota</label>
            <input className={styles.input} {...register("city", { required: true })} />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Kecamatan</label>
            <input className={styles.input} {...register("subdistrict", { required: true })} />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Kelurahan/Desa</label>
            <input className={styles.input} {...register("village", { required: true })} />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Kode Pos</label>
            <input className={styles.input} {...register("postal", { required: true })} />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Peruntukan</label>
            <select className={styles.input} {...register("purpose", { required: true })}>
              <option>Option 1</option>
            </select>
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Jumlah Titik Lampu</label>
            <input className={styles.input} {...register("lightSpot", { required: true })} type="number" />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Jumlah Saklar</label>
            <input className={styles.input} {...register("switch", { required: true })} type="number" />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Jumlah Stop Kontak</label>
            <input className={styles.input} {...register("socket", { required: true })} type="number" />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Daya PLN(VA)</label>
            <select className={styles.input} {...register("power", { required: true })}>
              <option>Option 1</option>
            </select>
          </div>

          <input type="submit" className={styles.submitButton}/>
        </form>
      </div>
    </div>
  )
}

OrderForm.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <PageLayout>{page}</PageLayout>
  )
}

export default OrderForm;

