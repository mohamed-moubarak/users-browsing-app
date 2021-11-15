import styled from "styled-components";
import { CardHeader } from "@mui/material";
import { Link } from "react-router-dom";

export const CustomizedCardHeader = styled(CardHeader)`
    .MuiCardHeader-title {
    text-transform: capitalize;
    }
`;

export const CustomizedLink = styled(Link)`
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
`;
