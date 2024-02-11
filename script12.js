const todoitem = document.getElementsByClassName("todo")[0];
const input = document.getElementById("input");
const submit = document.querySelector(".submit");

submit.onclick = () => {
  if (input.value !== "") {
    addItem();
  }
};

function addItem() { 
  todoitem.innerHTML +=   
  `<div class="Parent">
     <div class="child">
         <div class = "task">${input.value}</div>
            <div class="buttons">
                <i class="fa-regular fa-square-check checkIcon"></i>
                <i class="fa-solid fa-trash trashIcon"></i>
            </div>                
        </div>
    </div>`;
  input.value = "";
}

todoitem.addEventListener("click", function (event) {
    let trashIcon = event.target.closest(".trashIcon");
  
    if (trashIcon) {
      let Parent = trashIcon.closest(".Parent");
      Parent.remove();
    }
  });
  
  
todoitem.addEventListener("click", function (swati) {
    let task = swati.target.closest(".Parent")

    let checkIcon = swati.target.closest(".checkIcon");
    if(checkIcon){
        if (checkIcon.style.color === "goldenrod") {
            checkIcon.style.color = "white";
            task.querySelector(".task").innerHTML = `<div>${task.querySelector(".task").innerText}</div>`;
        } else {
            checkIcon.style.color = "goldenrod";
            task.querySelector(".task").innerHTML = `<del>${task.querySelector(".task").innerText}</del>`;

        }
    }
});
