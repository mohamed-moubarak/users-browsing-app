import React from "react";
import { Box, Button, TextField, Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useForm } from "react-hook-form";

import {
 FormFieldWrapper,
 StyledErrorMessage,
 StyledNameWrapper,
} from "./style";

const UserCreationForm: React.FC = () => {
 const {
  register,
  handleSubmit,
  formState: { errors },
 } = useForm();
 const onSubmit = (data: any) => console.log(data);

 return (
  <Box
   component="form"
   sx={{
    "& .MuiTextField-root": { my: 1 },
   }}
   autoComplete="off"
   onSubmit={handleSubmit(onSubmit)}
  >
   <Card variant="outlined" sx={{ padding: 2 }}>
    <StyledNameWrapper>
     <FormFieldWrapper>
      <TextField
       {...register("firstName", { required: true })}
       id="firstName"
       label="First Name"
      />
      {errors.firstName?.type === "required" && (
       <StyledErrorMessage>This field is required</StyledErrorMessage>
      )}
     </FormFieldWrapper>
     <FormFieldWrapper>
      <TextField
       {...register("lastName", { required: true })}
       id="lastName"
       label="Last Name"
      />
      {errors.lastName?.type === "required" && (
       <StyledErrorMessage>This field is required</StyledErrorMessage>
      )}
     </FormFieldWrapper>
    </StyledNameWrapper>
    <FormFieldWrapper>
     <TextField
      {...register("email", {
       required: true,
       pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
       },
      })}
      id="outlined-required"
      label="Email"
      fullWidth
     />
     {errors.email?.type === "required" && (
      <StyledErrorMessage>This field is required</StyledErrorMessage>
     )}
     {errors.email?.type === "pattern" && (
      <StyledErrorMessage>{errors.email?.message}</StyledErrorMessage>
     )}
    </FormFieldWrapper>

    <Button
     variant="outlined"
     startIcon={<AddIcon />}
     type="submit"
     fullWidth
     sx={{ marginTop: 2 }}
    >
     Create User
    </Button>
   </Card>
  </Box>
 );
};

export default UserCreationForm;
