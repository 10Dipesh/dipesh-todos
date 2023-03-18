//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');


const addTodo = (e) => {
    e.preventDefault();
   const todoDiv = document.createElement('div');
   todoDiv.classList.add("todo");
   const newTodo = document.createElement('li');
   newTodo.innerText = todoInput.value;
   newTodo.classList.add('todo-item');
   todoDiv.appendChild(newTodo);
   const completedButton = document.createElement('button');
   completedButton.innerHTML= '<li class="fas fa-check"></li>';
   completedButton.classList.add('completed-btn');
   todoDiv.appendChild(completedButton);
   const trashButton = document.createElement('button');
   trashButton.innerHTML= '<li class="fas fa-trash"></li>';
   trashButton.classList.add('trash-btn');
   todoDiv.appendChild(trashButton);
   todoList.appendChild(todoDiv);
   todoInput.value="";
}
todoButton.addEventListener("click",addTodo);

const deleteCheck=(e)=>{
    const item = e.target;
    if(item.classList[0]==='trash-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener('transitionend',()=>{
            todo.remove();
        });
    }

    if(item.classList[0]==="completed-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}
todoList.addEventListener('click',deleteCheck);

const  filterTodo = (e)=> {
    const todos = todoList.childNodes;
    todos.forEach((todo)=> {
        switch(e.target.value)
        {
          case "all":
            todo.style.display='flex';
            break;
            
            case "completed":
                  if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                  }
                  else{
                    todo.style.display = 'none';
                  }
                  break;
             case "uncompleted":{
                if(!todo.classList.contains('completed')){
                    todo.style.display ='flex';
                }
                else{
                    todo.style.display = 'none';
                }
             }     
             break;
        }
    });
}

filterOption.addEventListener('click',filterTodo); 