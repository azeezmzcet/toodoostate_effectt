
// parent function


import React, { useState, useEffect } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './TodoApp.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetch todos from JSON file
    fetch('/todos.json')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error fetching todos:', error));
  }, []);

  const addTodo = (text) => {
    if (text.trim() !== '') {
      const newTodo = { id: Date.now(), text };
      setTodos([...todos, newTodo]);
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  return (
    <div style={{ listStyleType: "bullet", textAlign: "left" }}>
      <h1 style={{textAlign:"center"}}>TODO List</h1>
      <TodoInput addTodo={addTodo}  />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default TodoApp;
