import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Button from './Button'
import './TaskDetails.css'

const TaskDetails = () => {
  const params = useParams()
  const navegate = useNavigate()

  const handleBackButtonClick = () => {
    navegate('/')
  }

  return (
    <>
      <div className="back-button-container" onClick={handleBackButtonClick}>
        <Button>Voltar</Button>
      </div>

      <div className="task-details-container">
        <h3>
          <li>{params.taskTitle}</li>
        </h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
          officia iusto earum nam vitae sed ex temporibus molestias dolores
          unde, quo sapiente tempora, quisquam aperiam vero placeat. Sit, enim
          impedit?
        </p>
      </div>
    </>
  )
}

export default TaskDetails
