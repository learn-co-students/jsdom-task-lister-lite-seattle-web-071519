document.addEventListener("DOMContentLoaded", () => {
  // your code here
  createTasks = document.querySelector("#create-task-form")
  sort = document.querySelector("#sort")
  sort.addEventListener("click", sortList)
  createTasks.addEventListener("submit", handleButtonClick)
  let tasks = document.querySelector("#tasks")
});

function sortList() {
  let items = task.getElementsByTagName("div")
  tasks = document.querySelector("#tasks")
  for (let i = 0; i < items.length; i++) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].style["background-color"] == "hotpink") {
        let currentItem = items[i]
        tasks.prepend(currentItem)
      } else if (items[i].style["background-color"] == "lightgreen") {
        let currentItem = items[i]
        tasks.append(currentItem)
      }
    }
  }
}


function handleButtonClick(e) {
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

  if (e.target.priority.value == "high") {
    div.style = "background-color:hotpink"
  } else if (e.target.priority.value == "medium") {
    div.style = "background-color: orange"
  } else {
    div.style = "background-color: lightgreen"
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

function handleCheckEvent(e) {
  e.target.parentElement.firstChild.innerHTML = `<strike>${e.target.parentElement.firstChild.textContent}</strike>`
}

function handleEditEvent(e) {

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

function handleDeleteEvent(e) {
  e.target.parentElement.remove()
}

