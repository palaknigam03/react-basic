import './Card.css';
import './ExpanceIteam.css';
import React from 'react';

function Card({className, children}){
    //console.log(className, "----CLASS----", children);
    //const classes = 'card-' + className;
    return(
        <div className={`card ${className}`}>{children}</div>
    );
}

export default Card;