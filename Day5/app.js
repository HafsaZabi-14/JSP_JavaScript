let inp = document.getElementById('todo-input');
let todos = [];

function addTodo()
{
    if(inp.value == '')
    {
        alert('Please fill the input');
        return
    }
    todos.push(inp.value);
    inp.value = '';
    renderlist(todos)
}

function deleteTodo(idx)
{
    todos.splice(idx,1);
    console.log(todos);
    renderlist(todos)
}

function renderlist(todos)
{
    let list = document.getElementById('list');
    list.innerHTML = ''
    for(let i=0; i<todos.length; i++)
    {
        let li = document.createElement('li');
        li.innerHTML = `${todos[i]} <button onclick = ${`deleteTodo(${i})`}>Delete</button>`
        list.appendChild(li);
        
    }
}