export default interface BaseConfigApi {
  baseUrl: string;
  headers?: Array<Required<Headers>>;
  timeout?: number;
}

export interface Headers {
  key: string;
  value: string;
}