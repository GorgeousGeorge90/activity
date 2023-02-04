import {FC} from 'react';
import {BoardType} from '../../../types/types';
import TodoItem from '../../TodoList/TodoItem/TodoItem';
import styles from './Board.module.scss';
import {observer} from 'mobx-react-lite';



const Board:FC<BoardType> = ({id,name,todos}) => {


    return (<div className={styles.board_container}>
        <h3>{name}</h3>
        <ul style={{
            flexDirection: 'column',
        }}>
            {
                todos.map(todo => <li key={todo.id}>
                    <TodoItem
                        id={todo.id}
                        title={todo.title}
                        complete={todo.complete}
                        date={todo.date}
                        />
                </li>
                )
            }
        </ul>

    </div>)
}

export default observer(Board)