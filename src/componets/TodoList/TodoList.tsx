import {observer} from 'mobx-react-lite';
import todoStore from '../../store/todoStore';
import TodoItem from './TodoItem/TodoItem';


const TodoList = () => {

    return (<ul>
        {
            todoStore.todos.map(todo => <li>
                                    <TodoItem
                                        key={todo.id}
                                        id={todo.id}
                                        title={todo.title}
                                        complete={todo.complete}
                                    />
            </li>
            )
        }
    </ul>)
}


export default observer(TodoList)

