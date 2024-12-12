export interface User {
    id:string,
    avatar:string,
    name:string
}
export interface UserTask{
    id:string,
    userId:string,
    title:string,
    summary:string,
    dueDate:string
}
export interface TaskData{
    title:string,
    summary:string,
    date:string,
}

// type User={
//   id:string,
//   avatar:string
//   name:string
// }