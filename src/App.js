import React from 'react';
import './components/Expanses/ExpanceIteam';
import Expances from './components/Expanses/Expances';

const App = ()=>{
  // let expanceDate = new Date(2021, 3, 28);
  // let expanceTitle = "school fee";
  // let expanceAmt = 300;
  let expance = [
    {
      id:'1',
      title:'Tea',
      amount: 100,
      date: new Date(2021 ,5,12)
    },
    {
      id:'2',
      title:'Hot coffe',
      amount: 150,
      date: new Date(2021 ,5,12)
    },
    {
      id:'3',
      title:'Cold coffe',
      amount: 200,
      date: new Date(2021 ,5,12)
    },
  ]
  return (
    <div>
      <h2>Let's started</h2>
      <Expances items={expance}/>
    </div>
  );
}

export default App;
