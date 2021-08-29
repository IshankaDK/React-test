import { useState } from "react"
import Header from "./components/Header";
import { Tasks } from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: '1st one',
      reminder: false
    },
    {
      id: 2,
      text: '2st one',
      reminder: false
    },
    {
      id: 3,
      text: '3st one',
      reminder: false
    }
  ]
  )

  // Delete Taks
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {
      ...task, reminder:!task.reminder
    } : task))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ('No Task Here')}
    </div>
  );
}

export default App;
