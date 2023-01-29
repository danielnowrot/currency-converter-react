import { createGlobalStyle } from "styled-components";
import backgroundBanner from "./pexels.jpg";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }   

    *, ::after, ::before {
        box-sizing: inherit
    }

    body {
        background-image: url("${backgroundBanner}");
        background-size: auto;
        background-repeat: no-repeat;
        background-position: center;
    }
`;

export default GlobalStyle;