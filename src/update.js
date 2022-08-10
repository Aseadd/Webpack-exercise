function updateStatus(selectedTask) {
  let taskName = selectedTask.parentElement.lastElementChild;
  if (selectedTask.checked) {
    taskName.classList.add('checked');
    todos[selectedTask.id].status = 'completed';
  } else {
    todos[selectedTask.id].status = 'pending';
    taskName.classList.remove('checked');
  }
  localStorage.setItem('todo-list', JSON.stringify(todos));
}

export { updateStatus };
