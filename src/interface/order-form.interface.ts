export interface OrderFormData {
  name: string;
  identityNumber: string;
  phone: string;
  address: string;
  province: string;
  city: string;
  subdistrict: string;
  village: string;
  postal: string;
  purpose: string;
  lightSpot: number;
  switch: number;
  socket: number;
  power: string;
  isChecked: boolean;
}

export enum OrderFormDataMessageKeyEnum {
  name = 'Nama',
  identityNumber = 'NIK',
  phone = 'Nomor Telefon',
  address = 'Alamat',
  province = 'Provinsi',
  city = 'Kota',
  subdistrict = 'Kecamatan',
  village = 'Desa/Kelurahan',
  postal = 'Kode Pos',
  purpose = 'Peruntukan',
  lightSpot = 'Jumlah Titik Lampu',
  switch = 'Jumlah saklar',
  socket = 'Jumlah Stop Kontak',
  power = 'Daya(VA) PLN',
  isChecked = 'Sudah Check'
}