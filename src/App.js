import './App.css';
import Expenses from './components/Expenses/Expenses';

const expenses=[
  {
    id:'e1',
    title:'Toilet Paper',
    amount:94.12,
    date:new Date(2020,7,14)
  },
  {
    id:'e2',
    title:'New tV',
    amount:799.12,
    date:new Date(2021,8,14)
  },
  {
    id:'e3',
    title:'Car Insurance',
    amount:294.67,
    date:new Date(2021,2,28)
  },
  {
    id:'e4',
    title:'New Desk (Wooden)',
    amount:450,
    date:new Date(2021,5,12)
  }
]

function App() {
  return (    
    <div>
      <h2>let's started react</h2>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
