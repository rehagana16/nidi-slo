import { AxiosInstance } from "axios";
import { APIWilayahInstance } from "./axios-instance";

class ApiGetWilayahIndonesia {
  private api: AxiosInstance;

  constructor() {
    this.api = APIWilayahInstance;
  }

  async getKabupatenKota() {
    return this.api.get(`regencies/12.json`);
  }

  async getKecamatan(regencyId: string) {
    return this.api.get(`districts/${regencyId}.json`);
  }

  async getDesa(districtId: string) {
    return this.api.get(`villages/${districtId}.json`);
  }
}

export const apiGetWilayahIndonesia = new ApiGetWilayahIndonesia();