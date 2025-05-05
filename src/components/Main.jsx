import React from "react";
import { useState, useEffect } from "react";
import Modal from "./Modal";

const Main = () => {
  const [isActive, setIsActive] = useState("All");
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const [checked, isChecked] = useState(false);

  const handleCompleted = (id) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      );
      console.log("After toggling completion:", updatedTodos);
      return updatedTodos;
    });
  };

  // Function to add a new todo
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const filteredTodos = todos.filter((todo) => {
    if (isActive === "All") return true;
    if (isActive === "Active") return !todo.isCompleted;
    if (isActive === "Completed") return todo.isCompleted;
    return true;
  });

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // This useEffect will run whenever todos changes
  useEffect(() => {
    console.log("Updated todos:", todos);
  }, [todos]);

  return (
    <>
      <Modal addTodo={addTodo} />

      <div className="flex pt-3 pb-4 px-6 mb-3 border-b border-slate-100">
        {todos.length === 0 ? (
          <p>No todos added!</p>
        ) : (
          <>
            <button
              className={`bg-none border-none text-sm font-medium py-2 px-3.5 cursor-pointer rounded-xl transition-all duration-200 ${
                isActive === "All" ? "filter-button" : "filter-button-nonactive"
              }`}
              onClick={() => setIsActive("All")}
            >
              All
            </button>

            <button
              className={`bg-none border-none text-sm font-medium py-2 px-3.5 cursor-pointer rounded-xl transition-all duration-200 ${
                isActive === "Active"
                  ? "filter-button"
                  : "filter-button-nonactive"
              }`}
              onClick={() => setIsActive("Active")}
            >
              Active
            </button>

            <button
              className={`bg-none border-none text-sm font-medium py-2 px-3.5 cursor-pointer rounded-xl transition-all duration-200 ${
                isActive === "Completed"
                  ? "filter-button"
                  : "filter-button-nonactive"
              }`}
              onClick={() => setIsActive("Completed")}
            >
              Completed
            </button>

            <div className="ml-auto text-sm text-[#64748b] bg-slate-100 py-1.5 px-3 rounded-[20px] flex items-center ">
              {todos.length} {todos.length === 1 ? "task" : "tasks"}
            </div>
          </>
        )}
      </div>

      <div className="pt-0 px-7 pb-7 max-h-100 overflow-y-auto task-container ">
        <div className="mt-2">
          {filteredTodos.map((todo, index) => (
            <div
              key={index}
              className="flex items-center p-4 mb-3 bg-white rounded-2xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:-translate-y-0.5"
            >
              <div
                className={`relative w-2.5 h-9 rounded-[20px] mr-4 ${
                  todo.type === "work"
                    ? "bg-[#fc8181]"
                    : todo.type === "learning"
                    ? "bg-[#68d391]"
                    : todo.type === "family"
                    ? "bg-[#4299e1]"
                    : todo.type === "personal"
                    ? "bg-[#9f7aea]"
                    : todo.type === "health"
                    ? "bg-[#f6ad55]"
                    : "bg-[#fc8181]"
                }`}
              ></div>
              <div className="relative">
                <input
                  checked={todo.isCompleted}
                  onChange={() => handleCompleted(todo.id)}
                  type="checkbox"
                  className="peer appearance-none h-6 w-6 border-2 border-[#e2e8f0] rounded-lg bg-white mr-4 mt-2 checked:bg-indigo-500 checked:border-indigo-500 checked:shadow-[0_0_0_2px_rgba(84,101,255,0.2)] cursor-pointer transition-all duration-200 shrink-0"
                />
                <div className="absolute text-white text-sm top-2.5 left-1.5 opacity-0 peer-checked:opacity-100 pointer-events-none select-none">
                  ✓
                </div>
              </div>
              <div className="grow-1 flex flex-col">
                <span
                  className={`${
                    todo.isCompleted
                      ? "line-through"
                      : "text-base transition-all duration-200 font-medium"
                  }`}
                >
                  {todo.task}
                </span>
                <div className="flex items-center text-xs text-[#94a3b8] ">
                  <span className="flex items-center mr-2">
                    <span className=" mr-2 text-xs">⏰</span>
                    {new Date(todo.date).toLocaleDateString()}
                  </span>
                  <span className="text-xs"> {todo.type}</span>
                </div>
              </div>

              <button
                onClick={() => handleDelete(todo.id)}
                className="bg-none border-none text-[#ef4444] opacity-[0.5] cursor-pointer text-lg p-1 ml-2 transition-all duration-200 rounded-[50%] w-7 h-7 flex items-center justify-center hover:opacity-[1] hover:bg-[#bb7c7255] pt-0"
              >
                x
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Main;
