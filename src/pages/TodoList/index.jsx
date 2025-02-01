import React, { useEffect, useState } from 'react'
import './index.css'
import toast, { Toaster } from 'react-hot-toast'

function TodoList() {
  const [taskName, setTaskName] = useState("")
  const [taskText, setTaskText] = useState("")
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const localTasks = JSON.parse(localStorage.getItem("tasks")) || []
    setTasks(localTasks)
  }, [])

  function validate() {
    if (!taskName) {
      alert("Task nomini kiritishingiz kerak!")
      return false
    } else if (taskName.length < 3) {
      alert("Task nomi eng kamida 3 ta belgidan iborat bo'lishi kerak!")
      return false
    }

    if (!taskText) {
      alert("Task ga ozgina tushuncha bering!")
      return false
    }

    return true
  }

  function handleAdd(event) {
    event.preventDefault()

    let isValid = validate()
    if (!isValid) {
      return
    }

    const newTask = {
      id: Date.now(),
      name: taskName,
      text: taskText,
      completed: true
    }

    setTasks([...tasks, newTask])
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]))
    setTaskName("")
    setTaskText("")
    toast.success("To do muvaffaqiyatli qo'shildi!")
  }

  function handleChangeTask(taskId) {
    const change = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    )
    setTasks(change)
    localStorage.setItem("tasks", JSON.stringify(change))
  }

  function handleDelete(id) {
    const deletetask = confirm("Rostdan ham o'chirmoqchimisiz!")
    if (deletetask) {
      const deleteTask = tasks.filter(task => task.id !== id)
      setTasks(deleteTask)
      localStorage.setItem("tasks", JSON.stringify(deleteTask))
      toast.error("Task o'chirildi!")
    }
  }

  return (
    <div className='container-todo'>
      <form className="form">
        <h3>To Do List</h3>
        <label htmlFor="name">Biror bir vazifani nomini kiriting!</label>
        <input value={taskName} onChange={(e) => { setTaskName(e.target.value) }} type="text" id='name' name='name' placeholder='Enter task name...' />
        <label htmlFor="text">Task haqida tushuncha yozing!</label>
        <textarea value={taskText} onChange={(e) => { setTaskText(e.target.value) }} name="text" id="text" placeholder='Enter task description'></textarea>
        <button onClick={handleAdd} className="btn">Add Task</button>
        <Toaster />
      </form>

      <div className="todos">
        {
          tasks.length > 0 && tasks.map((task) => (
            <div className="todo" key={task.id}>
              <h4>{task.name}</h4>
              <p>{task.text}</p>
              <button onClick={() => handleChangeTask(task.id)} className={task.completed ? "btn-completed" : "btn-pending"}>
                {task.completed ? "Bajarilgan" : "Bajarilmagan"}
              </button>
              <button onClick={() => handleDelete(task.id)} className="delete">Delete</button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default TodoList
