const inputBox = document.querySelector(".input-task");
const listPlace = document.querySelector(".list-area");
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();
const currentTime = day + "/ " + month + "/ " + year;

inputBox.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    addItem();
  }
});
function addItem() {
  if (inputBox.value.trim() === "") {
    alert("Please, add a valid task!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listPlace.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    let p = document.createElement("p");
    if (month < 10) {
      const currentTime = day + "/ " + "0" + month + "/ " + year;
      p.textContent = "Added on: " + currentTime;
      li.appendChild(p);
    } else {
      const currentTime = day + "/ " + month + "/ " + year;
      p.textContent = "Added on: " + currentTime;
      li.appendChild(p);
    }
    li.appendChild(span);
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
  localStorage.setItem("data-task", listPlace.innerHTML);
}
function showTask() {
  listPlace.innerHTML = localStorage.getItem("data-task");
}
showTask();
