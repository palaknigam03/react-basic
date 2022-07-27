import "./ExpanceIteam.css";
import Card from "../UI/Card";
import ExpanceDate from "./ExpanceDate";
import React from "react";


const ExpanceIteam = (props) => {
//     const [newTitle , setNewTitle] = useState("")
//     const [title , setTitle] = useState(props.title);
    

//     const clickHandler=()=>{
//         //setTitle("Order Booked !");
//         setTitle(newTitle);
        
//     }
//     const changeHandler=(event)=>{
//         setNewTitle(event.target.value);
//     }

  return (
    <Card className="expance-iteam">
      <ExpanceDate date={props.date} />

      <div className="expance-iteam__discription">
        <h2>{props.title}</h2>
        <div className="expance-iteam__price">₹ {props.amt}</div>
      </div>
      
    </Card>
  );
};
export default ExpanceIteam;
