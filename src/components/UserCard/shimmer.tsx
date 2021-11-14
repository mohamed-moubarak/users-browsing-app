import React from "react";
import { Card, CardActionArea, Skeleton } from "@mui/material";

import { CustomizedCardHeader } from "./style";

const UserCardShimmer: React.FC = () => (
 <Card variant="outlined">
  <CardActionArea>
   <CustomizedCardHeader
    avatar={<Skeleton variant="circular" height={40} width={40} />}
    title={<Skeleton />}
   />
  </CardActionArea>
 </Card>
);

export default UserCardShimmer;
