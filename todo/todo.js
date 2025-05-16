const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
     //console.log("lalala")
     //console.log(event);
     //console.dir(event.target.parentElement);
     const li = event.target.parentElement;
     li.remove();
}

function paintToDo(newTodo){
     //console.log("i will paint",newTodo);
     const li = document.createElement("li");
     const span = document.createElement("span");
     span.innerText=newTodo;
     const button = document.createElement("button");
     button.innerText = "❌";
     button.addEventListener("click",deleteToDo);
     li.appendChild(span);
     li.appendChild(button);
     span.innerText=newTodo;
     //console.log(li);
     toDoList.appendChild(li);
}
function handleTodoSubmit(event){
     event.preventDefault();
     const newTodo = toDoInput.value;
     toDoInput.value="";
     //console.log(newTodo, toDoInput.value);
     paintToDo(newTodo);
}

toDoForm.addEventListener("submit",handleTodoSubmit);