import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import JwtService from './JwtService';

export default class ApiServices {
    private static axios = axios;

    public static init():void {
      this.axios.defaults.baseURL = process.env.BASE_URL;
    }

    public static setHeader(): void {
      this.axios.defaults.headers.common.Authorization = `Bearer ${JwtService.getToken()}`;
      this.axios.defaults.headers.common.Accept = 'application/json';
      this.axios.defaults.headers.common['Content-Type'] = 'application/json';
    }

    public static get(endPoint:string, config?:AxiosRequestConfig):Promise<AxiosResponse> {
      return this.axios.get(endPoint, config);
    }

    public static post(
      endPoint:string,
      body:any,
      config?:AxiosRequestConfig,
    ):Promise<AxiosResponse> {
      return this.axios.post(endPoint, body, config);
    }

    public static put(
      endPoint:string,
      body:any,
      config?:AxiosRequestConfig,
    ):Promise<AxiosResponse> {
      return this.axios.put(endPoint, body, config);
    }

    public static destroy(
      endPoint:string,
      config?:AxiosRequestConfig,
    ):Promise<AxiosResponse> {
      return this.axios.delete(endPoint, config);
    }
}
