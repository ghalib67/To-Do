import ToDo from "./to-do";

function Project(name, todo = []){  
    if (!Array.isArray(todo)) {
        throw new Error("checklist must be an array");
    }

    this.name = name
    this.todoList = todo

    this.appendTodo = function(item){
        this.todoList.push(item)
    }
}

export default Project