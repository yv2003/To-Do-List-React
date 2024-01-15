import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function CreateTask({ modal, toggle, save }) {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const handler = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };
  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    save(taskObj);
    // setModal(!setModal);
  };
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default CreateTask;
