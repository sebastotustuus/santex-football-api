import axios, { AxiosInstance } from "axios";
import BaseConfigApi, { Headers } from "../../../domain/apiConfigTypes";
import { Service } from "typedi";
import RestClient from "../../../domain/restClient";

@Service()
export default class AxiosClient implements RestClient {
  public config(baseConfig: BaseConfigApi | undefined): AxiosInstance {
    
    return axios.create({
      baseURL: baseConfig?.baseUrl,
      ...(baseConfig?.headers
        ? {
            headers: baseConfig?.headers.reduce(
              (accum: Record<string, string>, header: Required<Headers>) => {
                accum = { ...accum, [header.key]: header.value };
                return accum;
              },
              {}
            ),
          }
        : {}),
      timeout: baseConfig?.timeout || 11000,
    });
  }
}
