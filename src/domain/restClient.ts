import { AxiosInstance } from "axios";
import BaseConfigApi from "./apiConfigTypes";

export default interface RestClient {
    config(baseConfig: BaseConfigApi | undefined): AxiosInstance
}