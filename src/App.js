import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Balance from './component/Balance';
import TransictionIncome from './component/TransictionIncome';
import TransictionList from './component/TransictionList';
import AddTransaction from './component/addTransiction';
import Transiction from './component/Transiction';


function App() {
  return (
    <div className="App">
     <Header/>
     <Balance/>
     {/* */}

     <div className='container'> 
      <div className='totals'>
      <TransictionIncome/>
      <Transiction/>
      </div>
    
     <TransictionList/>
     <AddTransaction/>
      
      
      
     </div> 
     
    </div>
  );
}

export default App;
