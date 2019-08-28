document.addEventListener("DOMContentLoaded", main());


function main(){
  let submitButton = document.querySelector("#create-task-form")
  console.log(submitButton)
  submitButton.addEventListener("submit",handleSubmission)
}

function handleSubmission(event){
  
  console.log(event.target[2].value)
  // console.log(element.target.name)
  event.preventDefault()

  

  let taskie = {
    title: event.target[0].value,
    date: event.target[1].value,
    color: event.target[2].value
  }
  
  putIntoToDo(taskie)
}

function putIntoToDo(task){
  let tasky = document.getElementById('tasks')

  let newTask = document.createElement('h3')
  let newDate = document.createElement('p')

  newTask.innerText =  task.title
  newTask.contentEditable = "true"

  if(task.color == "low"){
    newTask.id = "a1"
  } else if (task.color == "medium"){
    newTask.id = "a2"
  } else {
    newTask.id = "a3"
  }

  newDate.innerText = task.date



  tasky.appendChild(newTask)
  newTask.appendChild(newDate)
  
  let deleteButton = document.createElement('button')
deleteButton.innerText = "Banged"
deleteButton.addEventListener("click",handleDeleteEvent)

  newTask.appendChild(deleteButton)


}

function handleDeleteEvent() {
  console.log(event.target.parentElement.remove())
}

function onSortButton(){
  let collectionOfItems = document.getElementById('tasks').children

  collectionOfItems.sort(compare(a,b){
    return parseInt
  }
}

function compare(a, b) {
  if (document.getElementById('tasks').children) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}