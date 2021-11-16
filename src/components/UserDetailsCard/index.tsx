import React from "react";
import { Avatar, Card, CardContent, Typography } from "@mui/material";

import { CapitalizedTypography } from "./style";
import { UserDetailsModel } from "../../service/hooks/user/types";
import { formatDate, formatAddress } from "../../common/utils";

const UserDetailsPage: React.FC<Partial<UserDetailsModel>> = ({
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
}) => {
 const formattedDateOfBirth = dateOfBirth && formatDate(dateOfBirth);
 const formattedRegisterDate = registerDate && formatDate(registerDate);
 const formattedAddress = location && formatAddress(location);

 return (
  <Card variant="outlined" sx={{ padding: 2 }}>
   <Avatar
    src={picture}
    aria-label="user-picture"
    sx={{ width: 72, height: 72, mx: "auto" }}
   />
   <CardContent sx={{ padding: 0 }}>
    <CapitalizedTypography variant="h6">
     {`${title} ${firstName} ${lastName}`}
    </CapitalizedTypography>

    <CapitalizedTypography variant="h6">Gender: {gender}</CapitalizedTypography>
    {dateOfBirth && (
     <Typography variant="h6">Date of Birth: {formattedDateOfBirth}</Typography>
    )}
    <Typography variant="h6">Email: {email}</Typography>
    <Typography variant="h6">Phone: {phone}</Typography>
    <Typography variant="h6">
     Registered Date: {formattedRegisterDate}
    </Typography>
    <Typography variant="h6">Address: {formattedAddress}</Typography>
   </CardContent>
  </Card>
 );
};

export default UserDetailsPage;
