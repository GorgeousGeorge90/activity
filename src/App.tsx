import './App.module.scss'
import styles from './App.module.scss';
import BoardList from "./componets/BoardList/BoardList";
import Header from "./componets/Header/Header";



function App() {

    return (
        <div className={styles.app_wrapper}>
            <Header/>
            <BoardList/>
        </div>
  )
}

export default App
