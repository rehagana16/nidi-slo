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
      <div>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
          className={styles.formContainer}
        >
          <label>Nama Pemohon(mis: Nama pribadi, instansi, perusahaan atau sekolah)</label>
          <input {...register("name", { required: true })} />



          <input type="submit" />
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

