const button = document.querySelector('.add-task-button')
const input = document.querySelector('.input-task')
const completeList = document.querySelector('.list-tasks')
const errorMessage = document.querySelector('.error-message'); // (ChatGPT)


let listItems = []

const defaultTasks = ["Stretch", "Drink water"]; // (ChatGPT)Tarefas padrão

// (ChatGPT)Adicione as tarefas padrão à lista inicial
listItems = listItems.concat(defaultTasks.map((task) => ({ task, completed: false })));


function addNewTask () {
    const taskText = input.value.trim();

    if (taskText !== '') {
        listItems.push({
            task: taskText,
            completed: false
        });

        input.value = '';
        exibitTask();
        
        // Oculte a mensagem de erro (se estiver visível)
        errorMessage.style.display = 'none';
    } else {
        // Exiba a mensagem de erro
        errorMessage.style.display = 'block';
    }
}

function exibitTask () {

    let newLi = ''

    listItems.forEach((taskItem, index) => {
        newLi = newLi + `


        <li class="task ${taskItem.completed && "done"}">
                <p>${taskItem.task}</p>
                    <div class="task-icons">
                        <img src="./img/check.svg" alt="check" onclick="taskCompletion(${index})">
                        <img src="./img/delete.svg" alt="delete" onclick="deleteItem(${index})">
                    </div>
               </li>
        `

    })

    completeList.innerHTML = newLi

}

function taskCompletion(index) {
    listItems[index].completed = !listItems[index].completed
    console.log(index)
    exibitTask()
}

function deleteItem(index){
    listItems.splice(index,1)
    console.log(index)

    exibitTask();
}

button.addEventListener('click', addNewTask)


// (ChatGPT)Chame exibitTask() para exibir as tarefas padrão inicialmente
exibitTask();


