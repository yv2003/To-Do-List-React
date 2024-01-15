import React, { useState,useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function EditTask({ modal, toggle, updateTask,taskObj }) {
  let [taskName, setTaskName] = useState("");
  let [description, setDescription] = useState("");
  const handler = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
    };
    
    useEffect(() => {
        setTaskName = (taskObj.Name)
        setDescription=(taskObj.Description)
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName;
        tempObj['Description'] = description;
        updateTask(tempObj);
    }
    
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <form action="">
            <div className="form-group">
              <label>Task Title</label>
              <input
                type="text"
                name="taskName"
                className="form-control"
                value={taskName}
                onChange={handler}
              />
            </div>
            <div className="form-group">
              {/* <input type="text" /> */}
              <label>Description</label>
              <textarea
                name="description"
                id=""
                rows="5"
                className="form-control"
                value={description}
                onChange={handler}></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleUpdate}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditTask;
