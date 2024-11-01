const todoForm = document.querySelector("form") ;
const todoInput = document.getElementById('todo-input') ;
const todoListUl = document.getElementById('todo-list') ;

let allTodos =getTodos() ;
updateTodoList();

todoForm.addEventListener('submit' , (e) =>{
    e.preventDefault() ;
    //to prevent reloading the page after submitting in form.
    addTodo() ;
});

function addTodo(){
    const todoText = todoInput.value.trim() ;
    if(todoText.length > 0 ){
        const todoObject = {
            text : todoText ,
            completed : false
        }

        allTodos.push(todoObject) ;
        updateTodoList() ;
        saveTodo();
        todoInput.value = '';
    }
};

function updateTodoList(){
    todoListUl.innerHTML = "" ;
    allTodos.forEach((todo, todoIndex) => {
        todoItem = createTodoItem(todo, todoIndex) ;
        todoListUl.append(todoItem) ;
    });
} ;

function createTodoItem(todo, todoIndex){
    const todoId = "todo-" + todoIndex ;
    const todoLi = document.createElement('li') ;
    const todoText = todo.text ;
    todoLi.className = "todo" ;
    todoLi.innerHTML =`
    <input type="checkbox" id="${todoId}">
    <label class="custom-checkbox" for="${todoId}">
        <svg fill="transparent" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
        </svg>
    </label>
    <label for="${todoId}" class="todo-text">${todoText}</label>
    <button class="delete-btn">
        <svg fill="var(--secondary-color)" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
        </svg>
    </button>
    ` ;
    const deleteBtn = todoLi.querySelector(".delete-btn") ;
    deleteBtn.addEventListener('click' , () =>{
        deleteTodoItem(todoIndex) ;
    });
    const checkbox = todoLi.querySelector("input") ;
    checkbox.addEventListener("change" , () =>{
        allTodos[todoIndex].completed = checkbox.checked ;
        saveTodo() ;
    }) ;
    checkbox.checked = todo.completed ; 
    //to save the completed key in todo object, If it changes.
    return todoLi ; 
};

function saveTodo(){
    const todoJSON = JSON.stringify(allTodos) ;
    //.stringigy = converts the json object to a string 
    localStorage.setItem("todos",todoJSON) ;
    //A storage location is seted which has key "todos" and value todoJson "which is a object" .
}

function getTodos(){
    const todos = localStorage.getItem("todos") || "[]" ;
    // gets todos if any, or gets an empty array.
    return JSON.parse(todos);
    //.parse = converts the  string data into js object
}

function deleteTodoItem(todoIndex){
    allTodos = allTodos.filter((_, i) => i!== todoIndex );
    // IF i mathches todoIndex it will be excluded.
    saveTodo() ;
    updateTodoList() ;
}