import React, { useEffect, useState } from "react";

import { useUsersList } from "../../service/hooks/user";
import { Grid, Card, Typography, Avatar, CardActionArea } from "@mui/material";
import { UserModel } from "../../service/hooks/user/types";
import { CustomizedCardHeader, StyledTitleWrapper } from "./style";

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
    <Typography variant="h2" mt={2} mx="auto">h1. Heading</Typography>
   </StyledTitleWrapper>

   <Grid container spacing={3} p={2}>
    {users?.map((user) => (
     <Grid item key={user.id} xs={12} md={6} lg={4}>
      <Card variant="outlined">
       <CardActionArea>
        <CustomizedCardHeader
         avatar={<Avatar src={user.picture} aria-label="user-picture"></Avatar>}
         title={`${user.title} ${user.firstName} ${user.lastName}`}
        />
       </CardActionArea>
      </Card>
     </Grid>
    ))}
   </Grid>
  </>
 );
};

export default HomePage;
