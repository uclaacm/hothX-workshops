import React, {useState } from 'react';
import './Grocery.css';
import uncheckedBox from '../images/unchecked-box.png'
import checkedBox from '../images/checked-box.png'

function Grocery(props){
    const [ checkboxStatus, setCheckboxStatus ] = useState(false);
    return(
        <div className="small-flex">
        <div>
            <h2 className="grocery-name">{props.name}</h2>
            <p className="grocery-notes">{props.notes}</p>
        </div>
        <img className="checkbox" src={checkboxStatus ? checkedBox : uncheckedBox} alt="checkbox" 
            onClick={()=>setCheckboxStatus(!checkboxStatus)}/>
        </div>
    )
}

export default Grocery;