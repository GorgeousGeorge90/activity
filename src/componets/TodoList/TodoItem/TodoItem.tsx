import {TodoType} from '../../../types/types';
import {FC} from 'react';
import styles from './TodoItem.module.scss';
import todoStore from "../../../store/todoStore";




const TodoItem:FC<TodoType> = ({id,title,complete}) => {


    return (<div className={styles.container}>
        <span>
            <input type="checkbox"
                   checked={complete}
                   onChange={()=>todoStore.completeTodo(id)}
            />
        </span>
        <span>{title}</span>
        <button onClick={()=>todoStore.deleteTodo(id)}>x</button>
        </div>)
}

export default TodoItem