import { HttpAdapter } from "@/shared/model";
import axios from "axios";

const AxiosAdapter = (): HttpAdapter => {
  const _axios = axios.create();

  let baseHeaders: Record<string, string> = {};
  let baseParams: Record<string, string> = {};

  return {
    setConfig(config) {
      if (config.baseUrl) {
        _axios.defaults.baseURL = config.baseUrl;
      }
      if (config.headers) {
        baseHeaders = config.headers;
      }
      if (config.params) {
        baseParams = config.params;
      }
    },
    delete(path, params = {}, headers = {}) {
      return _axios.delete(path, {
        params: { ...params, ...baseParams },
        headers: { ...headers, ...baseHeaders },
      });
    },
    get(path, params, headers) {
      return _axios.get(path, {
        params: { ...params, ...baseParams },
        headers: { ...headers, ...baseHeaders },
      });
    },
    patch(path, body, params, headers) {
      return _axios.patch(path, body, {
        params: { ...params, ...baseParams },
        headers: { ...headers, ...baseHeaders },
      });
    },
    post(path, body, params, headers) {
      return _axios.patch(path, body, {
        params: { ...params, ...baseParams },
        headers: { ...headers, ...baseHeaders },
      });
    },
    put(path, body, params, headers) {
      return _axios.patch(path, body, {
        params: { ...params, ...baseParams },
        headers: { ...headers, ...baseHeaders },
      });
    },
  };
};

export default AxiosAdapter;
