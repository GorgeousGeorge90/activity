import {FC, useState} from 'react';
import {BoardType, TodoType} from '../../../types/types';
import TodoItem from '../../TodoList/TodoItem/TodoItem';
import styles from './Board.module.scss';
import {observer} from 'mobx-react-lite';
import TodoList from "../../TodoList/TodoList";



const Board:FC<BoardType> = ({id,name,todos}) => {

    return(<div className={styles.board_container}>
        <h3>{name}</h3>
        {
            id === '1' ? <TodoList/> :
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
                                    user={todo.user}
                                    releaseDate={todo.releaseDate}
                                    todo={todo}
                                />
                            </li>
                        )
                    }
                </ul>
        }
    </div>)
}

export default observer(Board)