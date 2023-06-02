/*// USING THE  DOM
const input = document.getElementById('newTaskInput');
const addTask = document.getElementById('addTask');
const sort = document.getElementById('fix');
const List = document.getElementById('tasks');
// Creating  an empty array to store the tasks
let tasklist = [];
// Creating a Function to render the tasks in the task list
function renderTasks() {
    // Clear the task list
  List.innerHTML = '';
  // Looping  through the tasks array
  for (let i = 0; i < tasks.length; i++) {
    const task = tasklist[i];
    // Creating a new list item for each task
    const listItem = document.createElement('li');
    // Creating  a checkbox for the task
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function () {
      // Toggling the completed state of the task
      task.completed = !task.completed;
      renderTasks(); // Rendering  the tasks to update the UI(user's interaction )
    });
    // Creating  a span element for the task name
    const taskName = document.createElement('span');
    taskName.innerText = task.name;
    // Adding  the necessary classes based on the completed state
    if (task.completed) {
      listItem.classList.add('completed');
    }
    // Creating  a button to remove the task
    const closeButton = document.createElement('span');
    closeButton.classList.add('close-btn');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function () {
      // Remove the task from the array
      tasklist.splice(i, 1);
      renderTasks(); // Render the tasks to update the UI
    });
    // Append the elements to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskName);
    listItem.appendChild(closeButton);
    // Append the list item to the task list
    List.appendChild(listItem);
  }
}
// Function to add a new task
function addTask() {
  const taskName = newTaskInput.value.trim();
  // Validate the task name
  if (taskName === '' || taskName.length < 4) {
    alert('Please enter a valid task name (at least 4 characters).');
    return;
  }
  // Creating a new task object
  const newTask = {
    id: tasks.length + 1,
    name: taskName,
    createdDate: new Date(),
    completed: false
  };
  // Adding  the new task to the tasks array
  tasks.push(newTask);
  // Clearing  the input field
  newTaskInput.value = '';
  // Rendering the tasks to update the UI
  renderTasks();
}
// Creating a Function to sort the tasks alphabetically
function sortTasks() {
  tasks.sort((a, b) => a.name.localeCompare(b.name));
  renderTasks(); // Render the sorted tasks
}
// Event listener for the add task button
addTaskButton.addEventListener('click', addTask);
// Event listener for the sort button
sortButton.addEventListener('click', sortTasks);
*/

document.querySelector("#addTask").onclick = function () {
  if (document.querySelector("#input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `
              <div class="task">
                              <button class="done">
                      <i class="far fa-trash-alt"></i>
                  </button>
                  <span id="name">
                      ${document.querySelector("#input").value}
                  </span>
                  <button class="remove">
                      <i class="far fa-trash-alt"></i>
                  </button>
              </div>
          `;

    let putted = document.querySelectorAll(".remove");
    for (let i = 0; i < putted.length; i++) {
      putted[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};

