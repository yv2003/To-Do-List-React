import React from 'react';
import ToDoList from './components/ToDoList';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTask from './modals/CreateTask';
function App() {
  return (
    <div>
      <ToDoList />
      <CreateTask/>
    </div>
  )
}

export default App
