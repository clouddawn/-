import axios from "axios";

const instance = axios.create({
  baseURL: "",
  timeout: 60000
});

instance.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return axios.isCancel(err)
      ? Promise.resolve({ data: {} })
      : Promise.reject(err);
  }
);

const request = (
  url: string,
  method: string,
  submitData: any = {},
  signal?: any
) => {
  return instance({
    url,
    method,
    [method.toLowerCase() === "get" ? "params" : "data"]: submitData,
    signal
  });
};
request.get = (url: string, submitData: any = {}) => {
  return request(url, "get", submitData);
};
request.post = (url: string, submitData: any = {}) => {
  return request(url, "post", submitData);
};
export default request;
