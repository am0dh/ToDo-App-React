import React from 'react';
import './Card.css'


const Card=(props)=>{
    let nameClass="card"
    let checkedBox=""
    if(props.done===true){
        nameClass+=" done-card"
        checkedBox="checked"
    }
  
    return(
    <div className={nameClass}>
        <label className="container">
                    <input type="checkbox"checked={checkedBox} onClick={()=>{props.completed(props.index)}}/>
                    <span className="checkmark"></span>
         </label>

        <p> {props.data}  </p>
        <button onClick={()=>{props.edit(props.index)}}> Edit </button>
        <button onClick={()=>{ props.delete(props.index)}}> X </button>
    </div>)

}

export default Card;