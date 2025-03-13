import React, { useEffect, useState } from "react"
import { NextPageWithLayout } from "./_app"
import PageLayout from "@/components/pageLayout"
import styles from './order-form.module.css';
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@/components/error-message";
import { PriceList } from "@/constants/price-list.constant";
import { ConvertPriceDataToString } from "@/util/convert-price-data-to-string";
import { OrderFormData, OrderFormDataMessageKeyEnum } from "@/interface/order-form.interface";
import { encodeOrderFormDataToURI } from "@/util/encode-form-to-uri";
import { dataDesaResponse, dataKabupatenResponse, dataKecamatanResponse } from "@/interface/api-wilayah.interface";
import { apiGetWilayahIndonesia } from "@/api/api-wilayah-indonesia";
import { AttentionSection } from "@/components/attention-section";
import Head from "next/head";

const FORM_DEFAULT_VALUE: OrderFormData = {
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
  isChecked: false,
}

const OrderForm: NextPageWithLayout = () => {
  const [dataKabupatenKota, setDataKabupatenKota] = useState<dataKabupatenResponse[]>([]);
  const [regencyId, setRegencyId] = useState<string>('');
  const [dataKecamatan, setDataKecamatan] = useState<dataKecamatanResponse[]>([]);
  const [districtId, setDistrictId] = useState<string>('');
  const [dataDesa, setDataDesa] = useState<dataDesaResponse[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: FORM_DEFAULT_VALUE,
  });

  useEffect(() => {
    // Define an async function inside the useEffect
    const fetchData = async () => {
      try {
        const response = await apiGetWilayahIndonesia.getKabupatenKota();
        if (!response) {
          throw new Error('Failed to get data kabupaten');
        }
        setDataKabupatenKota(response.data);
      } catch (error) {
        alert(error)
      }
    };

    // Call the async function
    fetchData();

  }, [])

  useEffect(() => {
    // Define an async function inside the useEffect
    const fetchData = async () => {
      try {
        const response = await apiGetWilayahIndonesia.getKecamatan(regencyId);
        if (!response) {
          throw new Error('Failed to get data kabupaten');
        }
        setDataKecamatan(response.data);
      } catch (error) {
        alert(error)
      }
    };

    // Call the async function
    if (regencyId !== '') {
      fetchData();
    }

  }, [regencyId]);

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegencyId(e.target.value);
  }

  useEffect(() => {
    // Define an async function inside the useEffect
    const fetchData = async () => {
      try {
        const response = await apiGetWilayahIndonesia.getDesa(districtId);
        if (!response) {
          throw new Error('Failed to get data desa');
        }
        setDataDesa(response.data);
      } catch (error) {
        alert(error)
      }
    };

    // Call the async function
    if (districtId !== '') {
      fetchData();
    }

  }, [districtId]);

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDistrictId(e.target.value);
  }

  const getCityName = async (id: string) => {
    if (id !== '') {
      try {
        const response = await apiGetWilayahIndonesia.getKabupatenKotaData(id);
        if (!response) {
          throw new Error('Failed to get data kota');
        }
        return response.data.name;
      } catch (error) {
        alert(error)
      }
    }
  }

  const getDistrictName = async (id: string) => {
    if (id !== '') {
      try {
        const response = await apiGetWilayahIndonesia.getKecamatanData(id);
        if (!response) {
          throw new Error('Failed to get data kota');
        }
        return response.data.name;
      } catch (error) {
        alert(error)
      }
    }
  }

  const getVillageName = async (id: string) => {
    if (id !== '') {
      try {
        const response = await apiGetWilayahIndonesia.getDesaData(id);
        if (!response) {
          throw new Error('Failed to get data kota');
        }
        return response.data.name;
      } catch (error) {
        alert(error)
      }
    }
  }

  return(
    <>
      <Head>
        <title>Buat permohonan NIDI SLO Anda</title>

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
            content="NIDI SLO PLN SUMUT" />
        <meta name="keywords"
            content="NIDI, SLO, NIDI SLO, Daftar NIDI SLO, Daftar NIDI SLO Sumut, Sumut, Sumatera Utara, Sumatra Utara, Permohonan NIDI SLO, Permohonan NIDI SLO Sumut, Permohonan NIDI SLO Sumatera Utara" />
        <meta name="author"
            content="Rehagana Sembiring" />
        <meta name="viewport"
            content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={styles.container}>
        <AttentionSection />
        <div className={styles.title}>Formulir Permohonan</div>
        <div style={{width: '100%'}}>
          <form
            onSubmit={handleSubmit(async (data) => {
              data.city = await getCityName(data.city);
              data.subdistrict = await getDistrictName(data.subdistrict);
              data.village = await getVillageName(data.village);
              window.open(`https://api.whatsapp.com/send?phone=+6281360889785&text=${encodeURIComponent('Halo saya ingin melakukan permohonan NIDI dan SLO!')}%0A%0A${encodeOrderFormDataToURI(data, OrderFormDataMessageKeyEnum)})}`)
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
              <select
                className={styles.input}
                {...register("city", { required: "Kabupaten/kota tidak boleh kosong" })}
                onChange={handleCityChange}  
              >
                {
                  dataKabupatenKota.map((data, idx) => (
                    <option key={idx} value={data.id}>{data.name}</option>
                  ))
                }
              </select>
              {errors.city ? <ErrorMessage message={errors.city.message}/> : null}
            </div>

            <div className={styles.inputWrapper}>
              <label className={styles.label}>Kecamatan</label>
              <select
                className={styles.input}
                {...register("subdistrict", { required: "Kecamatan tidak boleh kosong" })}
                onChange={handleDistrictChange}
              >
                {
                  dataKecamatan.map((data, idx) => (
                    <option key={idx} value={data.id}>{data.name}</option>
                  ))
                }
              </select>
              {errors.subdistrict ? <ErrorMessage message={errors.subdistrict.message}/> : null}
            </div>

            <div className={styles.inputWrapper}>
              <label className={styles.label}>Kelurahan/Desa</label>
              <select
                className={styles.input}
                {...register("village", { required: "Desa/kelurahan tidak boleh kosong" })}
              >
                {
                  dataDesa.map((data, idx) => (
                    <option key={idx} value={data.id}>{data.name}</option>
                  ))
                }
              </select>
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
                <option>Rumah Tangga</option>
                <option>Bisnis</option>
                <option>Kesehatan</option>
                <option>Industri</option>
                <option>Sekolah</option>
                <option>Rumah Ibadah</option>
                <option>Kantor</option>
                <option>Pusat Perbelanjaan</option>
                <option>Lainnya</option>
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
                {
                  PriceList.map((data, idx) => <option key={idx}>{ConvertPriceDataToString(data)}</option>)
                }
              </select>
              {errors.power ? <ErrorMessage message={errors.power.message}/> : null}
            </div>

            <div className={styles.inputWrapper}>
              <label className={styles.label}>Pernyataan</label>
              <div className={styles.checkboxWrapper}>
                <input className={styles.input} {...register("isChecked", { required: "Pernyataan harus diisi" })} type="checkbox" />
                <div className={styles.justify}>
                  Dengan ini menyatakan bahwa instalasi pemanfaatan tenaga listrik tegangan rendah dengan data diatas TELAH TERPASANG OLEH PEMILIK SESUAI DENGAN STANDAR. Segala resiko yang timbul dari instalasi tersebut merupakan tanggung jawab pemilik instalasi sepenuhnya.
                </div>
              </div>
              {errors.socket ? <ErrorMessage message={errors.socket.message}/> : null}
            </div>

            <input
              type="submit"
              className={styles.submitButton}
            />
          </form>
        </div>
      </div>
    </>
  )
}

OrderForm.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <PageLayout>{page}</PageLayout>
  )
}

export default OrderForm;

