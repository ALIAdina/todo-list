const input = document.getElementById("todo-input");
const button = document.getElementById("add-btn");

const list = document.getElementById("todo-list");

button.addEventListener("click", function () {
  const taskText = input.value.trim();
  if (taskText != "") {
    const li = document.createElement("li");
    li.textContent = taskText;
    list.appendChild(li);
    const deletbtn = document.createElement("button");
    deletbtn.textContent = "supprimer";
    deletbtn.style.marginLeft = "70px";
    li.appendChild(deletbtn);
    deletbtn.addEventListener("click", function () {
      list.removeChild(li);
    });
    input.value = "";
  } else {
    alert("veuillez saiser un tache");
  }
});
