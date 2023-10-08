import { createGlobalStyle } from 'styled-components';
import MontserratRegular from '../fonts/Montserrat-Regular.otf';
import MontserratSemiBold from '../fonts/Montserrat-SemiBold.otf';

export const GlobalStyle = createGlobalStyle`
    

    @font-face {
        font-family: 'MontserratSemiBold';
        src: local('MontserratSemiBold'),
        url(${MontserratSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'MontserratRegular';
        src: local('MontserratRegular'),
        url(${MontserratRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }    


    body {
        margin: 0; 
        padding: 0;
        font-family: 'MontserratRegular';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    a {
        text-decoration: none;
    }

    p {
        padding: 0;
        margin: 0;
    }


    ul,
    ol {
    list-style: none;
    padding: 0;
    margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
    margin: 0;
    padding: 0;
    }

    img {
    display: block;
    max-width: 100%;
    height: auto;
    }

    button {
        cursor: pointer;
        border: none;
    }
`;

export default GlobalStyle;
