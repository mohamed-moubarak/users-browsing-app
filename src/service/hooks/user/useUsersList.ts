import { useFetcher } from "../../utils/useFetcher";
import { FetcherResponse } from "../../types";
import { FetchUsersResponse } from "./types";

type UseUsersListType = (variables: {
  page?: number;
  limit?: number;
}) => FetcherResponse<FetchUsersResponse, any>;

const useUsersList: UseUsersListType = ({ page = 0, limit = 10 }) => {
    const requestHeaders = {'app-id' : process.env.REACT_APP_DUMMYAPI_APP_ID as string};
  return useFetcher({
    url: `https://dummyapi.io/data/v1/user?page=${page}&limit=${limit}`,
    requestHeaders
  });
};

export default useUsersList;
