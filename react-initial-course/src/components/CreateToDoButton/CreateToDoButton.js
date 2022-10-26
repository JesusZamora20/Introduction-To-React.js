import React from "react";
import './CreateToDoButton.css';

function CreateToDoButton(props){
    const onClickButton = (msg) =>  {
        alert(msg);
    };

    return(
        <button 
            className="CreateToDoButton"
            onClick={() => onClickButton('Holiiiii')}
        
        >+</button>
    );
}

export {CreateToDoButton};