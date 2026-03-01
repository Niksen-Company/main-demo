document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('new-todo');
  const list = document.getElementById('todo-list');

  let todos = JSON.parse(localStorage.getItem('todos')) || [];

  function save() {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  function render() {
    list.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      if (todo.done) li.classList.add('done');

      const span = document.createElement('span');
      span.className = 'task-text';
      span.textContent = todo.text;

      const actions = document.createElement('div');
      actions.className = 'actions';

      const toggleBtn = document.createElement('button');
      toggleBtn.className = 'btn-toggle';
      toggleBtn.textContent = todo.done ? 'Undo' : 'Done';
      toggleBtn.addEventListener('click', () => {
        todos[index].done = !todos[index].done;
        save();
        render();
      });

      const delBtn = document.createElement('button');
      delBtn.className = 'btn-delete';
      delBtn.textContent = 'Delete';
      delBtn.addEventListener('click', () => {
        todos.splice(index, 1);
        save();
        render();
      });

      actions.appendChild(toggleBtn);
      actions.appendChild(delBtn);
      li.appendChild(span);
      li.appendChild(actions);
      list.appendChild(li);
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    todos.push({ text, done: false });
    save();
    render();
    input.value = '';
    input.focus();
  });

  render();
});
