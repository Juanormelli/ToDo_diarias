
    const cards =document.querySelectorAll(".card")
    const dropzones=document.querySelectorAll(".dropzone")
    cards.forEach((card)=>{
      card.addEventListener("dragstart",dragstart)
      card.addEventListener("drag",drag)
      card.addEventListener("dragend",dragend)
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




const newTask=document.querySelector(".newTask").addEventListener("click", createNewTask)

function createNewTask(){
  const addTask=document.querySelector(".card").cloneNode(true)

  cards.forEach((card)=>{
    card.addEventListener("dragstart",dragstart)
    card.addEventListener("drag",drag)
    card.addEventListener("dragend",dragend)

  })
  document.querySelector(".dropzone").appendChild(addTask)
}


