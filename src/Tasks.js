import { useState } from "react";
import AddTODOForm from "./AddTODOForm";
import { v4 as uuid } from "uuid";


function Tasks() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    let newTask = { ...task, id: uuid() };
    setTasks((tasks) => [...tasks, newTask]);
  };

  return (
    <>
      <AddTODOForm addTask={addTask} />

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.task}</li>
        ))}
      </ul>
    </>
  );
}

export default Tasks;
