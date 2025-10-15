import { createGlobalStyle } from "styled-components";
import { breakpoints } from "./responsive";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Source Sans Pro', sans-serif;
    }

    body {
        position: relative;
        max-width: 100%;
        width: 100%;
        overflow-x: hidden;
    }

    h3 {
        font-weight: 500;
    }

    h4 {
        font-size: 18px;
    }

    ${breakpoints.mobile`
        p {
            font-size: 16px;
            font-weight: 400;
        }

        h4 {
            font-size: 24px;
        }
    `}
`

export default GlobalStyles