import { Http, HttpAdapter } from "@/shared/model";

const BackendHttp = (httpAdapter: HttpAdapter): Http => {
  httpAdapter.setConfig({
    baseUrl: process.env.NEXT_PUBLIC_BACKEND_URL ?? "",
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_BACKEND_API_KEY ?? "",
    },
  });

  return httpAdapter;
};

export default BackendHttp;
