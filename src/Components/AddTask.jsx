import { TextField } from "@mui/material";
import { useState } from "react";

function AddTask(props) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      props.onAddTask(task);
      setTask("");
    } else {
      props.onAddTask("Untitled Task");
    }
  };

  const addOnEnter = () => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="bg-white w-1/3 max-lg:w-1/2 max-md:w-[90%] m-auto rounded-3xl text-center p-4">
      <h1 className="text-3xl">Add a New Task</h1>
      <div className="my-6 w-full">
        <TextField
          sx={{ "&.MuiTextField-root": { width: "90%" } }}
          id="outlined-basic"
          label="New Task"
          variant="outlined"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          onKeyDown={addOnEnter}
        />
        <button
          className="bg-[#1d66ed] text-white mt-6 p-2 px-10 rounded-xl"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
}

export default AddTask;
