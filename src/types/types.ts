export type UserType = {
    id: string,
    name: string,
    avatar: string,
}


export type TodoType = {
    id:string,
    title:string,
    complete:boolean,
    date:string,
    user: UserType | null,
    releaseDate: string,
}

export type BoardType = {
    id: string,
    name: string,
    todos: TodoType[],
}

export type NewOptions = {
    value:string,
    label:string
}