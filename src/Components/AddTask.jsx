import { TextField } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

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

  const addOnEnter = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <>
      <div className="bg-white w-1/3 max-lg:w-1/2 max-md:w-[90%] m-auto rounded-3xl text-center p-4 drop-shadow-xl">
        <h1 className="text-3xl font-bold">Add a New Task</h1>
        <div className="my-6 w-full">
          <TextField
            sx={{
              width: "90%",
              "& .MuiOutlinedInput-root": {
                borderRadius: "20px",
              }
            }}
            id="outlined-basic"
            label="New Task"
            variant="outlined"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
            onKeyDown={addOnEnter}
          />
          <motion.button
            whileTap={{ scale: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-[#1d66ed] transition-all hover:translate-z-1 text-white mt-6 p-2 px-10 rounded-xl"
            onClick={handleAddTask}
          >
            Add Task
          </motion.button>
        </div>
      </div>
    </>
  );
}

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default AddTask;
