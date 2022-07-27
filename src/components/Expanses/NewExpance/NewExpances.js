import '../NewExpance/NewExpances.css';
import ExpanceForm from './ExpanceForm';
import React from 'react';

const NewExpances=(props)=>{
    const saveExpanceHandler=(enterExpanseData)=>{
        //console.log(enterExpanseData);
        const expancedata ={
            ...enterExpanseData , id:Math.random().toString()
            
        }
        props.onAddExpande(expancedata);
        console.log(expancedata)

    }
    return(
        <div className='new-expense'>
            <ExpanceForm onSaveExpanceData={saveExpanceHandler} />
        </div>
    );
}
export default NewExpances;