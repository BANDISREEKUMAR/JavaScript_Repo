function addTask() {
  const input = document.getElementById("taskInput");
  const task = input.value.trim();
  if (task === "") return;

  const ul = document.getElementById("taskList");
  const li = document.createElement("li");
  li.textContent = task;
  ul.appendChild(li);

  input.value = "";
}
