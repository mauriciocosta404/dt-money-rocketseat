import logoImg from '../../assets/Logo.svg'; 
import * as C from './styles';

export const Header=()=>{
    return(
        <C.Container>
            <C.Content>
                <img src={logoImg} alt="dt money" />
                <button>
                    nova transação
                </button>
            </C.Content>
        </C.Container>
    )
}