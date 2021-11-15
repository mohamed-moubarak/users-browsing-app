import React from "react";
import { Card, CardActionArea, Skeleton, CardHeader } from '@mui/material';

const UserCardShimmer: React.FC = () => (
 <Card variant="outlined">
  <CardActionArea>
   <CardHeader
    avatar={<Skeleton variant="circular" height={40} width={40} />}
    title={<Skeleton />}
   />
  </CardActionArea>
 </Card>
);

export default UserCardShimmer;
