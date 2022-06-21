import * as C from './style';
import Summary from '../Summary/index';
import TransactionsTable from '../transactionsTable/index';

const Dashboard:React.FC=()=>{
    return(
        <C.Container>
            <Summary/>
            <TransactionsTable/>
        </C.Container>
    )
}
export default Dashboard;