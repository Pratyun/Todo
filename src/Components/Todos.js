import React from "react";
import Todo from "./Todo";

function Todos(props) {
  return (
    <>
      <div className="container">
        <h3 className="text-center">Todos List</h3>
      </div>
      {props.todos.length === 0
        ? "No todos to display"
        : props.todos.map((todo) => {
            return (
              <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </>
  );
}

export default Todos;
