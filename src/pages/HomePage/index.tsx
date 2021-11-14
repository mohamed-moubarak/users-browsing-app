import React, { useEffect, useState } from "react";

import { useUsersList } from "../../service/hooks/user";
import { Grid, Typography } from "@mui/material";
import { UserModel } from "../../service/hooks/user/types";
import { StyledTitleWrapper } from "./style";
import UserCard from "../../components/UserCard";

const HomePage: React.FC = () => {
 const [users, setUsers] = useState<Array<UserModel>>();

 const { data, isLoading } = useUsersList({ page: 1, limit: 10 });

 useEffect(() => {
  setUsers(data?.data);
  console.log(data);
 }, [data]);

 return (
  <>
  <StyledTitleWrapper>
    <Typography variant="h2" mt={2} mx="auto">Users</Typography>
   </StyledTitleWrapper>

   <Grid container spacing={3} p={2}>
    {users?.map((user) => {
    const { picture, title, firstName, lastName } = user;
    return <Grid item key={user.id} xs={12} md={6} lg={4}>
      <UserCard picture={picture} title={title} firstName={firstName} lastName={lastName} />
     </Grid>
    })}
   </Grid>
  </>
 );
};

export default HomePage;
