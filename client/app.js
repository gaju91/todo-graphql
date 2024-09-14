// client/app.js

const apiUrl = 'http://localhost:4002/graphql';

// Function to run GraphQL queries and mutations
async function runGraphQL(query, variables = {}) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query, variables }),
  });
  const result = await response.json();
  return result.data;
}

// Function to fetch and display todos
async function loadTodos() {
  const query = `
    {
      todos {
        id
        task
        completed
      }
    }
  `;

  const data = await runGraphQL(query);
  const todoList = document.getElementById('todoList');
  todoList.innerHTML = ''; // Clear existing todos

  data.todos.forEach(todo => {
    const li = document.createElement('li');
    li.className = todo.completed ? 'completed' : '';
    li.innerHTML = `
      ${todo.task}
      <button class="delete" data-id="${todo.id}">Delete</button>
    `;
    li.addEventListener('click', () => toggleTodoCompletion(todo.id));
    todoList.appendChild(li);
  });

  // Add delete button functionality
  document.querySelectorAll('button.delete').forEach(button => {
    button.addEventListener('click', async (event) => {
      event.stopPropagation();
      const todoId = event.target.getAttribute('data-id');
      await removeTodo(todoId);
      loadTodos();
    });
  });
}

// Function to add a new todo
async function addToDo() {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value;

  if (!task) return;

  const mutation = `
    mutation AddTodo($task: String!) {
      addToDo(task: $task) {
        id
        task
        completed
      }
    }
  `;

  await runGraphQL(mutation, { task });
  taskInput.value = '';
  loadTodos();
}

// Function to toggle a todo's completion status
async function toggleTodoCompletion(id) {
  const mutation = `
    mutation ToggleTodoCompletion($id: ID!) {
      toggleToDo(id: $id) {
        id
        completed
      }
    }
  `;

  await runGraphQL(mutation, { id });
  loadTodos();
}

// Function to remove a todo
async function removeTodo(id) {
  const mutation = `
    mutation RemoveTodo($id: ID!) {
      removeToDo(id: $id) {
        id
      }
    }
  `;

  await runGraphQL(mutation, { id });
}

document.getElementById('addTodoButton').addEventListener('click', addToDo);

loadTodos();
