import React from "react";

export default function Counter({tasks}){
    const totalTask=tasks.length;
    const completeTask= tasks.filter(task=>task.completed).length
    return(
        <div className="counter-content">
            <p>Number of the Tasks: <span>{totalTask}</span> </p>     
            <p>Number of the completed tasks: <span>{completeTask}</span> </p>

        </div>
    )
}