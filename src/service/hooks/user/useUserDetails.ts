import { useFetcher } from "../../utils/useFetcher";
import { FetcherResponse } from "../../types";
import { UserDetailsModel, UserModel } from "./types";

type UseUserDetailsType = (variables: {
 id?: UserModel["id"];
}) => FetcherResponse<UserDetailsModel, any>;

const useUserDetails: UseUserDetailsType = ({ id }) => {
 const requestHeaders = {
  "app-id": process.env.REACT_APP_DUMMYAPI_APP_ID as string,
 };

 return useFetcher({
  url: `https://dummyapi.io/data/v1/user/${id}`,
  requestHeaders,
 });
};

export default useUserDetails;
