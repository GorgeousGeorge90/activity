import {TodoType} from '../../../types/types';
import {FC, useState} from 'react';
import styles from './TodoItem.module.scss';
import todoStore from "../../../store/todoStore";
import Time from "./components/Time/Time";
import User from "./components/User/User";
import {observer} from "mobx-react-lite";





const TodoItem:FC<TodoType> = ({id,title,complete,date,releaseDate,user}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [text,setText] =useState<string>('')



    const onBlur = () => {
        todoStore.changeTodo(id,text)
        setText('')
        setEditMode(!editMode)
    }

    const onChange = () => {
        todoStore.completeTodo(id)
    }

    const onClick = () => {
        todoStore.deleteTodo(id)
    }


    return (<div className={styles.container}>
        <span>
            <input type="checkbox"
                   checked={complete}
                   onChange={onChange}
            />
        </span>
        {
            editMode ? <span><input type="text"
                                    placeholder='Enter updated task'
                                    value={text}
                                    onChange={e=> {
                                      setText(e.target.value)
                                        }
                                    }
                                    autoFocus={true}
                                    onBlur={onBlur}
                /></span>:
                <span style={{textDecoration: complete ? 'line-through':'none'}}>{title}</span>
        }
        <span onDoubleClick={()=>setEditMode(!editMode)}>&#128394;</span>
        <span onClick={onClick}>&#128465;</span>
        <div className={styles.select}>
            <User user={user}
                  id={id}/>
        </div>
        <div className={styles.date}>
            <Time date={date}
                  id={id}
                  releaseDate={releaseDate}
        />
         </div>
        </div>)
}

export default observer(TodoItem)