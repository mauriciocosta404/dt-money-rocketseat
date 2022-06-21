import * as C from './style';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
const Summary:React.FC=()=>{
    return(
        <C.Container>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas"/>
                </header>
                <strong>R$1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="saidas"/>
                </header>
                <strong>-R$500,00</strong>
            </div>

            <div>
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="total"/>
                </header>
                <strong>R$500,00</strong>
            </div>

        </C.Container>
    )
}
export default Summary;