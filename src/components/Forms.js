import React from "react";

export default function Forms(props){
    
    return(
         <div className="form-content">
            <h1>Adding the Task:</h1>
            <form action={props.addItem}>
              <input 
              type="text"
              name="task"
              placeholder="add task"
              />
              <button>Add Task</button>
            </form>
          </div>
    )
}    