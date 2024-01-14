import { useState } from "react";

const initialTodos = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Finish the first lab" },
  { id: 3, text: "Come to review with questions" },
];

function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

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
      <form onSubmit={addTodo}>
        <input id="todoText" type="text" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}

export default TodoList;
