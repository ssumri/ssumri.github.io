import { createGlobalStyle } from 'styled-components';

export const Glstyle = createGlobalStyle`
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-size: 1.0em;
    }

    p {
        opacity: 0.6;
        line-height: 1.5;
    }

    img{
        max-width: 100%;
    }
`