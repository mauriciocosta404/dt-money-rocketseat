import  Modal  from 'react-modal';

interface NewTransactionsModalProps{
    isOpened:boolean;
    onRequestClose:()=>void;
}

const NewTransactionsModal=({isOpened,onRequestClose}:NewTransactionsModalProps)=>{
    return(
        <Modal 
        isOpen={isOpened} 
        onRequestClose={onRequestClose}>
          <h2>cadastrar transacao</h2>
      </Modal>
    )
}
export default NewTransactionsModal;