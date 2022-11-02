import React from "react";
import './CreateToDoButton.css';

function CreateToDoButton(props){

    
    const onClickButton = () =>  {
        if(props.openModal){
            props.setOpenModal(false);
        }else{
            props.setOpenModal(true);
        }
    };

    return(
        <button 
            className="CreateToDoButton"
            onClick={onClickButton}
        
        >+</button>
    );
}

export {CreateToDoButton};