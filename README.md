# 🚀 Raw GraphQL ToDo App

A **raw** ToDo app built with **Express**, **GraphQL**, and a simple **Vanilla JavaScript frontend**. No Apollo Server, no fancy frameworks, just pure GraphQL goodness in the backend and a basic frontend to get things done! 🦾✅

Perfect for learning how to build APIs and interact with them through a simple UI. 😎

---

## 📂 Project Structure

```
.
├── client/        # Frontend (Vanilla JS, HTML, CSS)
│   ├── index.html
│   ├── app.js
│   └── style.css
├── server/        # Backend (Express, GraphQL)
│   ├── index.js
│   └── package.json
└── README.md      # This readme file
```

- **Client**: A basic **Vanilla JavaScript** frontend that interacts with the GraphQL API.
- **Server**: A **GraphQL API** built with **Express** and **GraphQL** (no Apollo), managing ToDos through queries and mutations.

---

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) and npm
- Basic knowledge of GraphQL and JavaScript (you'll learn the rest here 😉)

---

## 🚀 Getting Started

### 1. Clone the repository:

```bash
git clone https://github.com/gaju91/todo-graphql.git
cd todo-graphql
```

### 2. Setup Backend (Server):

Navigate to the `server` directory, install dependencies, and start the server:

```bash
cd server
npm install
npm start
```

The server will start at [http://localhost:4000/graphql](http://localhost:4000/graphql) with the GraphQL Playground enabled.

### 3. Setup Frontend (Client):

Navigate to the `client` directory and open the `index.html` file in your browser:

```bash
cd ../client
open index.html   # or just open it manually in your browser
```

The frontend will now be available to interact with the GraphQL API.

---

## 🖥️ Frontend Details (Client)

The frontend is located in the `client` folder and is built using **Vanilla JavaScript**, **HTML**, and **CSS**. It provides a basic UI to:

- **Add ToDos** 🆕
- **Fetch and Display ToDos** 📄
- **Toggle ToDos** (mark as completed or not) ✅❌
- **Delete ToDos** 🗑️

---

## ⚙️ Backend Details (Server)

The backend, located in the `server` folder, is a **GraphQL API** built with **Express** and **GraphQL** (without Apollo). It uses an in-memory array to store ToDos.

### GraphQL Schema:

- **ToDo Type**: Represents a task with an ID, task name, and completion status.
- **Queries**:
  - `todos`: Fetch all ToDos.
- **Mutations**:
  - `addTodo`: Create a new ToDo.
  - `toggleTodo`: Toggle the completed status of a ToDo.
  - `removeTodo`: Delete a ToDo.

### Example GraphQL Queries & Mutations:

#### Fetch All ToDos:

```graphql
{
  todos {
    id
    task
    completed
  }
}
```

#### Add a ToDo:

```graphql
mutation {
  addTodo(task: "Build frontend") {
    id
    task
    completed
  }
}
```

#### Toggle a ToDo:

```graphql
mutation {
  toggleTodo(id: "1") {
    id
    task
    completed
  }
}
```

#### Remove a ToDo:

```graphql
mutation {
  removeTodo(id: "1") {
    id
    task
  }
}
```

---

## 🛣️ Future Enhancements

- **Database Integration**: Persist data by connecting the backend to a database like MongoDB, SQLite, or PostgreSQL.
- **UI Improvements**: Expand the frontend using a modern framework like **React** or **Vue**.
- **Authentication**: Implement user authentication to secure the API.

---

## 🤓 Learning Objectives

This project will help you:
- Learn how to build a **GraphQL API** with **Express** and **GraphQL** (without Apollo).
- Learn how to interact with the GraphQL API from a **Vanilla JavaScript** frontend using `fetch`.
- Understand the basics of building a full-stack app from scratch.

---

## 💡 Conclusion

This project is designed to be a **simple, no-frills** introduction to building a full-stack GraphQL app with separate frontend and backend components. 🛠️💥 Feel free to extend it, break it, or improve it as you learn! 😄

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Feel free to star ⭐ the repo if you find it helpful and happy coding! 😎🎉
