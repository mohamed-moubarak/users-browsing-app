import React from "react";
import { Card, CardContent, Skeleton, Typography } from "@mui/material";

const UserDetailsShimmer: React.FC = () => (
 <Card variant="outlined" sx={{ padding: 2 }}>
  <Skeleton
   variant="circular"
   height={72}
   width={72}
   sx={{ marginLeft: "auto", marginRight: "auto" }}
  />

  <CardContent sx={{ padding: 0 }}>
  <Typography variant="h6"><Skeleton width={600} /> </Typography>
  <Typography variant="h6"><Skeleton width={600} /> </Typography>
  <Typography variant="h6"><Skeleton width={600} /> </Typography>
  <Typography variant="h6"><Skeleton width={600} /> </Typography>
  <Typography variant="h6"><Skeleton width={600} /> </Typography>
  <Typography variant="h6"><Skeleton width={600} /> </Typography>
  <Typography variant="h6"><Skeleton width={600} /> </Typography>
  <Typography variant="h6"><Skeleton width={600} /> </Typography>
  </CardContent>
 </Card>
);

export default UserDetailsShimmer;
