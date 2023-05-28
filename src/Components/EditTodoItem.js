// todo's 수정 및 삭제 컴포넌트

import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

export const EditTodoItem = ({
  task,
  toggleComplete,
  deleteTodo,
  editTodo,
}) => {
  return (
    <div className="TodoItem">
      <p
        onClick={() => {
          toggleComplete(task.id);
        }}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>

      {/* 할일 수정  */}
      <FiEdit className="todo-edit-icon" onClick={() => editTodo(task.id)} />
      {/* 할일 삭제 */}
      <RiDeleteBin6Line
        className="todo-delete-icon"
        onClick={() => deleteTodo(task.id)}
      />
    </div>
  );
};
