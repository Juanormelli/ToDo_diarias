
const deleteTask=document.querySelector(".delete-task")
const newTask=document.querySelector(".new-task").addEventListener("click", createNewTask)
function createNewTask(){
  const addTask= document.createElement("textarea")
  addTask.className="card"
  addTask.id="task"
  addTask.draggable=true
  document.querySelector(".dropzone").appendChild(addTask)
  const newCards=document.querySelectorAll(".card")
  newCards.forEach((card)=>{
    card.addEventListener("dragstart",dragstart)
    card.addEventListener("drag",drag)
    card.addEventListener("dragend", dragend)
  })

  function dragstart(){
    dropzones.forEach(dropzone=>dropzone.classList.add("highlight"))

    this.classList.add("is-dragging")

  }

  function drag(){
  console.log("ok")
  }

  function dragend(){
    dropzones.forEach(dropzone=>dropzone.classList.remove("highlight"))
    this.classList.remove("is-dragging")
  }

  const dropzones=document.querySelectorAll(".dropzone")

    dropzones.forEach((dropzone)=>{
      dropzone.addEventListener("dragenter",dragenter)
      dropzone.addEventListener("dragover",dragover)
      dropzone.addEventListener("dragleave",dragleave)
      dropzone.addEventListener("drop",drop)
    })

    function dragenter(){

    }
    function dragover(){
      this.classList.add("over")

      const cardIsDragging=document.querySelector(".is-dragging")
      this.appendChild(cardIsDragging)
      

    }
    function dragleave(){
      this.classList.remove("over")
    }
    function drop(){

    } 
deleteTask.addEventListener("dragenter",dragenterr)
deleteTask.addEventListener("dragover", dragoverr)
deleteTask.addEventListener("dragleave", dragleavee)
deleteTask.addEventListener("drop",dropp)

function dragenterr(){

}
function dragoverr(){
  this.classList.add("over2")

}

function dragleavee(){
  const dropDelete=document.querySelectorAll(".is-dragging")
  dropDelete.forEach((dropDel)=>{
    dropDel.remove(dropDelete)
  
})
  

this.classList.remove("over2")
}

function dropp(){

 
  
}




}

