import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';
import boardStore from "../../store/boardStore";
import Board from "./Board/Board";
import styles from  './BoardList.module.scss';



const BoardList = () => {
    useEffect(()=>{
        boardStore.fetchTodos()
    },[])

    return (<div className={styles.board_list_container}>
        <ul>
            {
                boardStore.boards.map(board=> <li><Board
                                                    id={board.id}
                                                    name={board.name}
                                                    todos={board.todos}
                                                    />
                </li>)
            }
        </ul>
        </div>)
}

export default observer(BoardList)