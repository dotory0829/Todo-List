// 메인 (form, input) 컴포넌트

import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault(); // prevent default action
    addTodo(value);
    setValue(""); // 제출 후 빈 문자열로 변경
  };

  return (
    <form className="TodoForm" onSubmit={submitHandler}>
      <input
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        className="todo-input"
        placeholder="주번은 나와서 칠판 지워라"
      />
      <button type="submit" className="todo-btn">
        칠판 지우개
      </button>
    </form>
  );
};
