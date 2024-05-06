const inputElem=document.querySelector("#inputElem");
const ulElem=document.querySelector("#ulElem");
const form=document.querySelector(".box-task");
const add=document.querySelector(".add-todo");
const task=document.querySelector(".clm-right");

//add task
const getTask=(e)=>{
    e.preventDefault()
  let inputValue=inputElem.value;
if(inputValue){
  ulElem.innerHTML+=`<li class="liElm">
  <span class="todo-list"><i class="todo-text-box"></i>${inputValue}</span>
  <i class="material-symbols-outlined delete">delete</i>
  
  </li>`
}

inputElem.value=""
const deleteTask = document.querySelectorAll(".delete");
deleteEachTask(deleteTask)
};

add.addEventListener("click",getTask);

function deleteEachTask(btn){
  btn.forEach((item) => {
    item.addEventListener("click", function () {
        item.parentElement.remove();
    })
  })
}





  
