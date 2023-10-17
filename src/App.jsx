import React, { useState } from 'react'
import './App.css'

import AddTask from './components/AddTask'
import TasksList from './components/TasksList'

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
  ])

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: Math.random(10),
        completed: false,
      },
    ]

    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        <AddTask handleTaskAddition={handleTaskAddition} />
        <TasksList tasks={tasks} />
      </div>
    </>
  )
}

export default App
