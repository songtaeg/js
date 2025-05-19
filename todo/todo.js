const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos=[];

function saveToDos(){
     localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

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
     toDos.push(newTodo);
     //console.log(newTodo, toDoInput.value);
     paintToDo(newTodo);
     saveToDos();
}

toDoForm.addEventListener("submit",handleTodoSubmit);

// function say(item){
//      console.log("this is turn of",item);
// }
const savedToDos = localStorage.getItem(TODOS_KEY);

console.log(savedToDos);

if(savedToDos !== null){
     const parsedToDos = JSON.parse(savedToDos);
     toDos=parsedToDos;
     //console.log(parsedToDos);
    //parsedToDos.forEach((item) => console.log("this is the turn of ", item));
    parsedToDos.forEach(paintToDo);
}