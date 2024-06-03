import React, { useState } from "react";
import Button from "../components/btn/Button.js";
import TextInput from "../components/TextInput";
import RemoveButton from "../components/btn/RemoveButton";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const keyPressEnter = (e) => {
    e.preventDefault();
    addTodo();
  };

  const clearTodos = () => {
    setTodos([]);
  };

  const removeTodo = (index) => {
    const filterTodo = todos.filter((_, i) => i !== index);
    setTodos(filterTodo);
  };

  return (
    <div className="App">
      <div className="max-w-md mx-auto p-5 ">
        <h1 className="overline text-sky-400/75 pt-10 pb-10 mr- mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          To Do List
        </h1>
        <div className="flex items-center justify-center space-x-4 mt-5">
          <form onSubmit={keyPressEnter}>
            <TextInput value={todo} onChange={(e) => setTodo(e.target.value)} />
          </form>
          <Button onClick={addTodo}>+</Button>
          <Button onClick={clearTodos}>Clear List</Button>
        </div>
        <div className="pt-10 ">
          <ul className="list-decimal">
            {todos.map((item, index) => (
              <li
                className=" font-semibold text-sky-700/100 indent-5 flex items-center justify-between my-2 divide-y divide-slate-700 border-t-2 border-sky-400/25"
                key={index}
              >
                {item}
                <div>
                  <RemoveButton onClick={(e) => removeTodo(index)}>
                    -
                  </RemoveButton>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
