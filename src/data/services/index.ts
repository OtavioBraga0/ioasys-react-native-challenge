import axios, {AxiosRequestConfig} from 'axios';
import {envs} from '../../presentation/utils/envs';

export interface Config extends AxiosRequestConfig {
  isLambda?: boolean;
}

export const initializeAxios = (): void => {
  axios.defaults.baseURL = envs.API_BASE_URL;
  axios.defaults.headers['Content-Type'] = 'application/json';
  axios.defaults.headers.Accept = 'application/json';
  axios.interceptors.request.use(async (config: Config): Promise<Config> => {
    const headers = {...config.headers};
    return {...config, headers};
  });
};
