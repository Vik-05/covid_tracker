import React, { useState } from "react";
import './todolist.css';


import classes from './Card.module.css';
const Card = (props) => {
    return (
        <div className="card">{props.children}</div>
    );
}
export default Card;