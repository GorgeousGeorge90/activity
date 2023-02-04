import {makeAutoObservable} from 'mobx';
import {BoardType} from '../types/types';
import todoStore from './todoStore';


class boardStore {
    boards:BoardType[] = [
        { id:'1', name: 'New Todos', todos: []},
        { id:'2', name: 'In progress', todos: []},
        { id:'3', name: 'Completed', todos:[]},
    ]

    constructor() {
        makeAutoObservable(this)
    }

    fetchTodos() {
        const startBoard= this.boards.find(board=> board.id === '1')
        if (startBoard) {
            startBoard.todos = todoStore.todos
        }
    }
}

export default new boardStore()


