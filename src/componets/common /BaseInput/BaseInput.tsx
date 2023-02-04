import {ChangeEvent, FC, useState} from 'react';
import styles from './BaseInput.module.scss';


type BaseInputProps = {
    placeholder: string,
    button: string,
    value:string,
    onChange:(event:ChangeEvent<HTMLInputElement>)=>void,
    handleClick:()=>void,
}


const BaseInput:FC<BaseInputProps> = ({placeholder,button,handleClick, value, onChange}) => {


    return (<div className={styles.form}>
        <input type="text"
               placeholder={placeholder}
               value={value}
               onChange={onChange}
        />
        <button onClick={handleClick}>{button}</button>
        </div>)
}

export default BaseInput