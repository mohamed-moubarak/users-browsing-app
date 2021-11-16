import React from "react";
import { Typography, Breadcrumbs, Link } from "@mui/material";

import { StyledPageWrapper } from "./../../common/styles";
import UserCreationForm from "../../components/UserCreationForm";

const UserCreationPage: React.FC = () => {
 return (
  <StyledPageWrapper>
   <Typography variant="h2" mx="auto" mb={1}>
    User Creation
   </Typography>

   <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
    <Link underline="hover" color="inherit" href="/">
     Users
    </Link>
    <Typography color="text.primary">User Creation</Typography>
   </Breadcrumbs>

   <UserCreationForm />

  </StyledPageWrapper>
 );
};

export default UserCreationPage;
