import { UserCreationPayload } from "../../common/types";
import { fetcher } from "./fetcher";

const createNewUser = (variables: UserCreationPayload) => {
 const requestHeaders = {
  "app-id": process.env.REACT_APP_DUMMYAPI_APP_ID as string,
 };
 return fetcher({
  url: `https://dummyapi.io/data/v1/user/create`,
  method: "POST",
  variables: JSON.stringify(variables),
  requestHeaders,
 });
};

export default createNewUser;
