const todoForm=document.querySelector("#todoForm");
// console.log(todoForm);

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    const formData=new FormData(todoForm);
    const todoInput=formData.get('todoInput');
    // console.log(todoInput);
    const todoList=document.querySelector("#todoList");
    // console.log(todoList );
    const list=document.createElement("li");
    list.classList.add("list");

    const todoText=document.createElement("span");
    todoText.classList.add("todoText");
    todoText.textContent=todoInput;

    const todoCompleted=document.createElement("button");
    todoCompleted.classList.add("todoCompleted");
    todoCompleted.innerHTML='<i class="fa-solid fa-check"></i>'

    const todoDelete=document.createElement("button");
    todoDelete.classList.add("todoDelete");
    todoDelete.innerHTML='<i class="fa-regular fa-trash-can"></i>';
    list.appendChild(todoText);
    list.appendChild(todoCompleted);
    list.appendChild(todoDelete);
    todoList.prepend(list);
    // console.log(todoList);
    todoForm.reset();

    todoCompleted.addEventListener("click",()=>{
        todoText.classList.add("completed");
        todoCompleted.classList.add("disabled");
    });

    todoDelete.addEventListener("click",()=>{
        confirm("Are you sure?")&& list.remove();
    });

})





