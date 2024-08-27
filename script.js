const todoForm=document.querySelector("#todoForm");
// console.log(todoForm);

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();

    const formData=new FormData(todoForm);
    const todoInput=formData.get('todoInput');
    // console.log(todoInput);

    const todoList=document.querySelector("#todoList");
    const list=document.createElement("li");
    list.classList.add("list");
    
    let dataConfig=[
        {types : "span",class:"todoText"},
        {types : "button", class : "todoCompleted", innerHTML:'<i class="fa-solid fa-check"></i>'},
        {types : "button", class : "todoDelete", innerHTML:'<i class="fa-regular fa-trash-can"></i>'}
    ]

    dataConfig.forEach((el)=>{
        // console.log(el);
        const element=document.createElement(el.types);
        element.classList.add(el.class);
        if(el.class==="todoText"){
            // console.log(element);
            element.textContent=todoInput; 
        }

        if(el.types==="button" && el.class==="todoCompleted"){
            element.innerHTML='<i class="fa-solid fa-check"></i>';
        }

        if(el.types==="button" && el.class==="todoDelete"){
            element.innerHTML='<i class="fa-regular fa-trash-can"></i>';
        }
        console.log(element);
        
        list.appendChild(element)
    });

    todoList.prepend(list);
    todoForm.reset();

    const todoCompleted=list.querySelector(".todoCompleted");
    const todoText=list.querySelector(".todoText");

    todoCompleted.addEventListener("click",()=>{
        todoText.classList.add("completed");
        todoCompleted.classList.add("disabled")
    });

    const todoDelete=list.querySelector(".todoDelete");

    todoDelete.addEventListener("click",()=>{
        if(confirm("Are you sure?")){
            list.remove();
        }
    })
    
})
