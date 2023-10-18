import React from 'react'

import Task from './Task'

const TasksList = ({ tasksList, handleTaskClick, handleTaskDeletion }) => {
  return (
    <>
      {tasksList.map((task) => (
        <Task
          task={task}
          handleTaskClick={handleTaskClick}
          handleTaskDeletion={handleTaskDeletion}
        />
      ))}
    </>
  )
}

export default TasksList
