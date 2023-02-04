import styles from './Header.module.scss'
import CreateTask from '../CreateTask/CreateTask';
import todoStore from '../../store/todoStore';
import {observer} from 'mobx-react-lite';



const Header = ()=> {

    return (<header>
        <div className={styles.container}>
            <h3>Activity App</h3>
            <CreateTask/>
            <p>Smashed {todoStore.completedTodos}&#128511;</p>
        </div>
    </header>)
}

export default observer(Header)