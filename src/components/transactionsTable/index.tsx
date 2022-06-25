import { useEffect, useState} from 'react';
import * as C from './style';
import { api } from '../../services/api';

interface Transaction{
    id:number;
    type:string;
    category:string;
    title:string;
    createAt:string;
    amount:number;
}

const TransactionsTable:React.FC=()=>{ 

    const [transactions,setTransactions]=useState<Transaction[]>([]);

    useEffect(()=>{
        api.get('https://localhost:3000/api/transactions').
        then((response)=>setTransactions(response.data.transactions));
    },[]);

    return(
        <C.Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                {transactions.map((transaction)=>(
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>{transaction.amount}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.createAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </C.Container>
    )
}
export default TransactionsTable;