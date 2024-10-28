document.addEventListener('DOMContentLoaded',()=>{
    let todosFromLS = JSON.parse(localStorage.getItem('todos'));
    if(todosFromLS){
        console.log(todos);
        todosFromLS.forEach(todo=>{todos.push(todo)});
        updateTodoList()
        updateProgressBar()
    }
})





let todos = [];



function storeTodosToLocalStorage(){
    localStorage.setItem('todos', JSON.stringify(todos))
}


let submit = document.getElementById('submit');
let todoInput = document.getElementById("todo-input");


submit.addEventListener('click', e=>{
    e.preventDefault();
    let todo = document.getElementById('todo-input').value;
    addTodo(todo);
    storeTodosToLocalStorage()
    document.getElementById('todo-input').value = ''
})

function addTodo(todo){
    todos.push({todo, isCompleted: false});
    updateTodoList();
    updateProgressBar();
}

function updateTodoList(){
    let todoList = document.querySelector(".task-list");
    todoList.innerHTML = '';
    todos.forEach((todo, index)=>{
        let elem = document.createElement('li');
        elem.classList.add('task') ;
        elem.innerHTML = `
                    <div class="task-title-container">
                    <input onclick="toggleCheck(${index})" type="checkbox" ${
          todo.isCompleted ? "checked" : ""
        }>
                    <div class=${todo.isCompleted ? "cross" : "task-title"}>${
          todo.todo
        }</div>
                    </div>
                    <div class="task-controls">
                        <i onclick="editTodo(${index})" class="fa-regular fa-pen-to-square edit"></i>
                        <i onclick="deleteTodo(${index})" class="fa-regular fa-trash-can delete"></i>
                    </div>`;
        todoList.appendChild(elem)

    })
    updateProgressBar()
    storeTodosToLocalStorage()
}

function toggleCheck(index){
    todos[index].isCompleted = !todos[index].isCompleted;
    updateTodoList()
    updateProgressBar();
}


function editTodo(index){
    todoInput.value = todos[index].todo;
    todos.splice(index, 1);
    updateTodoList()
    updateProgressBar();
}

function deleteTodo(index){
    todos.splice(index, 1);
    updateTodoList()
    updateProgressBar();
}

function updateProgressBar(){
    const progressBar = document.querySelector('.progress');
    let totalTasks = todos.length;
    let comletedTasks = todos.filter(todo=>todo.isCompleted == true).length;
    let progressPercentage = comletedTasks/totalTasks * 100;
    if(progressPercentage){
        progressBar.style.width = `${(comletedTasks/totalTasks)*100}%`;
    }else{
        progressBar.style.width = `0%`;
    }
    const score = document.querySelector('.score');
    score.textContent = `${comletedTasks} / ${totalTasks}`

    if(todos.length && totalTasks === comletedTasks){
        winAnimation()
    }
}

function winAnimation(){
    const duration = 2 * 1000,
      animationEnd = Date.now() + duration,
      defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // since particles fall down, start a bit higher than random
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        })
      );
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        })
      );
    }, 250);
}