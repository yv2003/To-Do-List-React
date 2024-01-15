import React, { useState, useEffect } from "react";
import "../App.css";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";

function ToDoList() {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");
    if (arr) {
      let jsonObj = JSON.parse(arr); //convert arr string to arr object
      setTaskList(jsonObj);
    }
  }, []);

  const deleteTask = (index) => {
    taskList.splice(index, 1);
    // console.log(tempList)
    console.log(taskList)
    console.log(index)
    localStorage.setItem("taskList", JSON.stringify(taskList));
    setTaskList(taskList);
    window.location.reload()
  };

  const updateListArray = (obj, index) => {
    let tempList = (taskList[index] = obj);
    localStorage.setItem("taskName",JSON.stringify(tempList))
    setTaskList(tempList);
    window.location.reload();
  };

  const toggle = () => {
    setModal(!modal);
  };
  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setModal(false);
    setTaskList(tempList);
  };
  return (
    <>
      <div className="header text-center">
        <h3 className="pt-[75px] pt-3">To Do List</h3>
        {/* <input type="text" /> */}
        <button className="btn btn-primary mt-2" onClick={() => setModal(true)}>
          Create Task
        </button>
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
      <div className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            <Card key={index} taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}/>
          ))}
      </div>
      {/* <div></div> */}
    </>
  );
}

export default ToDoList;
