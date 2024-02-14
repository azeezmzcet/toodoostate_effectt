import React from 'react';
import TodoItem from './TodoItem';

// render and pass the todos to the (//TodoItem ku)

const TodoList = ({ todos, deleteTodo, updateTodo }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
