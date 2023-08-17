import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"

const TaskList = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask])
      setNewTask("")
    }
  }

  return (
    <div>
      <h2>Task list</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ fontSize: "10px", width: "150px" }}
        />
        <div></div>
        <button
          type="button"
          class="btn btn-outline-success"
          onClick={handleAddTask}>
          Add task
        </button>
      </div>
    </div>
  )
}

export default TaskList
