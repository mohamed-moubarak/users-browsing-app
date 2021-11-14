import styled from "styled-components";
import { CardHeader } from '@mui/material';

export const StyledTitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CustomizedCardHeader = styled(CardHeader)`
    .MuiCardHeader-title {
        text-transform: capitalize;
    }
`;