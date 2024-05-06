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




// add.addEventListener("click",getTask);

// //event edit ,delete
// task.addEventListener("click",function(e){
  
// if(e.target.classList.contains("edit")){
//  console.log("edit",e.target)

// }
// if(e.target.classList.contains("delet")){
//   const data=e.target.parentElement.dataset.id;
//   console.log("delet",e.target)
//   if(data){
//     deletElem(data)
//   }
//  }
// });
// //delete
// function deletElem(data){
//   const liList=document.querySelector("#ulElem li");
//   console.log("lisssssst",liList)
//   if(liList){
//    liList.remove(data)
//   }
// }






//  if(liElem){
//   liElem.innerHTML=inputValue;
//   ulElem.append(liElem);
//   inputElem.value="";
//  }
//   if(liElem){
  
//     let deleteElem=document.createElement("span");
//     deleteElem.className="material-symbols-outlined";
//     deleteElem.innerHTML="delete"
//     deleteElem.addEventListener("click",function(){
//     liElem.remove()
//   })
//   liElem.append(deleteElem)
// }
// let editElem=document.createElement("i");

// editElem.className="material-symbols-outlined";
// editElem.innerHTML="edit";
// liElem.append(editElem);

// editElem.addEventListener("click",function(){
 
//   liElem.remove()
//   inputElem.value=liElem.innerText;
  
// })
