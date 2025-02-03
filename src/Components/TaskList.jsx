import { useState } from "react";

function TaskList(props) {
  const [complete, setComplete] = useState({});

  const handleComplete = (id) => {
    setComplete((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };  

  return (
    <>
      {props.tasks.map((task) => (
        <div
          key={task.id}
          className={`bg-white w-1/3 max-lg:w-1/2 max-md:w-[90%] m-auto rounded-xl p-4 my-4 flex max-md:block max-md:text-center justify-between ${
            complete[task.id] ? "opacity-65" : ""
          }`}
        >
          <h1 className={`text-2xl max-md:my-5 ${complete[task.id] && "line-through"}`}>{task.name}</h1>
          <div>
            <button
              className={`text-white p-2 px-4 rounded-xl me-4 ${
                complete[task.id] ? "bg-red-600" : "bg-green-700"
              }`}
              onClick={() => handleComplete(task.id)}
            >
              {complete[task.id] ? "Restore" : "Complete?"}
            </button>
            <button
              className={`text-white p-2 px-4 rounded-xl ${
                complete[task.id] ? "bg-[#1d66ed]" : "bg-red-600"
              }`}
              onClick={() => props.onDeleteTask(task.id)} 
            >
              {complete[task.id] ? "Remove" : "Delete"}
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TaskList;
