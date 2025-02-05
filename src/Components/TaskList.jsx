import { motion } from "framer-motion";
import PropTypes from "prop-types";

function TaskList(props) {
  const handleDelete = (task) => {
    props.onDeleteTask(task);
  };

  return (
    <>
      {props.tasks.map((task) => (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8, opacity: 1 }}
          key={task.id}
          className={`bg-white w-1/3 max-lg:w-1/2 max-md:w-[90%] m-auto rounded-xl p-4 my-4 flex max-md:block max-md:text-center justify-between drop-shadow-xl ${
            task.done == true ? "opacity-65" : ""
          }`}
        >
          <h1
            className={`text-2xl max-md:my-5 ${
              task.done == true && "line-through"
            }`}
          >
            {task.name}
          </h1>
          <div>
            <button
              className={`text-white p-2 px-4 rounded-xl me-4 ${
                task.done == true
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-green-700 hover:bg-green-800"
              } transition-all`}
              onClick={() => {
                props.toggleCompletion(task.id);
              }}
            >
              {console.log("Status", task.done)}
              {task.done == true ? "Restore" : "Complete?"}
            </button>
            <button
              className={`text-white p-2 px-4 rounded-xl ${
                task.done == true
                  ? "bg-[#1d66ed] hover:bg-[#1a54c0]"
                  : "bg-red-600 hover:bg-red-700"
              } transition-all`}
              onClick={() => handleDelete(task.id)}
            >
              {task.done == true ? "Remove" : "Delete"}
            </button>
          </div>
        </motion.div>
      ))}
    </>
  );
}

TaskList.propTypes = {
  onDeleteTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  toggleCompletion: PropTypes.func.isRequired,
};

export default TaskList;
