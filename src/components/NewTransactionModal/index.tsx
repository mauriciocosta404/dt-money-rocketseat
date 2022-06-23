import  Modal  from 'react-modal';
import * as C from './style';
import { Container, TransactionsTypeContainer } from './style';
import closeImg from '../../assets/Vector.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg'

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
        <button type="button">
            <img src={closeImg} 
            alt=""
            onClick={onRequestClose}
            className="react-modal-close"
            />
        </button>
        <C.Container>
            <h2>cadastrar transação</h2>
            <input placeholder="Titulo" />
            <input type="number" placeholder='Valor' />

            <C.TransactionsTypeContainer>
                <button type="button">
                    <img src={incomeImg} alt="Entrada" />
                    <span>Entrada</span>
                </button>
                <button type="button">
                    <img src={outcomeImg}alt="Saida" />
                    <span>Saida</span>
                </button>
            </C.TransactionsTypeContainer>

            <input placeholder="Categoria"/>
            <button type="submit">cadastrar</button>
        </C.Container>
      </Modal>
    )
}
export default NewTransactionsModal;