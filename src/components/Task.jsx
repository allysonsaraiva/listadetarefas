import React from 'react'
import { CgClose, CgInfo } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom'

import './Task.css'

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const navegate = useNavigate()

  const handleTaskDetailsClick = () => {
    navegate(`detalhes/${task.title}`)
  }

  return (
    <div
      className="task-container"
      style={
        task.completed
          ? {
              borderLeft: '6px solid darkviolet',
              textDecoration: 'line-through',
              fontStyle: 'italic',
            }
          : {
              borderLeft: '6px solid chartreuse',
            }
      }
    >
      <div className="task-title" onClick={() => handleTaskClick(task.id)}>
        {task.title}
      </div>

      <div className="button-container">
        <button className="task-button" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
        <button
          className="task-button"
          onClick={() => handleTaskDeletion(task.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  )
}

export default Task
