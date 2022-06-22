import React,{useState} from 'react';
import { Header } from './components/header';
import {GlobalStyle} from './styles/Global';
import Dashboard from './components/Dashboard/index';
import NewTransactionsModal from './components/NewTransactionModal/index';

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

      <Header 
      onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />

      <NewTransactionsModal 
      isOpened={isNewTransictionModalOpened} 
      onRequestClose={handleCloseNewTransactionModal}/>
      
      <Dashboard/>
    </>
  );
}

export default App;
