const express = require('express');
const cors = require('cors');
const { graphql, buildSchema } = require('graphql');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const database = {
    idCounter: 1,
    todos: []
};

const todoSchema = buildSchema(`
    type ToDo {
        id:         ID!,
        task:       String!,
        completed:  Boolean!
    }

    type Query {
        todos: [ToDo]
    }

    type Mutation {
        addToDo     (task   : String!): ToDo
        removeToDo  (id     : ID!    ): ToDo
        toggleToDo  (id     : ID!    ): ToDo
    }
`)

const root = {
    todos: () => database.todos,
    addToDo: ({ task }) => {
        const newTodo = {
            task: task,
            id: database.idCounter++,
            completed: false
        };

        database.todos.push(newTodo);
        return newTodo;
    },
    removeToDo: ({ id }) => {
        const todoIndex = database.todos.findIndex(todo => todo.id == id);
        if (todoIndex === -1) return null;
        const removedTodo = database.todos.splice(todoIndex, 1);
        return removedTodo[0];
    },
    toggleToDo: ({ id }) => {
        const todo = database.todos.find(({ id: tId }) => tId === id);
        if (!todo) return null;
        todo.completed = !todo.completed;
        return todo;
    }
};

app.post('/graphql', async (req, res) => {
    const { query, variables } = req.body;
    const response = await graphql({
        schema: todoSchema,  // Ensure the schema is passed here
        source: query,
        rootValue: root,
        variableValues: variables
    });
    
    res.json(response);
});

app.listen(4002, () => {
    console.log(`Server is running on http://localhost:4000/graphql`);
})