document.addEventListener ('DOMContentLoaded', function (){
    
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    function addTask (taskText, save = true){
        taskText = taskInput.value.trim();
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
                removeTaskFromStorage(taskText);
            });
                taskLists.appendChild(removeBtn);
                taskList.appendChild(taskLists);
                
                if (save) {
                    saveTaskToStorage(taskText);
                }
                taskInput.value='';
        }

        function saveTaskToStorage(taskText) {
            const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

        function removeTaskFromStorage(taskText){
            const storedTasks = JSON.parse(localStorage.getItem ('tasks') || '[]');
            storedTasks = storedTasks.filter( task => task !==taskText);
            localStorage.setItem('tasks', JSON.stringify(storedTasks));
        }

    }
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event){
        if(event.key== 'Enter'){
            addTask();
        }
    });
    
    loadTasks();
});