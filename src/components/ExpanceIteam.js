import './ExpanceIteam.css';
import Card from './Card';
import ExpanceDate from './ExpanceDate';
import React from 'react';

function  ExpanceIteam(props){
    return(
        <Card className='expance-iteam'>
            <ExpanceDate date={props.date}/>
          
            <div className='expance-iteam__discription'>
                <h2>{props.title}</h2>
                <div className='expance-iteam__price'>₹ {props.amt}</div>
            </div>
        </Card>
    );
}
export default ExpanceIteam;