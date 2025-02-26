const inputBox = document.querySelector(".input");
const listPlace = document.querySelector(".list-place");
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

inputBox.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    addTask();
  }
});

function addTask() {
  if (inputBox.value.trim() === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");

    let taskText = document.createElement("div");
    taskText.classList.add("task-text");
    taskText.innerText = inputBox.value;

    li.appendChild(taskText);

    let p = document.createElement("p");
    let currentTime = `${day}/${month < 10 ? "0" + month : month}/${year}`;
    p.textContent = "Added on: " + currentTime;
    li.appendChild(p);

    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);

    listPlace.appendChild(li);
  }
  inputBox.value = "";
  saveToData();
}

listPlace.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveToData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveToData();
    }
  },
  false
);
function saveToData() {
  localStorage.setItem("data", listPlace.innerHTML);
}
function showTask() {
  listPlace.innerHTML = localStorage.getItem("data");
}
showTask();
