import React, { useEffect, useState } from "react";
import { Avatar, Breadcrumbs, Card, CardContent, Link, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { useUserDetails } from "../../service/hooks/user";
import { UserModel, UserDetailsModel } from "../../service/hooks/user/types";
import { StyledPageWrapper } from "./../../common/styles";
import { CapitalizedTypography } from "./style";
import { Location } from "../../common/types";

const UserDetailsPage: React.FC<Partial<UserModel>> = () => {
 let { userId } = useParams();
 const [userDetails, setUserDetails] = useState<UserDetailsModel>();

 const { data, isLoading } = useUserDetails({ id: userId });

 useEffect(() => {
  setUserDetails(data);
 }, [data]);

 const {
  title,
  firstName,
  lastName,
  gender,
  email,
  dateOfBirth,
  registerDate,
  phone,
  picture,
  location,
 } = userDetails || {};

 const formattedDateOfBirth =
  dateOfBirth &&
  new Date(dateOfBirth).toLocaleString("en", {
   day: "2-digit",
   month: "long",
   year: "numeric",
  });

 const formattedRegisterDate =
  registerDate &&
  new Date(registerDate).toLocaleString("en", {
   day: "2-digit",
   month: "long",
   year: "numeric",
  });

 const formatAddress = (location: Location) => {
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

 const formattedAddress = location && formatAddress(location);

 return (
  <StyledPageWrapper>
   <Breadcrumbs aria-label="breadcrumb">
    <Link underline="hover" color="inherit" href="/">
     Users
    </Link>
    <Typography color="text.primary">User Details {lastName && `- ${lastName}`}</Typography>
   </Breadcrumbs>

   <Card variant="outlined" sx={{ padding: 2 }}>
    <Avatar
     src={picture}
     aria-label="user-picture"
     sx={{ width: 72, height: 72, marginLeft: "auto", marginRight: "auto" }}
    />
    <CardContent sx={{ padding: 0 }}>
     <CapitalizedTypography variant="h6">
      {`${title} ${firstName} ${lastName}`}
     </CapitalizedTypography>

     <CapitalizedTypography variant="h6">
      Gender: {gender}
     </CapitalizedTypography>
     {dateOfBirth && (
      <Typography variant="h6">
       Date of Birth: {formattedDateOfBirth}
      </Typography>
     )}
     <Typography variant="h6">Email: {email}</Typography>
     <Typography variant="h6">Phone: {phone}</Typography>
     <Typography variant="h6">
      Registered Date: {formattedRegisterDate}
     </Typography>
     <Typography variant="h6">Address: {formattedAddress}</Typography>
    </CardContent>
   </Card>
  </StyledPageWrapper>
 );
};

export default UserDetailsPage;
