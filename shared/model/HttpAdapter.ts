import { Http } from "./Http";
import { HttpAdapterConfig } from "./HttpAdapterConfig";

export interface HttpAdapter extends Http {
  setConfig: (config: HttpAdapterConfig) => void;
}
