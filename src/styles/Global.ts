import {createGlobalStyle} from 'styled-components';

export const GlobalStyle=createGlobalStyle`
    :root{
        --background:#f8f2f5;
        --red:#E52E40;
        --blue:#5429CC;
        --blue-light:#6933FF;
        --text-title:#363F5F;
        --text-body:#696CB3;
        --shape:#ffffff;
        --green:#33CC95;
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

    .react-modal-overlay{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top:0;left:0;right:0;bottom:0;

        display:flex;
        align-items: center;    
        justify-content: center;
    }
    .reactModalContent{
        width: 100%;
        max-width: 576px;
        background-color:var(--background);
        padding:3rem;
        position:relative;
        border-radius: 0.24rem;
    }
    .react-modal-close{
        position :absolute;
        right: 1.5rem;top:1.5rem;
        border:none;
        background: transparent;

        &:hover{
            filter: brightness(0.7);
            padding: .1rem;
        }
    }
`;