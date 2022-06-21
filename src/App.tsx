import { Header } from './components/header';
import {GlobalStyle} from './styles/Global';
import Dashboard from './components/Dashboard/index';

function App() {
 
  return (
    <>
      <GlobalStyle/>
      <Header/> 
      <Dashboard/>
    </>
  );
}

export default App;
