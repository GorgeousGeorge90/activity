import {makeAutoObservable} from 'mobx';
import {nanoid} from 'nanoid';
import {TodoType, UserType} from '../types/types';
import John from './../assets/img/John.jpeg';



class todoStore {
    todos: TodoType[]  = [{
        id:'31',
        title: 'Hi!',
        complete:false,
        date: '02-02-2023',
        user: null,
        releaseDate:'03-02-2023',
    }];

    users: UserType[] = [
        {id:'1', name:'Dave', avatar: John},
        {id:'2', name:'Tom', avatar: John},
        {id:'3', name:'John', avatar: John},
    ];


    constructor() {
       makeAutoObservable(this)
    }


    addTodo(title:string) {
        const newTodo = {
            id: nanoid(3),
            title,
            complete: false,
            date: new Date().toLocaleString(),
            user: null,
            releaseDate:'',
        }

        this.todos.push(newTodo)
        console.log(this.todos.length)


    }

    completeTodo(id:string) {
       const oldTodo = this.todos.find(todo => todo.id === id)
        if (oldTodo) {
            oldTodo.complete = true
        }
    }

    deleteTodo(id:string) {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    changeTodo(id:string,title:string) {
        const oldTodo = this.todos.find(todo=> todo.id === id)
        if (oldTodo) {
            oldTodo.title = title
        }
    }

    choseUser(id:string,name:string) {
        const task = this.todos.find(todo => todo.id === id)
        const user = this.users.find(user=> user.name === name)
        if (task && user) {
            task.user = user
        }
    }

    deleteUser(id:string,name:string) {
        const task = this.todos.find(todo => todo.id === id)
        const user = this.users.find(user=> user.name === name)
        if (task && user) {
            task.user = null
        }
    }

    addReleaseDate(date:string, id:string) {
        const todo = this.todos.find(todo=> todo.id === id)
        if (todo) {
            todo.releaseDate = date
        }
    }

    get completedTodos() {
            return this.todos.filter(todo=> todo.complete).length
    }

    // get failed() {
    //     const currentDate:string = Date.now().toLocaleString()
    //     if (this.releaseDate === currentDate) return `It's your last day!`
    //     if (new Date(this.releaseDate) < new Date(currentDate)) return `You have failed!`
    // }
}

export default  new todoStore()


