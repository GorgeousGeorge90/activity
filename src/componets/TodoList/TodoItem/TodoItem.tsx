import {TodoType} from '../../../types/types';
import {FC, useRef, useState} from 'react';
import styles from './TodoItem.module.scss';
import todoStore from "../../../store/todoStore";
import Select from 'react-select';





const TodoItem:FC<TodoType> = ({id,title,complete,date}) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [text,setText] =useState<string>('')
    const [addUser, setAddUser] = useState<boolean>(false)
    const [value, setValue] = useState<string>('')


    const options = todoStore.users.map(user=> ({
        value: user.name, label: user.name
    }))

    console.log(options)

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

    const addNewUser = () => {
        if (value) {
            todoStore.choseUser(id,value)
            setAddUser(false)
        }
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
        <span onDoubleClick={()=>setAddUser(!addUser)}>&#128104;</span>
        <span onDoubleClick={()=>setEditMode(!editMode)}>&#128394;</span>
        <span onClick={onClick}>&#128465;</span>
        {
            addUser ? <div onBlur={()=>setAddUser(!addUser)} className={styles.select}><Select options={options}
                                                                                               placeholder={'Add worker'}
                                                                                               inputValue={value}

                /></div>:
                <div className={styles.date}>Created at: {date}</div>
        }
        </div>)
}

export default TodoItem