<link rel="stylesheet" href="../../.images/styles.css"></link>
<aside instruction>
<div map></div>

<div>
We're going to go further in this "Hello World". We're going to create a tiny little todo list. In this section you'll:

- create your first component
- use the `useState` hook
- add a form to add new todos
- add a submit handler to the form
- add new todos to the list

We'll be moving quickly through this section. If you don't fully understand what you're doing, that's okay. **_Bring those questions to the review_** We'll dig deeper into every part of this throughout the lectures and labs to follow.

</div>

</aside>

## Create a Todo List

<aside instruction>
<div by-hand></div>
Do keep typing things out by-hand in this section. It's okay if you don't fully finish, I'll review this section live.
</aside>

First, we'll need to create a component for our todo list. Create a file called `TodoList.js` in your solution folder.

Next, we'll need to create a component. We'll call it `TodoList` and it will be a function that returns some jsx.

```js
function TodoList() {
  return <div>Todo List</div>;
}
```

Now we'll need to export that component so we can use it in other files.

```js
export TodoList;
```

Now we can import that component in `main.js` and render it to the page.

```js
import React from "react";
import ReactDOM from "react-dom/client";
import { TodoList } from "./TodoList";

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);

ReactDOM.render(<TodoList />, root);
```

<aside check>
Take a look at your browser.
You should see it has reloaded with the new content.
<div look></div>
</aside>

Now we're going to add a little bit of state to our component. We're going to use the `useState` hook to keep track of our todo items.

```js
import React, { useState } from "react";
//              👆 add the useState import

// 👇 create some initial todos
const initialTodos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Finish the first lab" },
  { id: 3, text: "Come to review with questions" },
];

function TodoList() {
  // 👇 add the useState hook ...    👇 with the initial data
  const [todos, setTodos] = useState(initialTodos);

  return <div>Todo List</div>;
}

export TodoList;
```

Now we can use that state to render our todo items to the page.

```js
function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div>
      <h1>Todo List</h1>
      {/* 👇 add a list for the todos */}
      <ul>
        {/* 👇 map over the todos and render an li for each */}
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.text}</li>;
        })}
      </ul>
    </div>
  );
}
```

<aside check>
Take a look at your browser.
You should see a list of todos.
<div look></div>
</aside>

<aside note>
<div questions></div>
You might have questions about the `key` prop on the `li` element. Make a note and bring them to review or do some searching on your own if you finish early.
</aside>

Now we're going to add a little bit of interactivity to our todo list. We're going to add a `<form>` element with an `<input>` and a `<button>`.

```js
function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      {/* 👇 add a form to add new todos */}
      <form>
        <input id="todoText" type="text" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
```

Now, we'll add a submit handler to our form to add new todos to the list.

```js
function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  // 👇 add a function to add new todos to the list
  function addTodo(event) {
    const todoText = event.target.elements.todoText.value;
    if (todoText === "") {
      return;
    }
    event.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      text: todoText,
    };
    setTodos([...todos, newTodo]);
    event.target.reset();
  }

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
      {/* 👇 bind the function to the submit event on the form  */}
      <form onSubmit={addTodo}>
        <input id="todoText" type="text" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
```

<aside check>
Take a look at your browser.
You should see a list of todos.
<div look></div>
</aside>

<aside goal>
  <div goal></div>
You made it! You've built a tiny little todo list with react.
</aside>

<aside note>
<div questions></div>
You might have questions about... all of this. Review the source code you've written and reflect on what is familar and what is new. Bring those questions to review.
</aside>
