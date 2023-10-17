import React from "react";

import Task from "./Task";

const TasksList = ({tasks }) => {
    return (
        <>
            {tasks?.map((task) => 
                <Task task={task} />
            )}
        </>
    )
}

export default TasksList