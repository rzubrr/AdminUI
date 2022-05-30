window.onload = check("todo1"), check("todo2"), check("todo3")

document.getElementById("tasks").style.height = "4.5rem"

let myTodos = 1;

function check(x) {
    const label = document.getElementById(`${x}Label`);
    if(document.getElementById(`${x}`).checked)
    {
        label.style.textDecoration = "line-through"
        label.style.color = "#999999"
    }
    else 
    {
        label.style.textDecoration = "none"
        label.style.color = "#545454"
    }
}

function addTodo() {

    if(document.getElementById("newTodo").value === "") return
    const todos = document.getElementById("tasks")
    const task = document.createElement("span")
    task.innerText = " " + document.getElementById("newTodo").value
    task.id = `myTodo${myTodos}Label`
    const myTodoBox = document.createElement("div")
    const myTodoCheck = document.createElement("input")
    myTodoCheck.type = "checkbox"
    myTodoCheck.name = `myTodo${myTodos}`
    myTodoCheck.id = `myTodo${myTodos}`
    myTodoCheck.setAttribute("onclick", `check(myTodo${myTodos})`)

    myTodoBox.appendChild(myTodoCheck)
    myTodoBox.appendChild(task)
    todos.appendChild(myTodoBox)

    myTodos++
}