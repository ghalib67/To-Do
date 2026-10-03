function Project(todo = []){  
    if (!Array.isArray(checklist)) {
        throw new Error("checklist must be an array");
    }

    this.todoList = todo
}