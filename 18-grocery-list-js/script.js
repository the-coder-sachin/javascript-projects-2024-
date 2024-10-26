let list = document.querySelector('.list');
let input = document.querySelector('.input');
let submit = document.querySelector('.submit');
let isTaskEditable = false;
let editableTask;

let taskList = [];

toggleList()
function toggleList(){
    if (taskList.length == 0) {
      list.textContent = `you have not added any items yet...`;
    }
}

function toggleSubmit(){
    if (isTaskEditable) {
      submit.textContent = `update`;
    } else {
      submit.textContent = `submit`;
    }
}

submit.addEventListener('click', e=>{
    e.preventDefault();
    if(isTaskEditable){
        isTaskEditable = false;
        toggleSubmit()
        taskList.find(task=>{
            if(task == editableTask){
                task.task = input.value
            }
        })
        updateList();
        input.value = '';
    }else{
    let task = input.value.trim();
    if(task){
        taskList.push({task, isComplted: false, id: Date.now()});}
        updateList();
        input.value = '';
    }
})

function updateList(){
    list.innerHTML = '';
    taskList.forEach(task=>{
        let elem = document.createElement("div")
        elem.innerHTML = `<div class="item-container">
                <input ${
                  task.isComplted ? "checked" : ""
                } onclick="toggleComplete(${
          task.id
        })" type="checkbox" class="checkbox" name="" id="">
                <div id=${task.id} class=${
          task.isComplted ? "line-through item" : "item"
        }>${task.task}</div>
                <i id='edit' onclick="edit(${
                  task.id
                })" class="fa-solid fa-pen-to-square"></i>
                <i id='del' onclick="del(${
                  task.id
                })" class="fa-solid fa-trash-can"></i>
            </div>`;
        list.appendChild(elem)
    })
}

function toggleComplete(id){
    let elem = document.getElementById(id)
    taskList.find(task=>{
        if(task.id == id){
            task.isComplted = !task.isComplted;
        }
    })
    updateList()
}

function edit(id){
    isTaskEditable = true;
    toggleSubmit()
    let task = taskList.find(task=>{
        if(task.id == id){
          return task
        }
    })
    editableTask = task;
    input.value = task.task;
    
}

function del(id){
    let deltask = taskList.find((task) => {
      if (task.id == id) {
        return task;
      }
    });
    taskList = taskList.filter(task=>{
        return task.id !== deltask.id
    })
    updateList()
    toggleList()
}