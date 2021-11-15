import React from "react";
import { Card, Avatar, CardActionArea } from "@mui/material";

import { CustomizedCardHeader, CustomizedLink } from "./style";
import { UserModel } from "../../service/hooks/user/types";

const UserCard: React.FC<Partial<UserModel>> = ({
 id,
 picture,
 title,
 firstName,
 lastName,
}) => (
 <Card variant="outlined">
  <CustomizedLink to={`/users/${id}`}>
   <CardActionArea>
    <CustomizedCardHeader
     avatar={<Avatar src={picture} aria-label="user-picture"></Avatar>}
     title={`${title} ${firstName} ${lastName}`}
    />
   </CardActionArea>
  </CustomizedLink>
 </Card>
);

export default UserCard;
