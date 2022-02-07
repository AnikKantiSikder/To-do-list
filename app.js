
const task = document.getElementById('task');
const dueDate = document.getElementById('duedate');
const btn = document.getElementById('btn');
const taskList = document.getElementById('task-list');

btn.addEventListener('click', function(e){
    e.preventDefault();
    //console.log('Hello');
    if(task.value == '' && dueDate.value == ''){
        alert('Please enter value');
    } else{
        const newRow = document.createElement('tr');

        //Creating new task
        const newTask = document.createElement('th');
        newTask.innerHTML = task.value;
        newRow.appendChild(newTask);
        //Creating new due date
        const newDueDate = document.createElement('th');
        newDueDate.innerHTML = dueDate.value;
        newRow.appendChild(newDueDate);

        //View the data
        taskList.appendChild(newRow);
    }
});
