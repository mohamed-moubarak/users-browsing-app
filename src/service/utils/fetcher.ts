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
 try {
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
  if (!response.ok) {
   throw new Error(`Error, status: ${response?.body}`);
  }
  const data = await response.json();
  return data;
 } catch (e) {
  console.log(e);
 }
}
