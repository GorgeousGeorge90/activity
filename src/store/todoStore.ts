import {makeAutoObservable} from 'mobx';
import {nanoid} from 'nanoid';
import {TodoType} from '../types/types';


class todoStore {
    todos: TodoType[] = [{
        id:'31',
        title: 'Hi!',
        complete:false,
    }]

    constructor() {
        makeAutoObservable(this)
    }

    addTodo(title:string) {
        const newTodo = {
            id: nanoid(3),
            title,
            complete: false,
        }

        this.todos.push(newTodo)
    }

    completeTodo(id:string) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
               todo.complete = true
            }
            return  todo
        })
    }

    deleteTodo(id:string) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }
}

export default  new todoStore()


