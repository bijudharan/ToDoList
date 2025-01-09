
const inputBox=document.querySelector('.inputField input');
const addBtn=document.querySelector('.inputField button');
const deleteAll=document.querySelector('.footer button');
const todoList=document.querySelector('.todoList');

inputBox.onkeyup=()=>{
    let userData=inputBox.value; 
    if(userData.trim() !=0 ){ 
        addBtn.classList.add('active');
    }else{
        addBtn.classList.remove('active');
    }
}
showTasks();
addBtn.onclick = ()=>{
    let userData=inputBox.value;
    let getLocalStorage = localStorage.getItem('New todo'); 
    if (getLocalStorage == null){
        listArr=[]; 
    }else{
        listArr=JSON.parse(getLocalStorage); 
    }
    listArr.push(userData);
    localStorage.setItem("New todo", JSON.stringify(listArr))  
    showTasks();
}

function showTasks(){
    let getLocalStorage = localStorage.getItem('New todo');
    if (getLocalStorage == null){
        listArr=[];
    }else{
        listArr=JSON.parse(getLocalStorage); 
    }
    const pendingNumb=document.querySelector('.pendingNumber');
    pendingNumb.textContent=listArr.length;
    let newLiTag='';
    listArr.forEach((element, index) => {
        newLiTag +=`<li>${element} <button onclick="deleteTask(${index})";>Delete</button></li>`;
    });
    todoList.innerHTML=newLiTag; 
    inputBox.value="";
}
function deleteTask(index){
    let getLocalStorage = localStorage.getItem('New todo');
    listArr=JSON.parse(getLocalStorage);
    listArr.splice(index, 1)
    localStorage.setItem("New todo", JSON.stringify(listArr))   
    showTasks();
}

deleteAll.onclick = ()=>{
    listArr= []; 
    localStorage.setItem("New todo", JSON.stringify(listArr)) 
    showTasks();
}