import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR:100,300,400,700|Oswald:600');

    html {
        height: 100%;
        scroll-behavior:smooth;
        -ms-overflow-style:none;    
    }

    ::-webkit-scrollbar {
            display: none;
    }
    
    body {
        width: 100%;
        min-height: 100%;

        font-family: 'Noto Sans KR', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
        color: rgba(0, 0, 0, 0.84);

        * { outline: none; box-sizing: border-box; }

        a { text-decoration: none; color: inherit; }

        h1, h2, h3, h4, h5, h6 {
            font-family: 'Oswald', sans-serif;
        }
        h1 { font-size: 24px; }
        h2 { font-size: 22px; }
        h3 { font-size: 18px; }
        h4 { font-size: 16px; }
        h5 { font-size: 12px; }
        h6 { font-size: 10px; }
    }
`;

export default GlobalStyle;
