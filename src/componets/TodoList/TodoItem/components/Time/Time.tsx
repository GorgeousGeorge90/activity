import {observer} from 'mobx-react-lite';
import styles from '../../TodoItem.module.scss';
import {useState, FC} from "react";
import todoStore from "../../../../../store/todoStore";




type TimeProps = {
    id:string,
    date:string,
    releaseDate:string,
}


const Time:FC<TimeProps> = ({id,date,releaseDate}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')

    const onBlur = () => {
        if (value) {
            console.log(typeof releaseDate, releaseDate)
            todoStore.addReleaseDate(value,id)
            console.log(typeof releaseDate, releaseDate)
            setEditMode(!editMode)
        }
    }

    return (<div className={styles.time}>
        <div>Created at: {date}</div>
        {
            editMode ?  <input type='date'
                               autoFocus={true}
                               onBlur={onBlur}
                               value={value}
                               onChange={e=>{
                                setValue(e.target.value)
                               }}
                />:
                <div onClick={()=>setEditMode(!editMode)}>&#128197;{releaseDate}</div>
        }
        <span></span>

    </div>)
}

export default observer(Time)