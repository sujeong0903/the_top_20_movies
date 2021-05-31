import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        margin: 0;
        font-family: 'Noto Sans KR', sans-serif;
        color: #212121;
        background-color: #F2E5BD;
        box-sizing: border-box;
    };

    a {
        color: #212121;
        text-decoration: none;
    }
`;

export default GlobalStyle;