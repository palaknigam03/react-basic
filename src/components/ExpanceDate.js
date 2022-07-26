import './ExpanceDate.css';
import React from 'react';

const ExpanceDate=(props)=>{
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});

    return(
        <div className='expence-date'>
    <div className='expense-date__month'>{month}</div>
    <div className='expence-date__year'>{year}</div>
    <div className='expence-date__day'>{day}</div>
</div>
    );
}
export default ExpanceDate; 