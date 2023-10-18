import React from 'react'
import { CgClose, CgInfo } from 'react-icons/cg'

import './Task.css'

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
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
        <button className="task-button">
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
