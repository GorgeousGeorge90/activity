import {ChangeEvent, FC, useState} from 'react';
import todoStore from "../../../store/todoStore";


type BaseInputProps = {
    placeholder: string,
    button: string,
    value:string,
    onChange:(event:ChangeEvent<HTMLInputElement>)=>void,
    handleClick:()=>void,
}


const BaseInput:FC<BaseInputProps> = ({placeholder,button,handleClick, value, onChange}) => {


    return (<>
        <input type="text"
               placeholder={placeholder}
               value={value}
               onChange={onChange}
        />
        <button onClick={handleClick}>{button}</button>
        </>)
}

export default BaseInput