import { Location } from "./types";

export const formatDate = (date: string): string =>
 new Date(date).toLocaleString("en", {
  day: "2-digit",
  month: "long",
  year: "numeric",
 });

export const formatAddress = (location: Location): string => {
 const { timezone, ...addressDetails } = location;
 let address = "";
 const locationValues = Object.values(addressDetails);
 locationValues.forEach((val, index) => {
  address += val
   ? `${val}${index < locationValues.length - 1 ? ", " : ""}`
   : "";
 });

 return address;
};
