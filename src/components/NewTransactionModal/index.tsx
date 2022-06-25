import React,{FormEvent, useState} from 'react';
import  Modal  from 'react-modal';
import * as C from './style';
import { Container, TransactionsTypeContainer } from './style';
import closeImg from '../../assets/Vector.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'
import { api } from '../../services/api';

interface NewTransactionsModalProps{
    isOpened:boolean;
    onRequestClose:()=>void;
}

const NewTransactionsModal=({isOpened,onRequestClose}:NewTransactionsModalProps)=>{
    const [title,setTitle]=useState('');
    const [value, setValue]=useState(0);
    const [category,setCategory]=useState('');
    const [type,setType]=useState("deposit");

    const handleCreateNewTransaction=(event:FormEvent)=>{
        event.preventDefault();

        const data={
            title,
            value,
            category,
            type
        }

        api.post('/transactions',data);
    }

    return(
        <Modal 
        isOpen={isOpened} 
        onRequestClose={onRequestClose}
        className="reactModalContent"
        overlayClassName="react-modal-overlay"
        >
        <button type="button">
            <img src={closeImg} 
            alt=""
            onClick={onRequestClose}
            className="react-modal-close"
            />
        </button>
        <C.Container onSubmit={handleCreateNewTransaction}>
            <h2>cadastrar transação</h2>

            <input 
                placeholder="Titulo" 
                value={title} 
                onChange={(event)=>setTitle(event.target.value)}
            />
            
            <input 
                type="number" 
                placeholder='Valor' 
                value={value} 
                onChange={(event)=>setValue(Number(event.target.value))}
            />

            <C.TransactionsTypeContainer>
                <C.RadioBox type="button" activeColor="green" isActive={type==='deposit'} onClick={()=>{setType('deposit')}}>
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </C.RadioBox>
                <C.RadioBox type="button" activeColor="red" isActive= {type==='withdraw'} onClick={()=>{setType('withdraw')}}>
                    <img src={outcomeImg}alt="Saida" />
                    <span>Saida</span>
                </C.RadioBox>
            </C.TransactionsTypeContainer>

            <input 
                placeholder="Categoria" 
                value={category} 
                onChange={(event)=>setCategory(event.target.value)}
            />
            
            <button type="submit">cadastrar</button>
        </C.Container>
      </Modal>
    )
}
export default NewTransactionsModal;