import { createGlobalStyle } from "styled-components";

 export default createGlobalStyle`
  * {
    font-family: 'Sora', sans-serif;
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 15px;
  }

  button {
    cursor: pointer;
  }
`;
