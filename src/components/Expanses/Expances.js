import "./Expances.css";
import ExpanceIteam from "./ExpanceIteam";
import React from "react";

const Expances = (props) => {
  return (
    <div className="expanses">
      {props.items.map((expance) => (
        <div key={expance.id}>
          <ExpanceIteam 
            date={expance.date}
            title={expance.title}
            amt={expance.amount}
          />
        </div>
      ))}

      {/* <ExpanceIteam
        date={props.items[0].date}
        title={props.items[0].title}
        amt={props.items[0].amount}
      />

      <ExpanceIteam
        date={props.items[1].date}
        title={props.items[1].title}
        amt={props.items[1].amount}
      />

      <ExpanceIteam
        date={props.items[2].date}
        title={props.items[2].title}
        amt={props.items[2].amount}
      /> */}
    </div>
  );
};

export default Expances;
