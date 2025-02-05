import { useEffect, useState } from "react";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  useEffect(() => {
    if (Array.isArray(tasks) && tasks.length >= 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = (taskName) => {
    const newTask = { id: Math.random(), name: taskName, done: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleStatus = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="bg-[#cde3fd] min-h-screen p-10">
      <AddTask onAddTask={handleAddTask} />
      {tasks.length === 0 ? (
        <h1 className="text-center text-4xl my-20">No Tasks Added Yet!</h1>
      ) : (
        <TaskList
          tasks={tasks}
          onDeleteTask={deleteTask}
          toggleCompletion={toggleStatus}
        />
      )}
    </div>
  );
}

export default App;
