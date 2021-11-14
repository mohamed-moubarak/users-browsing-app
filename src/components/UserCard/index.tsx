import React from "react";
import { Card, Avatar, CardActionArea } from "@mui/material";

import { CustomizedCardHeader } from "./style";
import { UserModel } from '../../service/hooks/user/types';

const UserCard: React.FC<Partial<UserModel>> = ({ picture, title, firstName, lastName }) => {
 return (
   <Card variant="outlined">
    <CardActionArea>
     <CustomizedCardHeader
      avatar={<Avatar src={picture} aria-label="user-picture"></Avatar>}
      title={`${title} ${firstName} ${lastName}`}
     />
    </CardActionArea>
   </Card>
 );
};

export default UserCard;
