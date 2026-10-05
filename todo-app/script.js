function addTask() {
  const input=document.querySelector('.task-input');
  const todoItem = input.value.trim();
  if (!todoItem) {
    alert("Enter a task!");
    return;
  }
  let list=document.querySelector("ul");
  if(!list){
    list=document.createElement('ul');
    document.querySelector("#input").after(list);
  }
  const listItem=document.createElement('li');

  const checkBox=document.createElement('input');
  checkBox.type='checkbox';
  checkBox.addEventListener("click",completeTask);
  
  const deleteBtn=document.createElement('button');
  deleteBtn.textContent="Delete";
  deleteBtn.classList='delete';
  deleteBtn.addEventListener("click",deleteTask);

  listItem.append(checkBox, todoItem , deleteBtn);
  list.appendChild(listItem);
  input.value=" ";

  const deleteAllBtn=document.querySelector('.delete-all');
  deleteAllBtn.style.display='block';

}

function completeTask(event){
  if(event.target.type==="checkbox"){
    const li=event.target.parentElement;
    if(event.target.checked){
      li.style.textDecoration="line-through"
    }
    else{
      li.style.textDecoration="none";
    }
  }
}

function deleteTask(event){
  const li=event.target.parentElement;
  li.remove();
}

function deleteAllTask(event){
  const list=document.querySelector('ul');
  list.innerHTML="";
}
const button = document.querySelector(".add-btn");
button.addEventListener("click",addTask);

const deleteAll=document.querySelector(".delete-all");
deleteAll.addEventListener("click",deleteAllTask);