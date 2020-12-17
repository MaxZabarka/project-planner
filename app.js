//Selectors
const addButtonElement = document.getElementById("addBtn");
const activeProjectsElement = document.querySelector(".active-projects");
const finishedProjectsElement = document.querySelector(".finished-projects");
const inputTextElement = document.querySelector(".input-container input");
const activeMessageElement = document.querySelector(".active-message");
const finishedMessageElement = document.querySelector(".finished-message");

//Event listeners
addButtonElement.addEventListener("click", () => {
  createProject(inputTextElement.value);
  inputTextElement.value = "";
});

function createProject(title) {
  const newProjectLi = document.createElement("li");
  newProjectLi.innerHTML = `
  <div>
    <h3>${title}</h3>
    <button type="button" class="switch-btn">Finish</button>
  </div>
  `;
  
  //add event listener to button
  activeProjectsElement.insertAdjacentElement("beforeend", newProjectLi);
  newProjectLi
    .querySelector(".switch-btn")
    .addEventListener("click", switchProject);
  //Add delete event listener
  newProjectLi.addEventListener("click", deleteProject);
  updateMessages();
}

function switchProject(e) {
  const listElement = e.toElement.parentElement.parentElement;
  const isActive = listElement.classList.contains("finished-projects");
  const switchButtonElement = listElement.querySelector(".switch-btn");

  console.log(isActive);
  if (isActive) {
    activeProjectsElement.insertAdjacentElement("beforeend", listElement);
    switchButtonElement.innerText = "Finish";
  } else {
    finishedProjectsElement.insertAdjacentElement("beforeend", listElement);
    switchButtonElement.innerText = "Activate";
  }
  listElement.classList.toggle("finished-projects");
  listElement.classList.toggle("active-projects");
  updateMessages();
}

function deleteProject(e) {
  h3Element = e.toElement;
  console.log(h3Element);
  if (h3Element.tagName === "H3") {
    h3Element.closest("ul").removeChild(h3Element.closest("li"));
    updateMessages();

  }
}

function updateMessages() {
  if (!activeProjectsElement.querySelector("li")) {
    activeMessageElement.classList.remove("invisible");
  } else {
    activeMessageElement.classList.add("invisible");
  }
  if (!finishedProjectsElement.querySelector("li")) {
    finishedMessageElement.classList.remove("invisible");
  } else {
    finishedMessageElement.classList.add("invisible");
  }
}
