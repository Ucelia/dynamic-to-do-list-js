document.addEventListener ('DOMContentLoaded', function (){
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask (){
        const taskText = taskInput.value.trim();
        if (taskText.isEmpty){
            alert ('Enter a task:');
            return;
        }
        else {
            const taskLists = document.createElement('li');
            taskLists.textContent = taskText;
            taskLists.classList.add('task-item');
            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.className = 'remove-btn';
            removeBtn.addEventListener('click', function(){
                taskLists.remove();
            });
                taskLists.appendChild(removeBtn);
                taskList.appendChild(taskLists);
                taskInput.value='';
        }
    }
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event){
        if(event.key== 'Enter'){
            addTask();
        }
    }) 
});