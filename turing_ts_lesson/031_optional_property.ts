interface TodoModel{
    id: string;
    title: string;
    complete?: boolean;
}

let todo: TodoModel = {
    id: "1",
    title: "Learn TypeScript",
    complete: false
};
console.log('Todo', todo);

todo = {
    id: "2",
    title: "Learn Javascript",
}
console.log('Todo', todo);
