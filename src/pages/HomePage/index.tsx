import React, { useEffect, useState } from "react";

import { useUsersList } from "../../service/hooks/user";
import { Grid, Typography } from "@mui/material";
import { UserModel } from "../../service/hooks/user/types";
import { StyledPageWrapper } from "./../../common/styles";
import UserCard from "../../components/UserCard";
import UserCardShimmer from "../../components/UserCard/shimmer";

const HomePage: React.FC = () => {
 const [users, setUsers] = useState<Array<UserModel>>();
 const { data, isLoading } = useUsersList({ page: 1, limit: 24 });

 useEffect(() => {
  setUsers(data?.data);
 }, [data]);

 return (
  <StyledPageWrapper>
   <Typography variant="h2" mx="auto">
    Users
   </Typography>

   <Grid container spacing={3} p={2}>
    {isLoading && Array.from(Array(24).keys()).map((_, i) => (
     <Grid item key={i} xs={12} md={6} lg={4}>
      <UserCardShimmer />
     </Grid>
    ))}

    {!isLoading && users?.map((user) => {
     const { id, picture, title, firstName, lastName } = user;
     return (
      <Grid item key={id} xs={12} md={6} lg={4}>
       <UserCard
        id={id}
        picture={picture}
        title={title}
        firstName={firstName}
        lastName={lastName}
       />
      </Grid>
     );
    })}
   </Grid>
  </StyledPageWrapper>
 );
};

export default HomePage;
