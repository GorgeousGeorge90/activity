export type User = {
    id: string,
    name: string,
    avatar: string,
}

export type TodoType = {
    id:string,
    title:string,
    complete:boolean,
    date:string,
    user:object | null,
}

export type BoardType = {
    id: string,
    name: string,
    todos: TodoType[],
}