import React, { useEffect, useState } from "react";
import {
 Breadcrumbs,
 Link,
 Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";

import { useUserDetails } from "../../service/hooks/user";
import { UserModel, UserDetailsModel } from "../../service/hooks/user/types";
import { StyledPageWrapper } from "./../../common/styles";
import UserDetailsShimmer from "../../components/UserDetailsCard/shimmer";
import UserDetailsCard from "../../components/UserDetailsCard";

const UserDetailsPage: React.FC<Partial<UserModel>> = () => {
 let { userId } = useParams();
 const [userDetails, setUserDetails] = useState<UserDetailsModel>();

 const { data, isLoading } = useUserDetails({ id: userId });

 useEffect(() => {
  setUserDetails(data);
 }, [data]);

 const { firstName, lastName } = userDetails || {};

 return (
  <StyledPageWrapper>
   <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
    <Link underline="hover" color="inherit" href="/">
     Users
    </Link>
    <Typography color="text.primary">
     User Details {firstName && lastName && `- ${firstName} ${lastName}`}
    </Typography>
   </Breadcrumbs>

   {isLoading && <UserDetailsShimmer />}

   {!isLoading && <UserDetailsCard {...userDetails} />}
  </StyledPageWrapper>
 );
};

export default UserDetailsPage;
