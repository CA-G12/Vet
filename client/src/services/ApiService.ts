import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

import JwtService from './JwtService';

export default class ApiServices {
<<<<<<< HEAD
  private static axios: AxiosInstance | null;

  public static init():void {
    this.axios = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        Authorization: `Bearer ${JwtService.getToken()}`,
        accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
=======
  private static axios = axios;

  public static init():void {
    this.axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  }

  public static setHeader() {
    this.axios.defaults.headers.common.Authorization = `Bearer ${JwtService.getToken()}`;
    this.axios.defaults.headers.common.Accept = 'application/json';
    this.axios.defaults.headers.common['Content-Type'] = 'application/json';
>>>>>>> 67f9c495aa881b936470eddf7e47c3d357884c6f
  }

  public static get(endPoint:string, config?:AxiosRequestConfig):Promise<AxiosResponse> {
    if (!this.axios) throw new Error('Axios instance not initialized');
    return this.axios.get(endPoint, config);
  }

  public static post(
    endPoint:string,
    body:any,
    config?:AxiosRequestConfig,
  ):Promise<AxiosResponse> {
    if (!this.axios) throw new Error('Axios instance not initialized');
    return this.axios.post(endPoint, body, config);
  }

  public static put(
    endPoint:string,
    body:any,
    config?:AxiosRequestConfig,
  ):Promise<AxiosResponse> {
    if (!this.axios) throw new Error('Axios instance not initialized');
    return this.axios.put(endPoint, body, config);
  }

  public static destroy(
    endPoint:string,
    config?:AxiosRequestConfig,
  ):Promise<AxiosResponse> {
    if (!this.axios) throw new Error('Axios instance not initialized');
    return this.axios.delete(endPoint, config);
  }
}
