import logoImg from '../../assets/Logo.svg'; 
import * as C from './styles';
import React,{useState} from 'react';

interface TransactionsModalProps{
    onOpenNewTransactionModal:()=>void;
}

export const Header=({onOpenNewTransactionModal}:TransactionsModalProps)=>{

    return(
        <C.Container>
            <C.Content>
                <img src={logoImg} alt="dt money" />
                <button onClick={onOpenNewTransactionModal}>
                    nova transação
                </button>
                
            </C.Content>
        </C.Container>
    )
}