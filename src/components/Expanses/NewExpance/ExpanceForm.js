import '../NewExpance/ExpanceForm.css';
import React ,{useState} from 'react';

const ExpanceForm=(props)=>{

    const [enterdTitle,setEnterTitle]=useState('');
    const [enterdAmt,setEnterAmt]=useState('');
    const [enterdDate,setEnterDate]=useState('');
    
    
    const TitleChangeHandeler=(event)=>{
        
        setEnterTitle(event.target.value);
    }

    const AmtChangeHandeler=(event)=>{
        setEnterAmt(event.target.value);
        
    }

    const dateChangeHandeler=(event)=>{
        setEnterDate(event.target.value);
        
    }

    const SubmitHandeler=(event)=>{
        event.preventDefault();
        const expancedata ={
            title:enterdTitle,
            amount:enterdAmt,
            date:new Date(enterdDate)
        }
        props.onSaveExpanceData(expancedata)
        console.log(expancedata);

        setEnterTitle('');
        setEnterAmt('');
        setEnterDate('');

    }
    
    return(
        <form onSubmit={SubmitHandeler}>
            <div className='new-expance__controls'>
                <div className='new-expance__control'>
                    <label>Title</label>
                    <input type="text" value={enterdTitle} onChange={TitleChangeHandeler} />
                </div>
                <div className='new-expance__control'>
                    <label>Amount</label>
                    <input type="number" value={enterdAmt} onChange={AmtChangeHandeler} />
                </div>
                <div className='new-expance__control'>
                    <label>Date</label>
                    <input type="date" value={enterdDate} onChange={dateChangeHandeler} />
                </div>
            </div>
            <div className='new-expance__action'>
                <button type="submit">Add</button>
            </div>
        </form>
    );
}
export default ExpanceForm;