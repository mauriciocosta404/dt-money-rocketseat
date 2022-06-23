import styled from "styled-components";
import {darken} from 'polished';

export const Container=styled.form`
    display: flex;
    flex-direction: column;
    h2{ 
        color:var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }
    input{ 
        padding:0 1.5rem;
        height: 4rem;
        border: .1rem solid #d7d7d7;
        border-radius: 0.25rem;
        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color:var(--text-body);
        }
        &+input{
            margin-top: 1rem;
        }
    }
    button[type="submit"]{
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color:#fff;
        border-radius: 0.24rem;
        border:none;
        font-size: 1.2rem;
        margin-top: 1.5rem;
        font-weight: 400;

        &:hover{
            filter: brightness(0.9);
        }
    }
   
`;
export const TransactionsTypeContainer=styled.div`
    margin:1rem 0;
    display: grid;
    grid-template-columns:repeat(2,1fr);
    gap: .5rem;

    button{
        height: 4rem;
        border:.1rem solid #d7d7d7;
        border-radius: 0.25rem;
        background: transparent;
        display:flex;
        align-items: center;
        justify-content:center;
        &:hover{
            border-color:${darken(0.1,'#d7d7d7')};
        }
        
        img{
            width: 20px;
            height: 20px;
        }
        span{
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color:var(--text-title);
        }
    }
`;