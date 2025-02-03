import { useState } from "react";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to delete a task
  const handleAddTask = (taskName) => {
    const newTask = { id: Math.random(), name: taskName}
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="bg-[#cde3fd] min-h-screen p-10">
      <AddTask onAddTask={handleAddTask} />
      {tasks.length === 0 ? (
        <h1 className="text-center text-4xl my-20">No Tasks Added Yet!</h1>
      ) : (
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      )}
    </div>
  );
}

export default App;
