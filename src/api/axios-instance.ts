import axios from "axios";

export const APIWilayahInstance = axios.create({
  baseURL: 'https://rehagana16.github.io/api-wilayah-indonesia/api/',
  timeout: 5000,
})