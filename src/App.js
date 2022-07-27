import React, { useState } from 'react';
import './components/Expanses/ExpanceIteam';
import Expances from './components/Expanses/Expances';
import NewExpances from './components/Expanses/NewExpance/NewExpances';

let DUMMY_EXPANCE = [
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
];

const App = ()=>{
  // let expanceDate = new Date(2021, 3, 28);
  // let expanceTitle = "school fee";
  // let expanceAmt = 300;

  const [expanses ,setExpances]=useState(DUMMY_EXPANCE )

  const addExpanceHandler=(expance)=>{
    const updatedExpance =[expance ,...expanses]
    setExpances(updatedExpance);

    console.log(expance);
    //console.log(updatedExpance);

  };


  return (
    <div>
      {/* <h2>Let's started</h2> */}
      <NewExpances onAddExpande={addExpanceHandler} />
      <Expances items={expanses}/>
    </div>
  );
}

export default App;
