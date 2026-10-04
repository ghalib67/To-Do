import ToDo from "./to-do";

function Project(todo = []){  
    if (!Array.isArray(checklist)) {
        throw new Error("checklist must be an array");
    }

    this.todoList = todo

    this.appendTodo = function(item){
        this.todoList.push(item)
    }
}

export default Project