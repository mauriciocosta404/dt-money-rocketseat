import {createGlobalStyle} from 'styled-components';

export const GlobalStyle=createGlobalStyle`
    :root{
        --bacground:#f8f2f5;
        --red:#E52E40;
        --blue:#5429CC;
        --blue-light:#6933FF;
        --text-title:#363F5F;
        --text-body:#696CB3;
        --shape:#ffffff;
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        transition: all .5s linear;
        font-family: 'poppins',sans-serif;
    }
    html{
        @media (max-width:1080px){
            font-size: 93.75%;//----15px
        }
        @media (max-width:720px){
            font-size: 87.5%;//----14px
        }
    }
    body{
        background: var(--bacground);
        -webkit-font-smoothing:antialiased;
    }
    h1,h2,h3,h4,h5,h6,strong{
        font-weight: 600;
    }
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor:not-allowed;
    }
`;