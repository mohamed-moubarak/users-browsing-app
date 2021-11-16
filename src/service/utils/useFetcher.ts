import useSWR, { SWRConfiguration } from "swr";
import { FetcherResponse } from "../types";
import { fetcher } from "./fetcher";

type UseFetcherParams<Data, Error> = {
  url: string;
  requestHeaders?: Record<string, string>;
  config?: SWRConfiguration<Data, Error>;
};

export function useFetcher<Data, Error = any>({
  url,
  requestHeaders,
  config,
}: UseFetcherParams<Data, Error>): FetcherResponse<Data, Error> {
  let key;
  if (url) {
    if (!requestHeaders) {
      key = [url, JSON.stringify(requestHeaders)];
    } else {
      key = [url];
    }
  } else {
    key = null;
  }

  const { data, error, ...rest } = useSWR<Data, Error>(
    key,
    () => fetcher({ url, requestHeaders }),
    { ...config }
  );

  return {
    data,
    error,
    isLoading: !!url && !data && !error,
    ...rest,
  };
}
