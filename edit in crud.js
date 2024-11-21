function addTask() {

    let inputData = document.getElementById("enterData");
    let inputDataValue = inputData.value.trim()

    let allTasksContainer = document.querySelector("#tasks")

    let liTag = document.createElement("li");

    liTag.innerHTML += `
    ${inputDataValue}
     <button class="edit">Edit</button>
     <button class="delete">Delete</button> `

    liTag.style.listStyleType = "none"

    allTasksContainer.appendChild(liTag)

    let editBtn = liTag.querySelector(".edit")
    editBtn.style.backgroundColor = "blue"

    let dlteBtn = liTag.querySelector(".delete")
    dlteBtn.style.backgroundColor = "red"
    
    inputData.value = ""

    dlteBtn.addEventListener("click",function(){DeleteTask(liTag)})

    editBtn.addEventListener("click",()=>{
        editTask(liTag)
    })
}
function DeleteTask(taskElement){
    let confirmation=confirm("are you sure")
    if(confirmation){
        taskElement.remove()
    }
}
function editTask(item){
    let x=prompt("enter the data",item.firstChild.textContent)
    if(x!=null && x.trim()!=""){
    item.firstChild.textContent=x
    }
}