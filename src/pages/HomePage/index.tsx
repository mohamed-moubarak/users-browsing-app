import React, { useEffect, useState } from "react";
import { Button, Grid, Pagination, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import { useUsersList } from "../../service/hooks/user";
import { UserModel } from "../../service/hooks/user/types";
import { StyledPageWrapper } from "./../../common/styles";
import UserCard from "../../components/UserCard";
import UserCardShimmer from "../../components/UserCard/shimmer";
import { CustomizedLinkExtender } from "./style";

const HomePage: React.FC = () => {
const [page, setPage] = React.useState(0);
 const [users, setUsers] = useState<Array<UserModel>>();
 const { data, isLoading } = useUsersList({ page, limit: 32 });

 useEffect(() => {
  setUsers(data?.data);
 }, [data]);

 const {limit, total} = data || {};
 const pagesCount = limit && total && Math.ceil(total/limit);

 const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
    setPage(value - 1);
  };

 return (
  <StyledPageWrapper>
   <Typography variant="h2" mx="auto">
    Users
   </Typography>

   <CustomizedLinkExtender to={`/users/add`} style={{ marginLeft: "auto" }}>
    <Button variant="outlined" startIcon={<AddIcon />}>
     Add new User
    </Button>
   </CustomizedLinkExtender>

   <Grid container spacing={3} pt={2}>
    {isLoading &&
     Array.from(Array(24).keys()).map((_, i) => (
      <Grid item key={i} xs={12} md={6} lg={3}>
       <UserCardShimmer />
      </Grid>
     ))}

    {!isLoading &&
     users?.map((user) => {
      const { id, picture, title, firstName, lastName } = user;
      return (
       <Grid item key={id} xs={12} md={6} lg={3}>
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
   {pagesCount && <Pagination count={pagesCount} page={page + 1} onChange={handlePageChange} sx={{ my: 2 }} />}
  </StyledPageWrapper>
 );
};

export default HomePage;
