import React from "react"
import { NextPageWithLayout } from "./_app"
import PageLayout from "@/components/pageLayout"
import styles from './order-form.module.css';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@/components/error-message";

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
            <input
              className={styles.input}
              {...register("name", { required: "Nama tidak boleh kosong." })}
              aria-invalid={errors.name ? "true" : "false"}  
            />
            {errors.name ? <ErrorMessage message={errors.name.message}/> : null}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>NIK</label>
            <input
              className={styles.input}
              {...register("identityNumber", {
                required: "NIK tidak boleh kosong.",
                pattern: {
                  value: /^\d{16}$/,
                  message: "NIK harus angka (16 digit)."
                },
              })}
            />
            {errors.identityNumber ? <ErrorMessage message={errors.identityNumber.message}/> : null}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>No. Telepon</label>
            <input className={styles.input} {...register("phone", {
                required: "Nomor telepon",
                pattern: {
                  value: /\d+/,
                  message: "Nomor telepon harus angka."
                },
              })}
            />
            {errors.phone ? <ErrorMessage message={errors.phone.message}/> : null}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Alamat</label>
            <input className={styles.input} {...register("address", { required: "Alamat tidak boleh kosong" })} />
            {errors.address ? <ErrorMessage message={errors.address.message}/> : null}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Provinsi</label>
            <input className={styles.input} {...register("province", { required: true })} disabled />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Kota</label>
            <input className={styles.input} {...register("city", { required: "Kota tidak boleh kosong" })} />
            {errors.city ? <ErrorMessage message={errors.city.message}/> : null}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Kecamatan</label>
            <input className={styles.input} {...register("subdistrict", { required: "Kecamatan tidak boleh kosong" })} />
            {errors.subdistrict ? <ErrorMessage message={errors.subdistrict.message}/> : null}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Kelurahan/Desa</label>
            <input className={styles.input} {...register("village", { required: "Kelurahan/Desa tidak boleh kosong" })} />
            {errors.village ? <ErrorMessage message={errors.village.message}/> : null}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Kode Pos</label>
            <input className={styles.input} {...register("postal", { required: "Kode Pos tidak boleh kosong" })} />
            {errors.postal ? <ErrorMessage message={errors.postal.message}/> : null}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Peruntukan</label>
            <select className={styles.input} {...register("purpose", { required: "Peruntukan tidak boleh kosong" })}>
              <option>Option 1</option>
            </select>
            {errors.purpose ? <ErrorMessage message={errors.purpose.message}/> : null}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Jumlah Titik Lampu</label>
            <input className={styles.input} {...register("lightSpot", { required: "Jumlah titik lampu tidak boleh kosong" })} type="number" />
            {errors.lightSpot ? <ErrorMessage message={errors.lightSpot.message}/> : null}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Jumlah Saklar</label>
            <input className={styles.input} {...register("switch", { required: "Jumlah saklar tidak boleh kosong" })} type="number" />
            {errors.switch ? <ErrorMessage message={errors.switch.message}/> : null}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Jumlah Stop Kontak</label>
            <input className={styles.input} {...register("socket", { required: "Jumlah stop kontak tidak boleh kosong" })} type="number" />
            {errors.socket ? <ErrorMessage message={errors.socket.message}/> : null}
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.label}>Daya PLN(VA)</label>
            <select className={styles.input} {...register("power", { required: "Daya PLN(VA) harus dipilih" })}>
              <option>Option 1</option>
            </select>
            {errors.power ? <ErrorMessage message={errors.power.message}/> : null}
          </div>

          <input
            type="submit"
            className={styles.submitButton}
          />
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

