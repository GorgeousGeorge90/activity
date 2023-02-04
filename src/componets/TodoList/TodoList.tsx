import {observer} from 'mobx-react-lite';
import todoStore from '../../store/todoStore';
import TodoItem from './TodoItem/TodoItem';
import styles from './TodoList.module.scss';


const TodoList = () => {

    return (<div className={styles.container}>
        <ul className={styles.container}>
        {
            todoStore.todos.map(todo => <li key={todo.id}>
                                    <TodoItem
                                        id={todo.id}
                                        title={todo.title}
                                        date={todo.date}
                                        complete={todo.complete}
                                        user={todo.user}
                                        releaseDate={todo.releaseDate}
                                    />
            </li>
            )
        }
    </ul>
</div>)
}


export default observer(TodoList)

