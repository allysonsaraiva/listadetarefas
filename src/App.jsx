import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import AddTask from './components/AddTask'
import TasksList from './components/TasksList'
import './App.css'
import TaskDetails from './components/TaskDetails'

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

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=10'
      )
      setTasks(data)
    }

    fetchTasks()
  }, [])

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
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <div className="List-Task">
                  <TasksList
                    tasksList={tasks}
                    handleTaskClick={handleTaskClick}
                    handleTaskDeletion={handleTaskDeletion}
                  />
                </div>
              </>
            }
          ></Route>

          <Route
            path="/detalhes/:taskTitle"
            exact
            element={<TaskDetails />}
          ></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App
