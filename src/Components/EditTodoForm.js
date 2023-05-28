// todo 수정시 input 컴포넌트
import React, { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default action

    editTodo(value, task.id);
  };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="todo-input"
        placeholder="쉬는시간에 안지우고 뭐했냐"
      />
      <button type="submit" className="todo-btn">
        칠판지우개
      </button>
    </form>
  );
};
