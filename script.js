const inputBox=document.getElementById('inputBox');
const addBtn=document.getElementById('addBtn');
const todoList=document.getElementById('todoList');

let editTodo =null;

const addTodo =()=>{
    const inputText=inputBox.value.trim();
    if(inputText.length<=0)
        {
            alert("You must write something in your to do");
            return false;
        }
    if(addBtn.value==="Edit")
        {
            editTodo.target.previousElementSibling.innerHTML=inputText;
            addBtn.value="Add";
            inputBox.value ="";
        }
        else{
        const li=document.createElement("li");
        const p=document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);

        const editBtn=document.createElement("button");
        editBtn.innerHTML="Edit";
        editBtn.classList.add("btn","editBtn");
        li.appendChild(editBtn);

        const delteBtn=document.createElement("button");
        delteBtn.innerHTML="Remove";
        delteBtn.classList.add("btn","deleteBtn");
        li.appendChild(delteBtn);

        todoList.appendChild(li);
        inputBox.value="";
        }
}

const updateTodo =(e)=>{
    if(e.target.innerHTML === "Remove")
        {
            todoList.removeChild(e.target.parentElement);
        }
    if(e.target.innerHTML === "Edit")
        {
            inputBox.value = e.target.previousElementSibling.innerHTML;
            inputBox.focus();
            addBtn.value ="Edit";
            editTodo=e;
        }
}
 addBtn.addEventListener('click',addTodo);
 todoList.addEventListener('click',updateTodo);