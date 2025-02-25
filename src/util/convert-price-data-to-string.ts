import { PriceData } from "@/interface/price-data.interface";

export const ConvertPriceDataToString = (data: PriceData) => {
  return `${data.daya} - (NIDI: ${data.biayaSupervisiNidi} + SLO: ${data.biayaSlo}) = ${data.jumlah}`
}