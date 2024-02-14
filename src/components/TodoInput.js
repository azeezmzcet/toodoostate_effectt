import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = () => {
    addTodo(newTodoText);
    setNewTodoText('');
  };

  
//Add functionality


  return (
    <div style={{textAlign:"center"}}>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo} >Add</button>
    </div>
  );
};

export default TodoInput;
