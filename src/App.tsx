import React,{useState} from 'react';
import { Header } from './components/header';
import {GlobalStyle} from './styles/Global';
import Dashboard from './components/Dashboard/index';
import  Modal  from 'react-modal';


function App() {
 
  const [isNewTransictionModalOpened,setNewTransictionModalOpened]=useState(false);

  const handleOpenNewTransactionModal=()=>{
      setNewTransictionModalOpened(true);
  }

  const handleCloseNewTransactionModal=()=>{
      setNewTransictionModalOpened(false);
  }

  return (
    <>
      <GlobalStyle/>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/> 
      <Modal 
        isOpen={isNewTransictionModalOpened} 
        onRequestClose={handleCloseNewTransactionModal}>
          <h2>cadastrar transacao</h2>
      </Modal>

      <Dashboard/>
    </>
  );
}

export default App;
