import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    height: 100%;
    padding: 0;
    font-family: sans-serif;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export const StyledPageWrapper = styled.div`
 margin: 20px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`;

export const CustomizedLink = styled(Link)`
 text-decoration: inherit;
 color: inherit;
 cursor: auto;
`;
