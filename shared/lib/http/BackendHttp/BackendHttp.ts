import { Http, HttpAdapter } from "@/shared/model";

const BackendHttp = (httpAdapter: HttpAdapter): Http => {
  httpAdapter.setConfig({
    baseUrl: process.env.BACKEND_BASE_URL,
    headers: {
      "x-api-free": process.env.BACKEND_API_KEY ?? "",
    },
  });

  return httpAdapter;
};

export default BackendHttp;
