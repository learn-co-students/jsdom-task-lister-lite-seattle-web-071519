document.addEventListener("DOMContentLoaded", () => {createTasks = document.querySelector("#create-task-form")
sort = document.querySelector("#sort")
sort.addEventListener("click", sortList)
createTasks.addEventListener("submit", handleButtonClick) 
let task = document.querySelector("#tasks")

function sortList(){
  let items = task.getElementsByTagName("div")
  task = document.querySelector("#tasks")
  for (let i = 0; i < items.length; i++){
  for (let i = 0; i < items.length; i++){
    // console.log(items[i].style["background-color"])
    if (items[i].style["background-color"] == "hotpink"){
      let currentItem = items[i]  
      task.prepend(currentItem)
      
    }
    else if (items[i].style["background-color"] == "lightgreen"){
      let currentItem = items[i]  
      task.append(currentItem)
  }
  // return items
}
}
}
function handleCheckEvent(e){
  console.log(e.target.parentElement.firstChild)
  e.target.parentElement.firstChild.innerHTML = `<strike>${e.target.parentElement.firstChild.textContent}</strike>`
}


function handleButtonClick(e){
  

  e.preventDefault()
  let div = document.createElement("div")
  let li = document.createElement("li")
  let checkBox = document.createElement("input")
  checkBox.type = "checkbox"
  
  checkBox.addEventListener("click", handleCheckEvent)

  li.innerText = e.target["new-task-description"].value
 
  div.appendChild(li)
  div.appendChild(checkBox)
  e.target["new-task-description"].value = ""

  if (e.target.priority.value == "high"){
    div.style = "background-color:hotpink"
  }
  else if (e.target.priority.value == "medium"){
    div.style = "background-color:orange"
  }
  else {
  div.style = "background-color:lightgreen"
  }
  let dltButton = document.createElement("button")
  dltButton.innerText = "Delete Task"
  dltButton.addEventListener("click", handleDeleteEvent)
  div.appendChild(dltButton)

  let editButton = document.createElement("button")
  editButton.innerText = "Edit Task"
  editButton.addEventListener("click", handleEditEvent)
  div.appendChild(editButton)
  task.appendChild(div)
}

function handleEditEvent(e){
  console.log(e.target.parentElement.firstChild)

    let txt;
    let person = prompt("Edit Task:", e.target.parentElement.firstChild.textContent);
    if (person == null || person == "") {
      txt = e.target.parentElement.firstChild.textContent;
    } else {
      txt = person;
    }
    // document.getElementById("demo").innerHTML = txt;
    e.target.parentElement.firstChild.textContent = txt;
}

function handleDeleteEvent(e){
  console.log(e.target.parentElement.remove())
}

});
// Stretch Deliverables:
// If you finish early, try to implement one or more of the following:

// A delete function that will remove tasks from your list
// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM