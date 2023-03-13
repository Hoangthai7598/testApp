import {ResponseType} from './model/ApiResponse';
const BASE_URL_DEV = 'https://wookie.codesubmit.io/';

const createAPI = () => {
  const APIInstant = require('axios').default.create();
  APIInstant.defaults.baseURL = BASE_URL_DEV;
  APIInstant.defaults.timeout = 5000;
  APIInstant.defaults.headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer Wookie2019',
  };

  APIInstant.interceptors.response.use(async (response: ResponseType<any>) => {
    const data = response;
    if (data && data?.status === 401) {
    } else if (data && data?.status === 403) {
    } else if (data && data.status !== 200) {
    }
    return response;
  });
  return APIInstant;
};

const axiosClient = createAPI();

function handleResult<T>(api: any) {
  return api
    .then((res: any) => {
      return handleResponse<T>(res);
    })
    .catch(async (error: any) => {
      if (error && error?.response?.status === 401) {
      }
      return handleResponse<T>(error);
    });
}

function handleResponse<T>(data: ResponseType<T>) {
  if (data.status !== 200) {
    return Promise.reject(data);
  }
  return Promise.resolve(data);
}

export const ApiClient = {
  get: (url: string, payload: Object) =>
    handleResult(axiosClient.get(url, payload)),
  post: (url: string, payload: object) =>
    handleResult(axiosClient.post(url, payload)),
  put: (url: string, payload: object) =>
    handleResult(axiosClient.put(url, payload)),
  path: (url: string, payload: object) =>
    handleResult(axiosClient.patch(url, payload)),
  delete: (url: string, payload: object) =>
    handleResult(axiosClient.delete(url, {data: payload})),
};
