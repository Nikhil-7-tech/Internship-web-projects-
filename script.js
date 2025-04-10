function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = taskValue;

  li.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  taskList.appendChild(li);
  taskInput.value = "";
}