import  Modal  from 'react-modal';
import * as C from './style';
import { Container } from './style';

interface NewTransactionsModalProps{
    isOpened:boolean;
    onRequestClose:()=>void;
}

const NewTransactionsModal=({isOpened,onRequestClose}:NewTransactionsModalProps)=>{
    return(
        <Modal 
        isOpen={isOpened} 
        onRequestClose={onRequestClose}
        className="reactModalContent"
        overlayClassName="react-modal-overlay"
       
        >
          <h2>cadastrar transação</h2>

        <C.Container>
            <input placeholder="Titulo" />
            <input type="number" placeholder='Valor' />
            <input placeholder="Categoria"/>
            <button type="submit">cadastrar</button>
        </C.Container>
      </Modal>
    )
}
export default NewTransactionsModal;