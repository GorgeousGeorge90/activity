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
}

export default new boardStore()


