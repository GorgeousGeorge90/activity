import './App.module.scss'
import TodoList from "./componets/TodoList/TodoList";
import BaseInput from "./componets/common /BaseInput/BaseInput";
import CreateTask from './componets/CreateTask/CreateTask';
import styles from './App.module.scss';


function App() {

    return (
        <div className={styles.app_wrapper}>
            Hello!
            <CreateTask/>
            <TodoList/>
        </div>
  )
}

export default App
