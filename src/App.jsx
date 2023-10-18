import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import AddTask from './components/AddTask'
import TasksList from './components/TasksList'
import './App.css'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Estudar Programação',
      completed: false,
    },
    {
      id: '2',
      title: 'Ler Livros',
      completed: true,
    },
    {
      id: '3',
      title: 'Fazer o site',
      completed: true,
    },
    {
      id: '4',
      title: 'Ler Livros',
      completed: false,
    },
    {
      id: '5',
      title: 'Fazer o site',
      completed: false,
    },
  ])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed }

      return task
    })

    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ]

    setTasks(newTasks)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId)

    setTasks(newTasks)
  }

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <TasksList
                  tasksList={tasks}
                  handleTaskClick={handleTaskClick}
                  handleTaskDeletion={handleTaskDeletion}
                />
              </>
            }
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
