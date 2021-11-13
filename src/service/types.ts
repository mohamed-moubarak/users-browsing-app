import { SWRResponse } from "swr";

export type FetcherResponse<Data, Error> = SWRResponse<Data, Error> & {
  isLoading: boolean;
};
