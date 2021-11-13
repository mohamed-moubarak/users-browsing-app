type FetcherArgs = {
  url: string;
  method?: string;
  variables?: string;
  requestHeaders?: Record<string, string>;
};

export async function fetcher({
  url,
  method,
  variables,
  requestHeaders,
}: FetcherArgs): Promise<any> {
  const response = await fetch(url, {
    ...(!!method && { method }),
    ...(!!variables && { body: variables }),
    ...((!!variables || !!requestHeaders) && {
      headers: {
        ...(!!variables && { "content-type": "application/json" }),
        ...requestHeaders,
      },
    }),
  });

  const data = await response.json();

  return data;
}
