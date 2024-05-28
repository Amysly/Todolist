const addtask = document.getElementById('add');
const inputtask = document.getElementById('task-input');
const listtask = document.getElementById('list');

addtask.addEventListener('click', function () {
  if (inputtask.value.trim() !== '') {
    const li = document.createElement('li');
    const taskText = document.createElement('span');
    const deleteButton = document.createElement('button');
    const checkButton = document.createElement('button');

    taskText.textContent = inputtask.value;
    taskText.classList.add('task-text');
    deleteButton.textContent = 'Delete';
    checkButton.textContent = 'Check';

    deleteButton.classList.add('delete');
    checkButton.classList.add('check');

    li.appendChild(taskText);
    li.appendChild(checkButton);
    li.appendChild(deleteButton);

    listtask.appendChild(li);

    deleteButton.addEventListener('click', function (e) {
      e.target.parentElement.remove();
    });

    checkButton.addEventListener('click', function () {
      li.style.textDecoration = 'line-through';
    });

    inputtask.value = '';
  } else {
    alert('Please enter a task.');
  }
});
